import React from "react";
import "../Styles/Projects.css";
import awwwardsCover from "../Assets/Awwwards.png";
import horizonCover from "../Assets/horizon-cover.png";
import devFlowImage from "../Assets/devflow-cover.png";
import pachiExchangeImage from "../Assets/pachiexchange-image.png";

const projects = [
  {
    name: "Awwwards Gaming Website",
    description:
      "A visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling capturing the essence of what makes an Awwwards winner.",
    techStack: ["React", "Javascript", "Vite", "GSAP", "Tailwind CSS", "HTML & CSS"],
    image: awwwardsCover,
    github: "https://github.com/jyefuriii/Awwwards-Website",
    siteUrl: "https://awwwards-gaming-website.vercel.app/",
  },
  {
    name: "Horizon Bank",
    description:
      "A modern banking application built with Next.js, providing seamless financial services with a focus on user experience and security.",
    techStack: [
      "Next.js",
      "Typescript",
      "Express",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML & CSS",
    ],
    image: horizonCover,
    github: "https://github.com/jyefuriii/banking",
    siteUrl: "https://banking-app-by-jeff.vercel.app/",
  },
  {
    name: "DevFlow (Stack Overflow Clone)",
    description:
      "A community-driven Q&A platform for developers to share knowledge, solve problems, and collaborate.",
    techStack: [
      "Next.js",
      "Typescript",
      "Express",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML & CSS",
    ],
    image: devFlowImage,
    github: "https://github.com/jyefuriii/nextjs-devflow",
    siteUrl: "https://banking-app-by-jeff.vercel.app/",
  },
  {
    name: "Pachi Exchange",
    description:
      "A rewards platform for the free-to-play arcade game Pachi+, allowing users to exchange points for various rewards.",
    techStack: [
      "React",
      "Express",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "Material UI",
      "HTML & CSS",
    ],
    image: pachiExchangeImage,
    github: "https://github.com/jyefuriii/Pachi-Exchange",
    siteUrl: "https://banking-app-by-jeff.vercel.app/",
  },
];

const ProjectCard = ({
  name,
  description,
  techStack,
  image,
  github,
  siteUrl,
}) => (
  <div className="project-card">
    <img src={image} alt={name} className="project-image" />
    <div className="project-details">
      <h2 className="project-title">{name}</h2>
      <p className="project-description">{description}</p>
      <div className="project-tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <div className="projectLinks">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View GitHub Repo
        </a>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Live Site
        </a>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="projects-page">
    <h1 className="page-title">My Projects</h1>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export default ProjectsPage;
