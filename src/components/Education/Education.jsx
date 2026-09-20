
import "./Education.css";

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">

        {/* Section Heading */}
        <div className="education-heading">
          <span>EDUCATION</span>

          <h2>
            My Academic <strong>Journey</strong>
          </h2>

          <p>
            My academic journey has helped me build a strong foundation
            in computer science, programming, data analytics, and
            problem-solving.
          </p>
        </div>


        {/* Education Timeline */}
        <div className="education-timeline">

          {/* Education 01 */}
          <div className="education-item">

            <div className="education-dot"></div>

            <div className="education-card">

              <div className="education-top">

                <div>
                  <span className="education-level">
                    BACHELOR'S DEGREE
                  </span>

                  <h3>
                    B.Tech  Computer Science  Engineering
                  </h3>

                  <h4>
                    Sant Gajanan Maharaj College of Engineering,
                    Mahagaon
                  </h4>
                </div>

                <span className="education-date">
                  2022 – 2026
                </span>

              </div>


              <p className="education-description">
                Completed my undergraduate degree in Computer Science
                and Engineering with a focus on programming, databases,
                software development, data analytics, and emerging
                technologies.
              </p>


              <div className="education-tags">
                <span>Computer Science</span>
                <span>Data Analytics</span>
                <span>Programming</span>
                <span>Databases</span>
                <span>Software Development</span>
              </div>

            </div>

          </div>


          {/* Education 02 */}
          <div className="education-item">

            <div className="education-dot"></div>

            <div className="education-card">

              <div className="education-top">

                <div>
                  <span className="education-level">
                    HIGHER SECONDARY
                  </span>

                  <h3>
                   Maharashtra State Board
                  </h3>

                  <h4>
                    G.G.V.P jr College Halkarni
                  </h4>
                </div>

                <span className="education-date">
                  Completed
                </span>

              </div>


              <p className="education-description">
                Completed higher secondary education with a foundation
                in mathematics, science, logical reasoning, and
                analytical problem-solving.
              </p>


              <div className="education-tags">
                <span>Mathematics</span>
                <span>Science</span>
                <span>Logical Reasoning</span>
              </div>

            </div>

          </div>


          {/* Education 03 */}
          <div className="education-item">

            <div className="education-dot"></div>

            <div className="education-card">

              <div className="education-top">

                <div>
                  <span className="education-level">
                    SECONDARY EDUCATION
                  </span>

                  <h3>
                    Secondary School Education
                  </h3>

                  <h4>
                    Maharashtra State Board
                  </h4>
                
                </div>

                <span className="education-date">
                  Completed
                </span>

              </div>


              <p className="education-description">
                Completed secondary education and developed an early
                interest in technology, mathematics, and problem-solving.
              </p>


              <div className="education-tags">
                <span>Mathematics</span>
                <span>Science</span>
                <span>Technology</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;