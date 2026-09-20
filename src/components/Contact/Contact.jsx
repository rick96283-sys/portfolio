import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span>CONTACT</span>

          <h2>
            Let's Work <br />
            <strong>Together</strong>
          </h2>

          <p>
            I'm always open to discussing new opportunities, data analytics
            projects, and ideas where I can use data to create meaningful
            insights.
          </p>
        </div>


        {/* Contact Content */}
        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <p>
              Whether you have an opportunity, a project idea, or simply
              want to connect, feel free to reach out.
            </p>


            {/* Email */}
            <a
              href="mailto:riteshnoukudkar@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <h4>riteshnoukudkar@gmail.com</h4>
              </div>
            </a>


            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <h4>India</h4>
              </div>
            </div>


            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>

              <div>
                <span>Phone</span>
                <h4>Available on request</h4>
              </div>
            </div>


            {/* Social Links */}
            <div className="contact-socials">

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


          {/* Right Side - Contact Form */}
          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              action="https://formsubmit.co/riteshnoukudkar@gmail.com"
              method="POST"
            >

              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />


              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>


              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message ↗
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;