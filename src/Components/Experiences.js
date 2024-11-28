import React from "react";
import "../Styles/Experiences.css";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Experiences = () => {
  return (
    <div className="experiences-section">
      <div className="experiences-header">
        <h2>Work Experience</h2>
      </div>

      <div className="experience-item">
        <div className="experience-row">
          <div className="experience-title">
            <h3>IT Project Manager / Business Analyst</h3>
          </div>
          <div className="experience-type">
            <span>Full-Time (Remote)</span>
          </div>
        </div>
        <div className="experience-row">
          <div className="company-location">
            <BusinessIcon className="experience-icon" />
            <p>UNAWA Inc.</p>
            <LocationOnIcon className="experience-icon" />
            <p>Makati City, Metro Manila</p>
          </div>
          <div className="experience-duration">
            <CalendarMonthIcon className="experience-icon" />
            <p>Arp 2022 - September 2024</p>
          </div>
        </div>
        <div className="experience-separator"></div> {/* Line separator */}
      </div>

      <div className="experience-item">
        <div className="experience-row">
          <div className="experience-title">
            <h3>IT Project Manager / DB Admin / QA Specialist</h3>
          </div>
          <div className="experience-type">
            <span>Part-Time (Remote)</span>
          </div>
        </div>
        <div className="experience-row">
          <div className="company-location">
            <BusinessIcon className="experience-icon" />
            <p>Global Application Producers</p>
            <LocationOnIcon className="experience-icon" />
            <p>Claremont, Australia</p>
          </div>
          <div className="experience-duration">
            <CalendarMonthIcon className="experience-icon" />
            <p>Feb 2021 - Present</p>
          </div>
        </div>
        <div className="experience-separator"></div> {/* Line separator */}
      </div>
      <div className="experience-item">
        <div className="experience-row">
          <div className="experience-title">
            <h3>Web Application Developer</h3>
          </div>
          <div className="experience-type">
            <span>Full-Time</span>
          </div>
        </div>
        <div className="experience-row">
          <div className="company-location">
            <BusinessIcon className="experience-icon" />
            <p>RangerTech - TechSphere</p>
            <LocationOnIcon className="experience-icon" />
            <p>Pasig City, Metro Manila</p>
          </div>
          <div className="experience-duration">
            <CalendarMonthIcon className="experience-icon" />
            <p>Feb 2020 - March 2021</p>
          </div>
        </div>
        <div className="experience-separator"></div> {/* Line separator */}
      </div>
      <div className="experience-item">
        <div className="experience-row">
          <div className="experience-title">
            <h3>Data Analyst</h3>
          </div>
          <div className="experience-type">
            <span>Full-Time</span>
          </div>
        </div>
        <div className="experience-row">
          <div className="company-location">
            <BusinessIcon className="experience-icon" />
            <p>Accenture</p>
            <LocationOnIcon className="experience-icon" />
            <p>Quezon City, Metro Manila</p>
          </div>
          <div className="experience-duration">
            <CalendarMonthIcon className="experience-icon" />
            <p>Feb 2018 - Dec 2019</p>
          </div>
        </div>
        <div className="experience-separator"></div> {/* Line separator */}
      </div>
      <div className="experiences-header">
        <h2>Education</h2>
      </div>

      <div className="experience-item">
        <div className="experience-row">
          <div className="experience-title">
            <h3>Bachelor of Science in Information Systems</h3>
          </div>
          <div className="experience-type">
            <span>Graduated</span>
          </div>
        </div>
        <div className="experience-row">
          <div className="company-location">
            <BusinessIcon className="experience-icon" />
            <p>Catanduanes State University</p>
            <LocationOnIcon className="experience-icon" />
            <p>Virac, Catanduanes</p>
          </div>
          <div className="experience-duration">
            <CalendarMonthIcon className="experience-icon" />
            <p>Jun 2013 - Mar 2017</p>
          </div>
        </div>
        <div className="experience-separator"></div> {/* Line separator */}
      </div>

      {/* Add more experiences as needed */}
    </div>
  );
};

export default Experiences;
