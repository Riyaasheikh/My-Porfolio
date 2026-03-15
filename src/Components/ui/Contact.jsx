import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm, ValidationError } from '@formspree/react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [state, handleSubmit] = useForm("xbdzawlo");

  useEffect(() => {
    // Using gsap.context prevents the animation from glitching in React
    let ctx = gsap.context(() => {
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
        },
        duration: 1,
        y: 50,
        opacity: 0, // FIXED: Starts invisible and fades in smoothly
        stagger: 0.3,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleans up the animation if the user navigates away
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
      <div className="container py-5">
        <div className="section-title text-center mb-5">
          <h2 className="text-white">Get In Touch</h2>
        </div>
        
        <div className="row g-5">
          {/* Left Side: Contact Information */}
          <div className="col-lg-5">
            <div className="contact-card p-4 rounded-4 shadow h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
              <h3 className="mb-4" style={{ color: 'var(--accent)' }}>Contact Information</h3>
              
              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px', background: 'rgba(0, 159, 253, 0.1)', color: 'var(--secondary)' }}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h5 className="mb-0 text-white">Location</h5>
                  <p className="mb-0 text-white opacity-75">Sahiwal, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon me-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px', background: 'rgba(0, 159, 253, 0.1)', color: 'var(--secondary)' }}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h5 className="mb-0 text-white">Email</h5>
                  <p className="mb-0 text-white opacity-75">itsriyaasheikh08@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Formspree Form */}
          <div className="col-lg-7">
            <div className="contact-card p-4 rounded-4 shadow" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              
              {state.succeeded ? (
                <div className="text-center py-5">
                  <div className="mb-4" style={{ color: 'var(--secondary)', fontSize: '4rem' }}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3 className="text-white mb-3">Message Sent!</h3>
                  <p className="text-white opacity-75">Thanks for reaching out! I will get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <h3 className="mb-4" style={{ color: 'var(--accent)' }}>Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input id="name" type="text" name="name" className="form-control custom-input" placeholder="Your Name" required />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-danger mt-1 small" />
                    </div>
                    
                    <div className="mb-3">
                      <input id="email" type="email" name="email" className="form-control custom-input" placeholder="Your Email" required />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-danger mt-1 small" />
                    </div>
                    
                    <div className="mb-3">
                      <input id="subject" type="text" name="subject" className="form-control custom-input" placeholder="Subject" required />
                      <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-danger mt-1 small" />
                    </div>
                    
                    <div className="mb-3">
                      <textarea id="message" name="message" className="form-control custom-input" rows="5" placeholder="Your Message" required></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-danger mt-1 small" />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={state.submitting} 
                      className="btn w-100 fw-bold py-3 mt-2" 
                      style={{ 
                        backgroundColor: state.submitting ? '#555' : '#009ffd', 
                        color: 'white', 
                        border: 'none', 
                        transition: 'all 0.3s ease',
                        cursor: state.submitting ? 'not-allowed' : 'pointer',
                        transform: state.submitting ? 'none' : 'translateY(-2px)',
                        boxShadow: state.submitting ? 'none' : '0 5px 15px rgba(0, 159, 253, 0.3)'
                      }}
                    >
                      {state.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;