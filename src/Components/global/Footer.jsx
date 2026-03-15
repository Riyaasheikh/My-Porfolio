import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="social-links">
        <a 
          href="https://github.com/Riyaasheikh" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://www.linkedin.com/in/riya-rafiq-1568363a8" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
  href="https://www.youtube.com/@GlowyGrove" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
  aria-label="YouTube"
>
  <i className="fab fa-youtube"></i>
</a>
<a 
  href="https://wa.me/923167305023" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
  aria-label="WhatsApp"
>
  <i className="fab fa-whatsapp"></i>
</a>

        
      </div>
      
      <p className="copyright-text">
        &copy; {currentYear} Riyan Rafiq. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;