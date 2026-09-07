import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span>MY SKILLS</span>
          <h2>Tools I Work With</h2>
          <p>
            Technologies and tools I use to analyze data, build dashboards,
            and create practical solutions.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-info">
              <h3>🐍 Python</h3>
              <span>90%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress python"></div>
            </div>

            <p>Data Analysis · Pandas · NumPy</p>
          </div>

          <div className="skill-card">
            <div className="skill-info">
              <h3>🗄️ SQL</h3>
              <span>90%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress sql"></div>
            </div>

            <p>Queries · Joins · Data Manipulation</p>
          </div>

          <div className="skill-card">
            <div className="skill-info">
              <h3>📊 Power BI</h3>
              <span>85%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress powerbi"></div>
            </div>

            <p>DAX · Dashboards · Data Modeling</p>
          </div>

          <div className="skill-card">
            <div className="skill-info">
              <h3>📗 Excel</h3>
              <span>90%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress excel"></div>
            </div>

            <p>Pivot Tables · Functions · Data Cleaning</p>
          </div>

          <div className="skill-card">
            <div className="skill-info">
              <h3>📈 Tableau</h3>
              <span>75%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress tableau"></div>
            </div>

            <p>Visualization · Dashboards · Reporting</p>
          </div>

          <div className="skill-card">
            <div className="skill-info">
              <h3>🗃️ MySQL</h3>
              <span>85%</span>
            </div>

            <div className="skill-bar">
              <div className="skill-progress mysql"></div>
            </div>

            <p>Database · Queries · Relationships</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;