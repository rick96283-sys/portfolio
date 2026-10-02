import { useEffect,useState } from "react";
import myProfile from "./assets/images/myprof.png";
import "./Hero.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";


function Hero() {
  //typing effect 
    const roles = [
  "Data Analyst",
  "Power BI Developer",
  "React Developer",
  "Python Developer"
];

const [roleIndex, setRoleIndex] = useState(0);
const [displayText, setDisplayText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentRole = roles[roleIndex];

  const typingSpeed = isDeleting ? 60 : 120;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setDisplayText(currentRole.substring(0, displayText.length + 1));

      if (displayText.length + 1 === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      setDisplayText(currentRole.substring(0, displayText.length - 1));

      if (displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
      }
    }
  }, typingSpeed);

  return () => clearTimeout(timer);
}, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <div className="availability">
          <span className="status-dot"></span>
          Available for Data Analyst roles
        </div>
        
        <h1>
          Ritesh Maruti
          <br />
          <span>Noukudkar</span>
        </h1>

        <h2>
          I'm a <span>{displayText}</span>
        </h2>

        <p>
          Turning raw data into business insights through analytics,
          visualization and automation.
        </p>

        <div className="hero-buttons">
         <a href="/Ritesh_Noukudkar_DA_9067140037.pdf" className="btn primary-btn">
          Download Resume
               </a>

          <a href="#projects" className="btn secondary-btn">
            View Projects →
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
            <a
          href="https://github.com/RiteshNoukudkar"
          target="_blank"
          rel="noopener noreferrer"
            aria-label="GitHub"
               >
                <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/ritesh-noukudkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=riteshnoukudkar@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
>
  <FaEnvelope />
</a>

        </div>
        <div className="hero-stats">

      <div className="stat-card">
        <h3>4+</h3>
        <p>Projects</p>
           </div>

  <div className="stat-card">
    <h3>2+</h3>
    <p>Internships</p>
  </div>

  <div className="stat-card">
    <h3>12+</h3>
    <p>Certificates</p>
  </div>

  <div className="stat-card">
    <h3>1+</h3>
    <p>Publications</p>
  </div>

  <div className="stat-card">
    <h3>6+</h3>
    <p>GitHub Repos</p>
  </div>

</div>
      </div>
<div className="hero-image">
     <img src={myProfile} alt="Ritesh Noukudkar" />           </div>
    </section>
    
  );
}

export default Hero;