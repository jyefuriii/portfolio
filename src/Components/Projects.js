import React from "react";
import "../Styles/Projects.css";
import brainwaveCover from "../Assets/brainwave-cover.png";
import awwwardsCover from "../Assets/Awwwards.png";
import xoraCover from "../Assets/xora-cover.png";
import horizonCover from "../Assets/horizon-cover.png";
import devFlowImage from "../Assets/devflow-cover.png";
import pachiExchangeImage from "../Assets/pachiexchange-image.png";

const projects = [
  {
    name: "Brainwave Website",
    description:
      "A modern website, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    techStack: [
      "React",
      "Javascript",
      "Vite",
      "GSAP",
      "Tailwind CSS",
      "HTML & CSS",
    ],
    image: brainwaveCover,
    github: "https://github.com/jyefuriii/brainwave",
    siteUrl: "https://brainwave-jyefuriii.vercel.app/",
  },
  {
    name: "Awwwards Gaming Website",
    description:
      "A visually captivating website inspired by Zentry, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling capturing the essence of what makes an Awwwards winner.",
    techStack: [
      "React",
      "Javascript",
      "Vite",
      "GSAP",
      "Tailwind CSS",
      "HTML & CSS",
    ],
    image: awwwardsCover,
    github: "https://github.com/jyefuriii/Awwwards-Website",
    siteUrl: "https://awwwards-gaming-website.vercel.app/",
  },
  {
    name: "Xora Website",
    description:
      "Xora is a SaaS website that exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    techStack: ["React", "Javascript", "Vite", "Tailwind CSS", "HTML & CSS"],
    image: xoraCover,
    github: "https://github.com/jyefuriii/xora-website",
    siteUrl: "https://xora-website-jyefuriii.vercel.app/",
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
