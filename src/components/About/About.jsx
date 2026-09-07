import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="about-heading">
          <span>ABOUT ME</span>
          <h2>Turning Data Into <br /> Meaningful Insights</h2>
        </div>

        <div className="about-content">

          <div className="about-intro">
            <h3>Who I Am</h3>

            <p>
              I'm Ritesh Maruti Noukudkar, a Data Analyst passionate about
              transforming raw data into meaningful business insights.
            </p>

            <p>
              I work with data analysis, visualization, SQL, Python, Power BI,
              and Excel to understand patterns, solve problems, and support
              data-driven decision making.
            </p>

            <p>
              I enjoy working on real-world projects where data can be used
              to improve processes and create measurable impact.
            </p>
          </div>

          <div className="about-cards">

            <div className="about-card">
              <h4>📊 Data Analysis</h4>
              <p>
                Analyzing datasets to discover trends, patterns and useful
                business insights.
              </p>
            </div>

            <div className="about-card">
              <h4>📈 Data Visualization</h4>
              <p>
                Creating interactive dashboards and visual reports using
                Power BI and other visualization tools.
              </p>
            </div>

            <div className="about-card">
              <h4>💻 Technical Skills</h4>
              <p>
                Hands-on experience with Python, SQL, Excel, Power BI and
                database technologies.
              </p>
            </div>

            <div className="about-card">
              <h4>🚀 Problem Solving</h4>
              <p>
                Using analytical thinking to solve problems and turn data
                into actionable solutions.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;