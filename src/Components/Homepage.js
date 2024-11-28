import React from "react";
import Experiences from "./Experiences";
import Projects from './Projects'
import Contact from "./Contact"
import TypingAnimation from "./Type";
import "../Styles/Homepage.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Homepage() {
  return (
    <div id="homepage" className="homepage">
      <div className="homepage1">
        <div className="homepage1_content">
          <div className="greeting">
            <span>Hey, I'm</span>
            <span
              className="name"
              text-color="linear-gradient(#9845E8, #33D2FF,#DD5789)"
            >
              <TypingAnimation text="Jeffrey Fabella" />
            </span>
          </div>
          <img
            className="profile_photo"
            src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/profile_photo1.jpg")}
            alt="profile_photo"
          />
        </div>
        <span className="homepage1_description">
          I'm a software developer based in Philippines. I'm interested in
          studying how companies work, build workflows based on their business
          need and I also enjoy creating things that live on the internet,
          whether that be websites, applications, or anything in between. I've
          previously worked as a full-time Project Manager at UNAWA Inc. and
          I've manage to gain a decent amount of experience and valuable
          knowledge from all different kinds of fields throughout my
          projects and work.
        </span>
        <div className="social_buttons">
          {/* Email Button */}
          <button
            className="social_button"
            onClick={() =>
              (window.location.href = "mailto:jeffrey.t.fabella@gmail.com")
            }
          >
            <span className="social_mediaIcons">
              <EmailIcon className="social_icons" /> Send an email
            </span>
          </button>

          {/* LinkedIn Button */}
          <button
            className="social_button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jeffrey-fabella",
                "_blank"
              )
            }
          >
            <span className="social_mediaIcons">
              <LinkedInIcon className="social_icons" /> LinkedIn
            </span>
          </button>

          {/* GitHub Button */}
          <button
            className="social_button"
            onClick={() =>
              window.open("https://github.com/jyefuriii", "_blank")
            }
          >
            <span className="social_mediaIcons">
              <GitHubIcon className="social_icons" /> Github
            </span>
          </button>
        </div>
      </div>
      <div id="techstack" className="homepage2">
        <h1 className="techstack_heading1">My Tech Stack</h1>
        <h3 className="techstack_heading3">
          Technologies I've been working with recently
        </h3>
        <div className="techstack_icons">
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/html5.226x256.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/css3-original.225x256.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/file-type-js-official.256x256.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/reactjs.256x228.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-tailwind.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode.256x256.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/postman-icon.png")}
              alt=""
            />
          </div>
        </div>
        <div className="techstack_icons">
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/git.256x256.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/github.256x250.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/firebase.187x256.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/navicat.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/nodejs.256x157.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="techstack"
              src={require("/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/mongodb-original-wordmark.251x256.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="experiences"></div>
      <Experiences />
      <div id="projects"></div>
      <Projects />
      <div id="contact"></div>
      <Contact />
    </div>
  );
}

export default Homepage;
