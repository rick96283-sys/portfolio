import { useState } from "react";
import "./Certificates.css";

import Agile from "../../assets/Certificates/Agile.png";
import CognitiveClass from "../../assets/Certificates/Cognitive Class.png";
import DataAnalyst101 from "../../assets/Certificates/Data Analyst 101.png";
import GenAITata from "../../assets/Certificates/GEN AI Tata.png";
import IBMBatch from "../../assets/Certificates/IBm Batch.png";
import PCI from "../../assets/Certificates/PCI.png";
import Proto2Prod from "../../assets/Certificates/proto2prod.jpeg";
import SkillTest from "../../assets/Certificates/Skill Test.png";
import SQLFoundation from "../../assets/Certificates/SQL Foundation.png";
import YoungTCS from "../../assets/Certificates/young Tcs.png";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="certificates">

      <div className="certificates-container">

        {/* ================= HEADING ================= */}

        <div className="certificates-heading">
          <span>CERTIFICATIONS</span>

          <h2>Learning & Credentials</h2>

          <p>
            Professional certifications and learning credentials that
            reflect my continuous learning and growth in data analytics
            and technology.
          </p>
        </div>


        {/* ================= CERTIFICATE GRID ================= */}

        <div className="certificates-grid">

          {/* ================= 01 - TCS ================+=  */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                PROFESSIONAL DEVELOPMENT
              </span>

              <h3>
                TCS iON Career Edge – Young Professional
              </h3>

              <h4>
                TCS iON
              </h4>

              <p>
                Issued Aug 2026
              </p>

              <span className="credential-id">
                Credential ID: 272697-33213523-1016
              </span>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(YoungTCS)}
            >
              <img
                src={YoungTCS}
                alt="TCS iON Career Edge Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 02 - AGILE ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                PROJECT MANAGEMENT
              </span>

              <h3>
                Agile Project Management
              </h3>

              <h4>
                HP
              </h4>

              <p>
                Issued Aug 2026
              </p>

              <span className="credential-id">
                Credential ID: 9c844ae4-ef9d-46ac-8810-0078a5d907d3
              </span>

              <a
                href="#"
                className="certificate-btn"
              >
                View Credential ↗
              </a>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(Agile)}
            >
              <img
                src={Agile}
                alt="HP Agile Project Management Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 03 - PROD2PROD ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                PROJECT / ACHIEVEMENT
              </span>

              <h3>
                PROD2PROD
              </h3>

              <h4>
                Bharat Valley Incubator and Accelerator
              </h4>

              <p>
                Issued Mar 2026
              </p>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(Proto2Prod)}
            >
              <img
                src={Proto2Prod}
                alt="PROD2PROD Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 04 - MASTER DATA ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                DATA MANAGEMENT
              </span>

              <h3>
                Master Data Management for Beginners
              </h3>

              <h4>
                TCS iON
              </h4>

              <p>
                Issued Aug 2026
              </p>

              <span className="credential-id">
                Credential ID: 71279-33213523-1016
              </span>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(MasterData)}
            >
              <img
                src={MasterData}
                alt="Master Data Management Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 05 - PCI ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                IDEA PRESENTATION
              </span>

              <h3>
                PCI ATOM Sympo 4.0 – Idea Presentation
              </h3>

              <h4>
                PCI: Project Contest Innovations LLP
              </h4>

              <p>
                Issued Jan 2026
              </p>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(PCI)}
            >
              <img
                src={PCI}
                alt="PCI ATOM Sympo 4.0 Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 06 - DATA ANALYST 101 ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                DATA ANALYTICS
              </span>

              <h3>
                Data Analyst 101
              </h3>

              <h4>
                Simplilearn
              </h4>

              <p>
                Issued Jun 2026
              </p>

              <span className="credential-id">
                Credential ID: 10396490
              </span>

              <a
                href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjA0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAzOTY0OTBfMTA3MTE1ODhfMTc4MjQ3NzAyNDkxNy5wbmciLCJ1c2VybmFtZSI6IlJpdGVzaCBNYXJ1dGkgTm91a3Vka2FyIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5990%2FData-Analyst-101%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1557692232007094213&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVDylN9PQJiCiINEmyrytKTUstKsrMS49PKsovL04tsvXJzMtOTfHMAwBasydoQQAAAA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Credential ↗
              </a>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(DataAnalyst101)}
            >
              <img
                src={DataAnalyst101}
                alt="Data Analyst 101 Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 07 - TATA GEN AI ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                GENERATIVE AI / DATA ANALYTICS
              </span>

              <h3>
                Tata - GenAI Powered Data Analytics Job Simulation
              </h3>

              <h4>
                Forage
              </h4>

              <p>
                Issued Jul 2026
              </p>

              <span className="credential-id">
                Credential ID: ta7Cf7HfXT7GB5AcL
              </span>

              <a
                href="https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_eWsh5dW5Mxsd7xcJi_1783016455239_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Credential ↗
              </a>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(GenAITata)}
            >
              <img
                src={GenAITata}
                alt="Tata GenAI Data Analytics Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 08 - EDUSKILLS ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                ARTIFICIAL INTELLIGENCE
              </span>

              <h3>
                AI-ML Certificate
              </h3>

              <h4>
                EduSkills Foundation
              </h4>

              <p>
                Issued Jul 2025 · Expires Sep 2030
              </p>

              <span className="credential-id">
                Credential ID: 1f16a8cc124b105ab1aaaee1280d18f2
              </span>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(GoogleAIML)}
            >
              <img
                src={GoogleAIML}
                alt="EduSkills AI ML Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 09 - IBM ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                DATA ANALYTICS
              </span>

              <h3>
                Data Analysis Using Python
              </h3>

              <h4>
                IBM
              </h4>

              <p>
                Issued Jun 2026
              </p>

              <span className="credential-id">
                Credly Badge
              </span>

              <a
                href="https://www.credly.com/badges/a05ae65b-20d2-41c2-8d30-b9c6839f67c7/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Credential ↗
              </a>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(IBMBatch)}
            >
              <img
                src={IBMBatch}
                alt="IBM Data Analysis Using Python Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 10 - COGNITIVE CLASS ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                DATA ANALYTICS
              </span>

              <h3>
                Data Analysis with Python
              </h3>

              <h4>
                Cognitive Class
              </h4>

              <p>
                Issued Jun 2026
              </p>

              <span className="credential-id">
                Credential ID: ae1ec304b7464a598d6c37441ceda8a8
              </span>

              <a
                href="https://courses.cognitiveclass.ai/certificates/ae1ec304b7464a598d6c37441ceda8a8"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Credential ↗
              </a>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(CognitiveClass)}
            >
              <img
                src={CognitiveClass}
                alt="Cognitive Class Data Analysis with Python Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 11 - DELOITTE ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                DATA ANALYTICS
              </span>

              <h3>
                Deloitte Australia – Data Analytics Job Simulation
              </h3>

              <h4>
                Deloitte
              </h4>

              <p>
                Issued Jun 2026
              </p>

              <span className="credential-id">
                Credential ID: aqt3PGsZqdSCgiew5
              </span>

              <a
                href="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_eWsh5dW5Mxsd7xcJi_1782471365952_completion_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Credential ↗
              </a>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(Deloitte)}
            >
              <img
                src={Deloitte}
                alt="Deloitte Data Analytics Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 12 - SQL SERVER TEST ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                SQL
              </span>

              <h3>
                SQL Server Skill Test
              </h3>

              <h4>
                ScholarHat
              </h4>

              <p>
                Issued Feb 2026
              </p>

              <span className="credential-id">
                Credential ID: SROU230226
              </span>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(SkillTest)}
            >
              <img
                src={SkillTest}
                alt="SQL Server Skill Test Certificate"
                className="certificate-image"
              />
            </div>

          </div>



          {/* ================= 13 - SQL FOUNDATION ================= */}

          <div className="certificate-card">

            <div className="certificate-content">

              <span className="certificate-type">
                SQL
              </span>

              <h3>
                SQL Server Foundations Course
              </h3>

              <h4>
                ScholarHat
              </h4>

              <p>
                Issued Jan 2026
              </p>

              <span className="credential-id">
                Credential ID: CALC270126
              </span>

            </div>


            <div
              className="certificate-image-box"
              onClick={() => setSelectedImage(SQLFoundation)}
            >
              <img
                src={SQLFoundation}
                alt="SQL Server Foundations Certificate"
                className="certificate-image"
              />
            </div>

          </div>

        </div>



        {/* ================= FULLSCREEN CERTIFICATE POPUP ================= */}

        {selectedImage && (

          <div
            className="certificate-modal"
            onClick={() => setSelectedImage(null)}
          >

            <div
              className="certificate-modal-content"
              onClick={(e) => e.stopPropagation()}
            >

              <button
                className="certificate-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close certificate"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt="Full Certificate"
                className="certificate-full-image"
              />

            </div>

          </div>

        )}

      </div>

    </section>
  );
}

export default Certificates;