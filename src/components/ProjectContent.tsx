import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs, faJs, faBootstrap,faPhp } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons"; // Example for non-brands

function ProjectContent() {
  const projects = [
    {
      id: 1,
      title: "New Hire System",
      image: "./src/assets/newhire.png",
      description: "The New Hire System automates notifications for new employees, tracks pending requirements with scheduled email reminders, and generates IT requirement PDFs. It also integrates an email API for seamless responses, streamlining the hiring process efficiently.",
      technologies: [faJs, faNodeJs, faBootstrap],
    },
    {
      id: 2,
      title: "HR Analytics",
      image: "./src/assets/analytics.png",
      description: "The HR Analytics System centralizes employee information. It offers advanced filtering, generates reports in multiple formats, and provides analytics on attrition rates, employee distribution, and organizational structure. Features include birthday and anniversary tracking with email greetings, audit trails, and industry rate comparisons.",
      technologies: [faJs, faNodeJs, faBootstrap],
    },
    {
      id: 3,
      title: "Pickup, Delivery, and Invoicing Management",
      image: "./src/assets/byl.png",
      description: "The system manages rates and deliveries by creating PS numbers with item details, generating Delivery Receipts (DRs), updating quantities, and auto-generating PDFs. It also includes analytics for company rankings by monthly kg consumption and client summary reports for invoicing.",
      technologies: [faJs, faNodeJs, faBootstrap],
    },
    {
      id: 4,
      title: "CAIRI (Crime Awareness and Incident Response Integration)",
      image: "./src/assets/cairi.jpg",
      description: "The CAIRI web application enhances crime awareness and reporting in Bagong Barrio, Caloocan City, using geolocation technology. It enables citizens, barangay officials, and police to track incidents, integrate reports, and collaborate across 29 barangays. This research assesses CAIRI’s effectiveness in improving crime awareness and reporting.",
      technologies: [faJs, faPhp, faBootstrap],
    },
  ];

  return (
    <section className="container my-5 pt-5">
      <h2 className="text-center mb-4 fw-bolder">My Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-5" key={project.id}>
            <div className="card shadow-lg animated h-100">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text mb-5">{project.description}</p>

                <div className="tech-icons position-absolute bottom-0 end-0 p-2">
                  {project.technologies.map((icon, index) => (
                    <FontAwesomeIcon key={index} icon={icon} size="2x" className="text-primary p-1" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectContent;
