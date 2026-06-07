import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';
import p5 from '../../assets/p5.jpeg';
import p4 from '../../assets/image.png';
import p6 from '../../assets/img9.png';
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const componentRef = useRef(null);
  const initialCount = 3; 
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const projects = [
    {title:"AI HABIT Tracker", img: p6, tech: ["React", "Express", "MongoDb", "Node js"], category: "Web", desc: "AI Weekly Reports: Analyzes execution data, Smart Habit Suggestions, Interactive AI Chat ", link:'https://github.com/Riyaasheikh/AI_HABIT_TRACKER/'},
    { title: " job board hiring portal", img: p4, tech: ["Node.js", "Supabase PostgreSQL database", "GSAP","TypeScript"], category:'mern', desc: "HireBoard is a real-time enterprise job portal featuring a data-driven Employer Dashboard with an automated Applicant Tracking System (ATS) and a matching Job Seeker search feed.", link: 'https://github.com/Riyaasheikh/job-portal'},
    { title: "E-commerce Platform", img: p3, tech: ["React", "Laravel", "MySQL"], category: "web", desc: "A full-featured e-commerce platform with product listings and secure checkout.", link: 'https://github.com/Riyaasheikh/ecommerce-fullstack-design' },
    { title: "Quran Web App", img: p1, tech: ["React", "tailwind", "GSAP", "Laravel"], category: "web", desc: "A customizable Quran web app with bookmark, continue reading,translation,tafseer and audio features.", link: "https://github.com/Riyaasheikh/Quran_270/" },
    { title: "Task Flow App", img: p5, tech: ["Flutter", "Material UI", "Firebase", "Dart"], category: "mobile", desc: "A mobile productivity application designed for task management and tracking.", link: "https://github.com/Riyaasheikh/task-flow" },
    { title: "Portfolio Collaboration", img: p2, tech: ["React", "GSAP", "tailwind"], category: "web", desc: "A high-end interactive portfolio design. Real time Collaboration Built with React, Tailwind CSS, and GSAP.", link: "https://github.com/Riyaasheikh/Porfore" },

  ];

  const toggleProjects = () => {
    if (visibleCount < projects.length) {
      setVisibleCount(projects.length);
    } else {
      setVisibleCount(initialCount);
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, componentRef); 

    return () => ctx.revert(); 
  }, [visibleCount]);

  return (
    <section id="projects" ref={componentRef} className="projects-section py-5">
      <div className="container">
        <div className="section-title mb-5 text-center">
          <h2 className="text-white display-5 fw-bold">My Projects</h2>
        </div>
        
        <div className="row g-4">
          {projects.slice(0, visibleCount).map((project, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="project-card h-100">
                <div className="project-image-wrapper">
                  <img src={project.img} alt={project.title} className="project-image" />
                </div>
                <div className="p-4">
                  <h3 className="project-title h5 mb-3">{project.title}</h3>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="project-badge small">{t}</span>
                    ))}
                  </div>
                  <p className="project-desc mb-4 text-secondary small">{project.desc}</p>
                  <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="btn-project w-100 text-center">
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > initialCount && (
          <div className="text-center mt-5">
            <button 
              onClick={toggleProjects} 
              className="btn btn-outline-info px-5 py-2 fw-bold"
              style={{ borderRadius: '30px' }}
            >
              {visibleCount < projects.length ? "View More Projects" : "View Less"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;