import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import p1 from '../../assets/p1.png';
import p2 from '../../assets/p2.png';
import p3 from '../../assets/p3.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, componentRef); 

    return () => ctx.revert(); 
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      img: p3,
      tech: ["React", "Laravel", "MySQL"], 
      desc: "A full-featured e-commerce platform with product listings and secure checkout.",
      link: 'https://github.com/Riyaasheikh/ecommerce-fullstack-design'
    },
    {
      title: "Quran Website",
      img: p1, 
      tech: ["React", "Bootstrap", "GSAP"], 
      desc: "A customizable Quran template with animated sections and responsive design.",
      link: "https://github.com/Riyaasheikh/Quran-project"
    },
    {
      title: "Interactive Web Portfolio",
      img: p2, 
      tech: ["React", "Tailwind CSS", "GSAP"], 
      desc: "A high-end interactive portfolio design. Built with React, Tailwind CSS, and GSAP.",
      link: "https://github.com/Riyaasheikh/Porfore"
    }
  ];

  return (
    <section id="projects" ref={componentRef} className="projects-section">
      <div className="container py-5">
        <div className="section-title mb-5">
          <h2 className="text-white">My Projects</h2>
        </div>
        
        <div className="row g-4">
          {projects.map((project, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="project-card">
                
                <div className="project-image-wrapper">
                  <img src={project.img} alt={project.title} className="project-image" />
                </div>
                
                <div className="p-4">
                  <h3 className="project-title mb-3">{project.title}</h3>
                  
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="project-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="project-desc mb-4">{project.desc}</p>
                  
                  <a 
                    href={project.link || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-project"
                  >
                    View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;