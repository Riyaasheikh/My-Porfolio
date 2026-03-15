import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import riyanPhoto from '../../assets/myImg.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Image Animation
      gsap.to(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power3.out",
        onStart: () => gsap.set(".about-image", { x: -100, opacity: 0 }) 
      });

      // Text Animation
      gsap.to(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%"
        },
        duration: 1,
        x: 0,
        opacity: 1,
        ease: "power3.out",
        delay: 0.2,
        onStart: () => gsap.set(".about-text", { x: 100, opacity: 0 })
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} style={{ overflow: 'hidden' }}>
      <div className="container py-5">
        <div className="section-title mb-5"><h2>About Me</h2></div>
        
        {/* Removed Bootstrap grid classes here to let custom Flexbox take over */}
        <div className="about-content">
          
          <div className="about-image">
            <img 
              src={riyanPhoto} 
              alt="Riyan" 
              className="img-fluid" 
            />
          </div>

          <div className="about-text">
            <h3>Full Stack Developer from Sahiwal, Pakistan</h3>
            <p>Hello! I'm Riya Rafiq, a 22-year-old passionate developer currently in my 7th semester at Comsats University Islamabad, Sahiwal Campus.</p>
            
            {/* Kept Bootstrap grid for these inner cards as it works well here */}
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <div className="p-3 border border-secondary border-dashed rounded h-100">
                  <i className="fas fa-user-graduate me-2" style={{ color: 'var(--secondary)' }}></i>
                  <strong>Education:</strong> 
                  <p className="mb-0 mt-2">BS Computer Science, COMSATS Sahiwal</p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="p-3 border border-secondary border-dashed rounded h-100">
                  <i className="fas fa-map-marker-alt me-2" style={{ color: 'var(--secondary)' }}></i>
                  <strong>Location:</strong> 
                  <p className="mb-0 mt-2">Sahiwal, Pakistan</p>
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