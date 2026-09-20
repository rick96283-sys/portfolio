import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">

            <div className="footer-logo">
              RN
            </div>

            <h3>
              Ritesh <span>Noukudkar</span>
            </h3>

            <p>
              Data Analyst passionate about transforming raw data
              into meaningful insights through analytics,
              visualization, and technology.
            </p>

          </div>


          {/* Quick Links */}
          <div className="footer-links">

            <h4>Quick Links</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>

          </div>


          {/* Connect */}
          <div className="footer-connect">

            <h4>Let's Connect</h4>

            <p>
              Have an opportunity or project in mind?
              Feel free to connect with me.
            </p>

            <div className="footer-socials">

              <a
                href="https://github.com/RiteshNoukudkar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ritesh-noukudkar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:riteshnoukudkar@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>


        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p>
            © 2026 <span>Ritesh Noukudkar</span>. All rights reserved.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;