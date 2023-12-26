"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import Link from 'next/link'

const projectsData = [
  {
    id: 1,
    title: "react portfolio website",
    description: "project 1 desc",
    image: "/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/donirj/the-game",
    previewUrl: "https://keen-murdock-04411d.netlify.app/",
  },
  {
    id: 2,
    title: "react portfolio website",
    description: "project 1 desc",
    image:  "/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/donirj/pokedex-js",
    previewUrl: "https://vocal-moonbeam-7d06b6.netlify.app/"
  },
  {
    id: 3,
    title: "react portfolio website",
    description: "project 1 desc",
    image: "/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/donirj/reactjs-ecommerce-project",
    previewUrl: "https://tiny-begonia-25a38c.netlify.app/"
  },
  {
    id: 4,
    title: "react portfolio website",
    description: "project 1 desc",
    image:  "/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/donirj/newPortfolio",
    previewUrl: "https://legendary-fairy-641ef0.netlify.app/"
  },
]


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null)


  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  )
  
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
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection