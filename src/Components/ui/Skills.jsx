import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    { name: "Laravel", icon: "fas fa-server", color: "#ff2d20" },
    { name: "Flutter", icon: "fas fa-mobile-alt", color: "#02569B" },
    { name: "Firebase", icon: "fas fa-fire", color: "#FFCA28" },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const skillItems = gsap.utils.toArray(".skill-drop-item");
    
      const containerWidth = dropZoneRef.current.offsetWidth;
      const containerHeight = dropZoneRef.current.offsetHeight;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      const radius = Math.min(containerWidth, containerHeight) * 0.35; 
      const angleStep = (Math.PI * 2) / skills.length;

      skillItems.forEach((item, i) => {
        const angle = i * angleStep;
        
        const targetX = centerX + radius * Math.cos(angle) - (item.offsetWidth / 2);
        const targetY = centerY + radius * Math.sin(angle) - (item.offsetHeight / 2);

        gsap.set(item, {
          x: Math.random() * (containerWidth - 100),
          y: -200,
          opacity: 0,
          rotation: Math.random() * 45,
        });

        gsap.to(item, {
          scrollTrigger: {
            trigger: "#skills",
            start: "top 30%",
            end: "top -10%", 
            scrub: 1.5,
          },
          x: targetX,
          y: targetY,
          opacity: 1,
          rotation: 0,
          ease: "back.out(1.7)", 
        });
      });


      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out"
      });
    }, componentRef);

    return () => ctx.revert();
  }, [skills.length]);

  return (
    <section
      id="skills"
      ref={componentRef}
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)",
        minHeight: "100vh",
        overflow: "hidden"
      }}
    >
      <div className="container position-relative">
        <div className="section-title text-center mb-5">
          <h2 className="text-white fw-bold display-5">My Tech Stack</h2>
          <p className="text-white-50">Tools and technologies I use to bring ideas to life</p>
        </div>

        <div
          className="skill-drop-zone d-none d-lg-block"
          ref={dropZoneRef}
          style={{ height: "600px", position: "relative" }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-drop-item text-center p-3 rounded-4"
              style={{
                position: "absolute",
                width: "110px",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: skill.color,
                zIndex: 2
              }}
            >
              <i className={`${skill.icon} fa-3x mb-2`}></i>
              <div className="fw-bold text-white small">{skill.name}</div>
            </div>
          ))}
          

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(97,219,251,0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }}></div>
        </div>

        <div className="skills-grid row g-3 d-lg-none mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4">
              <div
                className="skill-card p-4 text-center rounded-4 h-100"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
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