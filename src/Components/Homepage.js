import React from "react";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import TypingAnimation from "./Type";
import "../Styles/Homepage.css";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Import images
import profilePhoto from "../Assets/profile_photo1.jpg";
import html5Logo from "../Assets/html5.226x256.png";
import css3Logo from "../Assets/css3-original.225x256.png";
import jsLogo from "../Assets/file-type-js-official.256x256.png";
import reactLogo from "../Assets/reactjs.256x228.png";
import tailwindLogo from "../Assets/vscode-icons_file-type-tailwind.png";
import vscodeLogo from "../Assets/vscode.256x256.png";
import postmanLogo from "../Assets/postman-icon.png";
import gitLogo from "../Assets/git.256x256.png";
import githubLogo from "../Assets/github.256x250.png";
import firebaseLogo from "../Assets/firebase.187x256.png";
import navicatLogo from "../Assets/navicat.png";
import nodejsLogo from "../Assets/nodejs.256x157.png";
import mongodbLogo from "../Assets/mongodb-original-wordmark.251x256.png";

function Homepage() {
  return (
<<<<<<< HEAD
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
            src={profilePhoto}
            alt="profile_photo"
          />
        </div>
        <span className="homepage1_description">
          I’m a software developer based in the Philippines with a passion for
          creating innovative digital solutions that solve real-world problems.
          I specialize in developing web-based applications and websites that
          are both functional and visually engaging, with a focus on crafting
          seamless user experiences. My background includes working as a
          full-time Project Manager at UNAWA Inc., where I honed my skills in
          project planning, workflow optimization, and cross-functional
          collaboration. These experiences have shaped my approach to software
          development, allowing me to combine technical expertise with a strong
          understanding of business needs to deliver impactful results.
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
            <img className="techstack" src={html5Logo} alt="HTML5 Logo" />
          </div>
          <div>
            <img className="techstack" src={css3Logo} alt="CSS3 Logo" />
          </div>
          <div>
            <img className="techstack" src={jsLogo} alt="JavaScript Logo" />
          </div>
          <div>
            <img className="techstack" src={reactLogo} alt="React Logo" />
          </div>
          <div>
            <img
              className="techstack"
              src={tailwindLogo}
              alt="Tailwind CSS Logo"
            />
          </div>
          <div>
            <img className="techstack" src={vscodeLogo} alt="VS Code Logo" />
          </div>
          <div>
            <img className="techstack" src={postmanLogo} alt="Postman Logo" />
          </div>
        </div>
        <div className="techstack_icons">
          <div>
            <img className="techstack" src={gitLogo} alt="Git Logo" />
          </div>
          <div>
            <img className="techstack" src={githubLogo} alt="GitHub Logo" />
          </div>
          <div>
            <img className="techstack" src={firebaseLogo} alt="Firebase Logo" />
          </div>
          <div>
            <img className="techstack" src={navicatLogo} alt="Navicat Logo" />
          </div>
          <div>
            <img className="techstack" src={nodejsLogo} alt="Node.js Logo" />
          </div>
          <div>
            <img className="techstack" src={mongodbLogo} alt="MongoDB Logo" />
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
=======
    <div className='homepage'>
        <Header/>
        <div className='homepage1'>
            <div className='homepage1_content'>
                <div className='greeting'>
                    <span>Hey, I'm</span>
                    <span className='name' text-color='linear-gradient(#9845E8, #33D2FF,#DD5789)'>Jeffrey Fabella</span>
                </div>
            < img className='profile_photo'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/profile_photo.jpg')} alt='profile_photo'/>
            </div>
            <span className='homepage1_description'>I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</span>
            <div className='social_buttons'>
                <button className='social_button'>
                        <span className='social_mediaIcons'>
                        <EmailIcon/> Send Email
                        </span>
                </button>
                <button className='social_button'>
                        <span className='social_mediaIcons'>
                        <LinkedInIcon/> LinkedIn
                        </span>
                </button>
                <button className='social_button'>
                        <span className='social_mediaIcons'>
                        <GitHubIcon/> GitHub
                        </span>
                </button>
            </div>
        </div>
          <div>
              <h1>My Tech Stack</h1>
              <h3>Technologies I've been working with recently</h3>
              <div className='techstack_icons'>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-html.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-css.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-js-official.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/logos_react.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/Vector.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/logos_bootstrap.svg')} alt=''/> 
              </div>
        </div>
      
    </div>
  )
>>>>>>> 9ee1d94 (Techstack and Experience portion)
}

export default Homepage;
