import React, { useState, useEffect, useRef } from "react";
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Healthcare website",
    github: "https://github.com/vanthu1223/Healthcare",
    features: [
      "Designing interfaces in Figma and creating responsive layouts",
      "Using JSON Server to provide support for a fake REST API",
      "Connecting with a third-party MOMO API",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    duration: "Sep 2023 - Nov 2023",
  },
  {
    title: "Bitstorm website",
    github: "https://github.com/Pham-Gia-Bao1/BitStorm.",
    features: [
      "Utilizing MySQL for data retrieval and implementing CRUD and search functionalities",
      "Using PHP to display information according to the user's problem",
      "Designing interface using Figma and using Trello for project management",
    ],
    tags: ["Laravel", "Tailwind CSS", "JavaScript", "Figma", "React JS"],
    duration: "Dec 2023 - Jan 2024",
  },
  {
    title: "ChatGPT website",
    github: "https://github.com/chatbot-devplus/Chatbot.git",
    features: [
      "Designing interfaces in Figma and creating responsive layouts.",
      "Handling API calls to Gemini and using React-Markdown for dynamic data rendering.",
      "Implementing Google login and storing user data in the database using Supabase.",
    ],
    tags: ["ReactJS", "Tailwind CSS", "JavaScript", "Supebase", "Gemini model"],
    duration: "Nov 2024 - Dec 2024",
  },
  {
    title: "AUTOMATIC SUBTITLES - SWAPBRAIN COMPANY",
    github: "https://github.com/chatbot-devplus/Chatbot.git",
    features: [
      "Developing an API to connect endpoints using the WebSocket protocol.",
      "Implementing an algorithm to stream audio from a video and transcribe it into text in real time.",
      "Creating an endpoint that returns the language based on the user's selection.",
    ],
    tags: ["Python", "FastAPI", "Websocket", "Flask"],
    duration: "June 2024 - Sep 2024",
  },
];

const ProjectCard = ({ title, github, features, tags, duration }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
    <div className="flex items-center">
      <h3 className="text-white font-bold text-2xl uppercase">{title}</h3>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
      >
        <FaGithub size={30} color="#fff" />
      </a>
    </div>

    <ol className="custom-list">
      {features.map((feature, index) => (
        <li key={index} className="text-white text-xl">
          {feature}
        </li>
      ))}
    </ol>

    <div className="flex">
      <ul className="tags">
        {tags.map((tag, index) => (
          <li key={index}>
            <a href="#" className="tag">{tag}</a>
          </li>
        ))}
      </ul>
      <p className="text-gray-400 mt-2 ml-auto">{duration}</p>
    </div>
  </div>
);

const ProjectGrid = () => {
  const gridRef = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    gridRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div
          key={index}
          ref={(el) => (gridRef.current[index] = el)}
          data-index={index}
          className={`transition-transform duration-700 ease-out ${
            visibleIndexes.includes(index)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
