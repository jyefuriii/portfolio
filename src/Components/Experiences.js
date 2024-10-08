import React, { useState } from "react";
import "../Styles/Experiences.css";

function Experiences() {
  const [activeContent, setActiveContent] = useState("UNAWA");

  const content = {
    UNAWA: (
      <div className="content_item">
        <div className="content_details">
          <span className="content_role">
            IT Project Manager / Data Analyst{" "}
          </span>
          <span className="content_date">April 2022 - September 2024</span>
        </div>
        <span className="content_address">Makati City, Metro Manila</span>
        <ul>
          <li>
            Create and implement Project Management standards for managing new
            application projects at UNAWA, ensuring consistency and efficiency.
          </li>
          <li>
            Oversee Project Planning, Estimation, Risk Management, Project
            Control, and Visibility, ensuring smooth project execution and
            timely delivery.
          </li>
          <li>
            Analyze new projects to determine requirements, document them, and
            resolve any product-related issues to meet stakeholder needs.
          </li>
          <li>
            Organize and facilitate project reviews, ensuring regular feedback
            loops and keeping all team members aligned.
          </li>
          <li>
            Develop and manage detailed project schedules and work plans, making
            necessary adjustments to stay on track with goals and timelines.
          </li>
          <li>
            Utilize industry best practices, techniques, and standards
            throughout project execution to optimize outcomes.
          </li>
          <li>
            Provide consistent project updates to stakeholders, communicating
            strategy, adjustments, progress, and risks in a clear and timely
            manner.
          </li>
          <li>
            Coordinate and handle Quality Assurance for assigned projects by
            preparing policies, performing inspections, identifying issues, and
            ensuring compliance with standards and safety regulations.
          </li>
          <li>
            Ensure the scalability, performance, and stability of software
            solutions, writing necessary tests and expanding software to meet
            evolving customer and stakeholder needs.
          </li>
          <li>
            Use automated tools and statistical methods to analyze data,
            identify patterns, and interpret trends for better diagnosis,
            decision-making, and prediction in project outcomes.
          </li>
        </ul>
      </div>
    ),
    GAP: (
      <div className="content_item">
        <div className="content_details">
          <span className="content_role">
            IT Project Manager / Database Admin / QA Specialist
          </span>
          <span className="content_date">March 2021 - Present</span>
        </div>
        <span className="content_address">Claremont, Western Australia</span>
        <ul>
          <li>
            Coordinate projects to improve processes and workflow operations
            while ensuring compliance with GAP and GAP client requirements.
          </li>
          <li>
            Prepared Development Plans, Business Requirement Document, Test
            Analyzing and monitoring game DB records and extract data to be
            included on weekly status reports as required by clients.
          </li>
          <li>
            Prepare Development Plans, Business Requirement Document, Test Cases
            and other project documents required by the clients.
          </li>
          <li>
            Executed project operations by confirming resource availability,
            submitting project deliverables, and preparing status reports.
          </li>
          <li>
            Planned, established, and communicated project deliverables to meet
            deadlines and maintain project schedules.
          </li>
          <li>
            Key Achievements:
            <ul>
              <li>
                Working on a free to play arcade game application named Pachi+,
                and handling its maintenance and improvements.
              </li>
              <li>
                Completed and handling maintenance and improvements of Pachi+
                rewards website named Pachi Exchange
              </li>
              <li>
                Worked on another online casino game development project named
                Gameworkz Fortune 8.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
    Rangertech: (
      <div className="content_item">
        <div className="content_details">
          <span className="content_role">
            IT Project Coordinator / Quality Assurance Specialist
          </span>
          <span className="content_date">February 2020 - March 2021</span>
        </div>
        <span className="content_address">Pasig City, Metro Manila</span>
        <ul>
          <li>
            Coordinated projects to enhance processes and workflow operations,
            ensuring alignment with company and client requirements.
          </li>
          <li>
            Prepared Development Plans, Business Requirement Document, Test
            Cases, and other essential project documents for clients.
          </li>
          <li>
            Executed project operations by verifying resource availability,
            delivering project milestones, and generating status reports.
          </li>
          <li>
            Planned, established, and communicated project deliverables to
            adhere to deadlines and uphold project schedules.
          </li>
          <li>
            Key Achievements:
            <ul>
              <li>
                Successfully completed a website project for RACEHUB PH, an
                e-commerce platform for high-end bicycles.
              </li>
              <li>
                Successfully completed a CRM project for Microtel by Wyndham
                Philippines.
              </li>
              <li>
                Successfully completed a chatbot project for IT Group Inc.
                website, known as ITG Chatbot.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    ),
    Accenture: (
      <div className="content_item">
        <div className="content_details">
          <span className="content_role">
            Data Analyst (Platform Experience New Associate)
          </span>
          <span className="content_date">February 2018 - December 2019</span>
        </div>
        <span className="content_address">Quezon City, Metro Manila</span>
        <ul>
          <li>Understand client policies and guidelines.</li>
          <li>Review user reports regarding website content.</li>
          <li>Make decision according to designed policies and procedures.</li>
          <li>
            Identify improvement opportunities in workflow and suggest
            solutions.
          </li>
          <li>Interact effectively with other internal and client teams.</li>
          <li>
            Assist other team members with questions and problems related to
            work.
          </li>
        </ul>
      </div>
    ),
    Transcom: (
      <div className="content_item">
        <div className="content_details">
          <span className="content_role">IT Staff (Internship)</span>
          <span className="content_date">November 2016 - February 2017</span>
        </div>
        <span className="content_address">Mandaluyong City, Metro Manila</span>
        <ul>
          <li>
            Installing and configuring computer hardware, software, systems,
            networks, printers and scanners.
          </li>
          <li>
            Monitoring performance and maintaining computer systems and networks
            according to requirements.
          </li>
          <li>Responding in a timely manner to service issues and requests.</li>
          <li>
            Providing technical support across the company in person or over the
            phone.
          </li>
          <li>
            Troubleshooting issues and outages, repairing and replacing
            equipment as necessary.
          </li>
        </ul>
      </div>
    ),
    CatSU: (
      <div className="content_item">
        <div className="content_details">
          <span className="content_role">Information Systems (Graduate)</span>
          <span className="content_date">March 2017</span>
        </div>
        <span className="content_address">Virac, Catanduanes</span>
        <ul>
          <li>
            Graduated with a degree in Bachelor of Science in Information
            Systems.
          </li>
        </ul>
      </div>
    ),
  };

  return (
    <div className="experiences">
      <div className="experiences_content">
        <h1 className="experience_heading1">Experiences</h1>
        <h3 className="experience_heading3">Work and Educational Attainment</h3>
      </div>
      <span>COMPANIES AND UNIVERSITY</span>
      <div className="container">
        <div className="sidebar">
          <ul>
            <li
              className={activeContent === "UNAWA" ? "active" : ""}
              onClick={() => setActiveContent("UNAWA")}
            >
              UNAWA Inc.
            </li>
            <li
              className={activeContent === "GAP" ? "active" : ""}
              onClick={() => setActiveContent("GAP")}
            >
              Global Application Producers
            </li>
            <li
              className={activeContent === "Rangertech" ? "active" : ""}
              onClick={() => setActiveContent("Rangertech")}
            >
              Rangertech/ Techsphere
            </li>
            <li
              className={activeContent === "Accenture" ? "active" : ""}
              onClick={() => setActiveContent("Accenture")}
            >
              Accenture
            </li>
            <li
              className={activeContent === "Transcom" ? "active" : ""}
              onClick={() => setActiveContent("Transcom")}
            >
              Transcom Worldwide Philippines
            </li>
            <li
              className={activeContent === "CatSU" ? "active" : ""}
              onClick={() => setActiveContent("CatSU")}
            >
              Catanduanes State University
            </li>
          </ul>
        </div>

        <div className="content">
          <div>{content[activeContent]}</div>
        </div>
      </div>
      <div className="experiences_line"></div>
    </div>
  );
}

export default Experiences;
