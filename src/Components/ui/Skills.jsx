import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const componentRef = useRef(null);
  const dropZoneRef = useRef(null);

  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "#e34c26" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "#264de4" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f0db4f" },
    { name: "React", icon: "fab fa-react", color: "#61dbfb" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#563d7c" },
    { name: "GSAP", icon: "fas fa-code", color: "#88ce02" },
    { name: "PHP", icon: "fab fa-php", color: "#777bb3" },
    { name: "Laravel", icon: "fas fa-server", color: "#ff2d20" }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const skillItems = gsap.utils.toArray('.skill-drop-item');
      const containerWidth = dropZoneRef.current.offsetWidth;
      
      // Circle calculation logic
      const centerX = containerWidth / 2;
      const centerY = 300;
      const radius = 220;
      const angleStep = (Math.PI * 2) / skills.length;

      skillItems.forEach((item, i) => {
        const angle = i * angleStep;
        const targetX = centerX + radius * Math.cos(angle) - 60; // Offset for half item width
        const targetY = centerY + radius * Math.sin(angle);

        // Initial setup
        gsap.set(item, {
          x: Math.random() * (containerWidth - 120),
          y: -150,
          opacity: 0
        });

        // The Drop Animation
        gsap.to(item, {
          scrollTrigger: {
            trigger: "#skills",
            start: "top 40%",
            end: "bottom 20%",
            scrub: 1.5, // Smooth scrubbing
          },
          y: targetY,
          x: targetX,
          opacity: 1,
          ease: "bounce.out"
        });
      });

      // Simple Fade-in for the fallback grid (mobile)
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 90%"
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      });

    }, componentRef);

    return () => ctx.revert();
  }, [skills.length]);

  return (
    <section id="skills" ref={componentRef} style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)' }}>
      <div className="container position-relative">
        <div className="section-title text-center mb-5">
          <h2 className="text-white">My Skills</h2>
        </div>

        {/* Droplet Animation Zone - Visible on Desktop */}
        <div className="skill-drop-zone d-none d-lg-block" ref={dropZoneRef} style={{ height: '650px', position: 'relative' }}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-drop-item text-center p-3 rounded-4 shadow" 
                 style={{ 
                   position: 'absolute', 
                   width: '120px', 
                   background: 'rgba(255,255,255,0.05)', 
                   backdropFilter: 'blur(10px)', 
                   border: '1px solid rgba(255,255,255,0.1)', 
                   color: skill.color 
                 }}>
              <i className={`${skill.icon} fa-3x mb-2`}></i>
              <div className="fw-bold text-white">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Static Grid - Visible on Mobile/Tablet */}
        <div className="skills-grid row g-4 d-lg-none mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3">
              <div className="skill-card p-4 text-center rounded-4 h-100" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <i className={`${skill.icon} fa-2x mb-2`} style={{ color: skill.color }}></i>
                <h3 className="h6 mb-0 text-white">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;