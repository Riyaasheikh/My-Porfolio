import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import riyaPhoto from '../../assets/myImg.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".about-image, .about-text", { opacity: 0 });

      gsap.to(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        duration: 1.2,
        x: 0,
        opacity: 1,
        ease: "power3.out",
        startAt: { x: -100 } 
      });

      gsap.to(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%"
        },
        duration: 1.2,
        x: 0,
        opacity: 1,
        ease: "power3.out",
        delay: 0.3,
        startAt: { x: 100 }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const boxStyle = {
    background: '#111827',
    border: '1px dashed rgba(255, 255, 255, 0.2)',
    borderRadius: '12px'
  };

  return (
    <section id="about" ref={sectionRef} className="bg-black py-5" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-title mb-5">
          <h2 className="text-white fw-bold">About Me</h2>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="about-image">
              <img 
                src={riyaPhoto} 
                alt="Riya Rafiq" 
                className="img-fluid rounded-4 shadow-lg border border-secondary" 
              />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-text text-white">
              <h3 className="mb-3 text-info fw-semibold">Full-Stack Developer & Mobile App Specialist</h3>
              <p className="opacity-1 mb-4">
                Hello! I'm Riya Rafiq. 
                I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-4 h-100" style={boxStyle}>
                    <i className="fas fa-user-graduate me-2 text-info fs-5"></i>
                    <span className="text-white fw-bold">Education</span> 
                    <p className="mb-0 mt-2 text-white-50 small">BS Computer Science, COMSATS University</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 h-100" style={boxStyle}>
                    <i className="fas fa-briefcase me-2 text-warning fs-5"></i>
                    <span className="text-white fw-bold">Experience</span> 
                    <p className="mb-0 mt-2 text-white-50 small">Intern at Developer Hub Co.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;