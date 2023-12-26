"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectCard'


const projectsData = [
  {
    id: 1,
    title: "react portfolio website",
    description: "project 1 desc",
    image: "./../../images/blogfirebase.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "react portfolio website",
    description: "project 1 desc",
    image: "./../../images/memory.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "react portfolio website",
    description: "project 1 desc",
    image: "/images/projects/1.png",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "react portfolio website",
    description: "project 1 desc",
    image: "/images/coding.jpg",
    tag: ["all", "web"],
    gitUrl: "/",
    previewUrl: "/"
  },
]


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null)


  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => {
    project.tag.includes(tag)
  });
  
  return (
    <section id="projects">
       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection