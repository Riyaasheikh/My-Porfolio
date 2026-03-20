import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", { duration: 1, y: 50, opacity: 0, ease: "power3.out" });
      gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, delay: 0.2, ease: "power3.out" });
      gsap.from(".hero-text", { duration: 1, y: 50, opacity: 0, delay: 0.4, ease: "power3.out" });
      
      gsap.from(".btn-primary", {
        duration: 1,
        y: 20, 
        opacity: 1,
        delay: 0.6,
        ease: "power3.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const heroStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh', 
    padding: '0 20px',
    background: `linear-gradient(135deg, rgba(26, 26, 46, 0.9) 0%, rgba(22, 33, 62, 0.9) 100%), 
                 url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1170&q=80') center/cover`,
  };

  return (
    <section  className='d-flex align-items-center justify-content-center relative mt-5' style={heroStyle} ref={heroRef}>
      <div className="hero-content">
        <h1 className="hero-title mb-3" style={{ color: '#ffffff', fontSize: '3.5rem', marginBottom: '0.5rem' }}>
          Riya Rafiq
        </h1>
        <h2 className="hero-subtitle mb-4" style={{ color: 'var(--secondary)', fontSize: '2rem' }}>
          Full Stack & Mobile App Developer
        </h2>
        <p className="hero-text" style={{ color: '#d1d5db', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: '1.6' }}>
          I build exceptional digital experiences with modern web technologies. Currently studying at COMSATS Sahiwal.
        </p>
        <a href="#projects" className="btn-primary">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;