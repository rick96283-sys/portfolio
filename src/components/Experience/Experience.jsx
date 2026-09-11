import "./Experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <span>EXPERIENCE</span>
          <h2>My Professional Journey</h2>
          <p>
            My journey of learning, building projects, and gaining
            practical experience in data analytics and technology.
          </p>
        </div>

        <div className="timeline">

            {/* Creators */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Software Developer Intern</h3>
                  <h4>Creintors Automation Solutions Pvt Ltd Belguam</h4>
                </div>

                <span className="experience-date">
                  2025
                </span>
              </div>

              <p className="experience-description">
               Developed and maintained web application features using C# and ASP.NET MVC.
               Designed and implemented application logic following the MVC architecture.
               Worked with MySQL for database design, queries, CRUD operations, and data management.
               Developed responsive and user-friendly frontend interfaces using HTML, CSS, JavaScript, and related web technologies.
               Integrated frontend components with backend services and database operations.
               Debugged application issues, tested features, and improved overall application functionality.
               Collaborated with the development team to understand requirements and implement software solutions.
              </p>
             <br />
              <div className="experience-tags">
               <span>C#</span>
                <span> ASP.NET MVC </span>
                 <span> .NET </span>
                  <span> MySQL </span>
                   <span> SQL </span> 
                    <span>HTML/CSS </span>
                     <span> JavaScript </span>
                      <span> Web Development </span>
              </div>
            </div>
          </div>



          {/* Oasis Infobyte */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Data Analyst Intern</h3>
                  <h4>Oasis Infobyte</h4>
                </div>

                <span className="experience-date">
                  2026
                </span>
              </div>

              <p className="experience-description">
                Worked on data analytics projects involving data cleaning,
                exploratory data analysis, visualization, and extracting
                meaningful insights from datasets.
              </p>

              <div className="experience-tags">
                <span>Python</span>
                <span>Pandas</span>
                <span>SQL</span>
                <span>Data Analysis</span>
                <span>Visualization</span>
              </div>
            </div>
          </div>


          
          {/* Academic & Personal Projects */}

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>Data Analytics Projects</h3>
                  <h4>Academic & Personal Projects</h4>
                </div>

                <span className="experience-date">
                  2024 – 2026
                </span>
              </div>

              <p className="experience-description">
                Built practical projects using Python, SQL, Power BI,
                React, and databases to solve real-world problems and
                strengthen technical and analytical skills.
              </p>

              <div className="experience-tags">
                <span>Power BI</span>
                <span>Python</span>
                <span>SQL</span>
                <span>React</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;