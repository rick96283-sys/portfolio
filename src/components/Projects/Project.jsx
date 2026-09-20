import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="projects-heading">
          <span>MY PROJECTS</span>

          <h2>Projects I've Built</h2>

          <p>
            Practical data analytics and AI projects where I applied
            Python, SQL, visualization, machine learning, and analytical
            techniques to solve real-world problems.
          </p>
        </div>


        {/* =========================
            PROJECTS GRID
        ========================== */}

        <div className="projects-grid">


          {/* =========================
              PROJECT 01
          ========================== */}

          <div className="project-card">

            <div className="project-number">
              01
            </div>

            <div className="project-content">

              <div className="project-type">
                DATA ANALYTICS
              </div>

              <h3>
                Sentiment Analysis
              </h3>

              <p>
                An internship project that analyzes customer reviews
                and classifies text into positive, negative, and neutral
                sentiments to understand customer opinions and feedback.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>NLTK</span>
                <span>Machine Learning</span>
                <span>Data Analysis</span>
              </div>

              <div className="project-buttons">

                {/* Replace this URL with your actual repository */}
                <a
                  href="#"
                  className="project-btn primary-project-btn"
                >
                  GitHub ↗
                </a>

                {/* Replace this URL with your actual project */}
                <a
                  href="#"
                  className="project-btn secondary-project-btn"
                >
                  View Project ↗
                </a>

              </div>

            </div>
          </div>



          {/* =========================
              PROJECT 02
          ========================== */}

          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <div className="project-content">

              <div className="project-type">
                DATA ANALYTICS
              </div>

              <h3>
                Customer Segmentation
              </h3>

              <p>
                An internship project focused on analyzing customer
                data and identifying different customer groups based
                on purchasing behavior and patterns.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Clustering</span>
                <span>Data Analysis</span>
              </div>

              <div className="project-buttons">

                {/* Replace this URL with your actual repository */}
                <a
                  href="#"
                  className="project-btn primary-project-btn"
                >
                  GitHub ↗
                </a>

                {/* Replace this URL with your actual project */}
                <a
                  href="#"
                  className="project-btn secondary-project-btn"
                >
                  View Project ↗
                </a>

              </div>

            </div>
          </div>



          {/* =========================
              PROJECT 03
          ========================== */}

          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <div className="project-content">

              <div className="project-type">
                EXPLORATORY DATA ANALYSIS
              </div>

              <h3>
                Retail Sales EDA
              </h3>

              <p>
                An exploratory data analysis project focused on
                understanding sales trends, customer behavior,
                product performance, and extracting useful insights
                from retail sales data.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
                <span>EDA</span>
              </div>

              <div className="project-buttons">

                <a
                  href="https://github.com/RiteshNoukudkar/Retail-Sales-EDA"
                  className="project-btn primary-project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://github.com/RiteshNoukudkar/Retail-Sales-EDA"
                  className="project-btn secondary-project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project ↗
                </a>

              </div>

            </div>
          </div>



          {/* =========================
              PROJECT 04
          ========================== */}

          <div className="project-card">

            <div className="project-number">
              04
            </div>

            <div className="project-content">

              <div className="project-type">
                AI / WEB DEVELOPMENT
              </div>

              <h3>
                DreamPlay AI
              </h3>

              <p>
                An AI-powered platform that converts natural language
                prompts into playable 2D games. The project combines
                AI-based prompt processing with game development
                technologies to generate interactive gameplay
                experiences.
              </p>

              <div className="project-tags">
                <span>Machine Learning</span>
                <span>Python</span>
                <span>API</span>
                <span>AI</span>
                <span>HTML5 Canvas</span>
              </div>

              <div className="project-buttons">

                {/* Add your DreamPlay AI GitHub URL here */}
                <a
                  href="#"
                  className="project-btn primary-project-btn"
                >
                  GitHub ↗
                </a>

                {/* Add your live project URL here */}
                <a
                  href="#"
                  className="project-btn secondary-project-btn"
                >
                  View Project ↗
                </a>

              </div>

            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Projects;