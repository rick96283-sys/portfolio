import { useState } from "react";
import "./Certificates.css";

import Agile from "../../assets/Certificates/Agile.png";
import CognitiveClass from "../../assets/Certificates/Cognitive Class.png";
import DataAnalyst101 from "../../assets/Certificates/Data Analyst 101.png";
import Deloitte from "../../assets/Certificates/Delloite.png";import GenAITata from "../../assets/Certificates/GEN AI Tata.png";
import GoogleAIML from "../../assets/Certificates/Google AI-ML.png";
import IBMBatch from "../../assets/Certificates/IBm Batch.png";
import PCI from "../../assets/Certificates/PCI.png";
import Proto2Prod from "../../assets/Certificates/proto2prod.jpeg";
import SkillTest from "../../assets/Certificates/Skill Test.png";
import SQLFoundation from "../../assets/Certificates/SQL Foundation.png";
import YoungTCS from "../../assets/Certificates/young Tcs.png";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      type: "PROFESSIONAL DEVELOPMENT",
      title: "TCS iON Career Edge – Young Professional",
      issuer: "TCS iON",
      date: "Issued Aug 2026",
      credential: "272697-33213523-1016",
      image: YoungTCS,
      alt: "TCS iON Career Edge Young Professional Certificate",
    },

    {
      type: "PROJECT MANAGEMENT",
      title: "Agile Project Management",
      issuer: "HP",
      date: "Issued Aug 2026",
      credential: "9c844ae4-ef9d-46ac-8810-0078a5d907d3",
      image: Agile,
      alt: "HP Agile Project Management Certificate",
    },

    {
      type: "PROJECT / ACHIEVEMENT",
      title: "PROD2PROD",
      issuer: "Bharat Valley Incubator and Accelerator",
      date: "Issued Mar 2026",
      credential: null,
      image: Proto2Prod,
      alt: "PROD2PROD Certificate",
    },

    {
      type: "IDEA PRESENTATION",
      title: "PCI ATOM Sympo 4.0 – Idea Presentation",
      issuer: "PCI: Project Contest Innovations LLP",
      date: "Issued Jan 2026",
      credential: null,
      image: PCI,
      alt: "PCI ATOM Sympo 4.0 Certificate",
    },

    {
      type: "DATA ANALYTICS",
      title: "Data Analyst 101",
      issuer: "Simplilearn",
      date: "Issued Jun 2026",
      credential: "10396490",
      image: DataAnalyst101,
      alt: "Data Analyst 101 Certificate",
    },

    {
      type: "GENERATIVE AI / DATA ANALYTICS",
      title: "Tata - GenAI Powered Data Analytics Job Simulation",
      issuer: "Forage",
      date: "Issued Jul 2026",
      credential: "ta7Cf7HfXT7GB5AcL",
      image: GenAITata,
      alt: "Tata GenAI Data Analytics Certificate",
    },

    {
      type: "ARTIFICIAL INTELLIGENCE",
      title: "AI-ML Certificate",
      issuer: "EduSkills Foundation",
      date: "Issued Jul 2025 · Expires Sep 2030",
      credential: "1f16a8cc124b105ab1aaaee1280d18f2",
      image: GoogleAIML,
      alt: "EduSkills AI ML Certificate",
    },

    {
      type: "DATA ANALYTICS",
      title: "Data Analysis Using Python",
      issuer: "IBM",
      date: "Issued Jun 2026",
      credential: "Credly Badge",
      image: IBMBatch,
      alt: "IBM Data Analysis Using Python Certificate",
    },

    {
      type: "DATA ANALYTICS",
      title: "Data Analysis with Python",
      issuer: "Cognitive Class",
      date: "Issued Jun 2026",
      credential: "ae1ec304b7464a598d6c37441ceda8a8",
      image: CognitiveClass,
      alt: "Cognitive Class Data Analysis with Python Certificate",
    },

    {
      type: "DATA ANALYTICS",
      title: "Deloitte Australia – Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Issued Jun 2026",
      credential: "aqt3PGsZqdSCgiew5",
      image: Deloitte,
      alt: "Deloitte Data Analytics Certificate",
    },

    {
      type: "SQL",
      title: "SQL Server Skill Test",
      issuer: "ScholarHat",
      date: "Issued Feb 2026",
      credential: "SROU230226",
      image: SkillTest,
      alt: "SQL Server Skill Test Certificate",
    },

    {
      type: "SQL",
      title: "SQL Server Foundations Course",
      issuer: "ScholarHat",
      date: "Issued Jan 2026",
      credential: "CALC270126",
      image: SQLFoundation,
      alt: "SQL Server Foundations Certificate",
    },
  ];

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

          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>

              {/* ================= CONTENT ================= */}

              <div className="certificate-content">

                <span className="certificate-type">
                  {certificate.type}
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <h4>
                  {certificate.issuer}
                </h4>

                <p>
                  {certificate.date}
                </p>

                {certificate.credential && (
                  <span className="credential-id">
                    Credential ID: {certificate.credential}
                  </span>
                )}

              </div>

              {/* ================= CERTIFICATE IMAGE ================= */}

              <div
                className="certificate-image-box"
                onClick={() => setSelectedImage(certificate.image)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImage(certificate.image);
                  }
                }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.alt}
                  className="certificate-image"
                />
              </div>

            </div>
          ))}

        </div>

        {/* ================= FULLSCREEN CERTIFICATE ================= */}

        {selectedImage && (
          <div
            className="certificate-modal"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="certificate-modal-content"
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}

              <button
                className="certificate-close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close certificate"
              >
                ×
              </button>

              {/* FULL CERTIFICATE IMAGE */}

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