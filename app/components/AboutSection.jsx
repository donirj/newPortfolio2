"use client"
import React, { useTransition, useState} from 'react'
import Image from "next/image"
import TabButton from './TabButton'


const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>javascript</li>
        <li>React.js</li>
        <li>React native</li>
        <li>html</li>
        <li>css</li>
        <li>tailwind</li>
        <li>next.js</li>
      </ul>
    )
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul >
        <li>Ironhack web development</li>
        <li>UVEG</li>
      </ul>
    )
  },
  {
    title: "certification",
    id: "certifications",
    content: (
      <ul>
        <li>Coderhouse</li>
        <li>Ironhack</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useState("skills")
  
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white '>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <img src="https://static.vecteezy.com/system/resources/previews/010/998/293/non_2x/3d-illustration-of-programmer-pc-workspace-free-png.png" width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>about me</h2>
          <p className='text-base md:text-lg'>
          Turning ideas into digital experiences. 
          High-quality web development to elevate your 
          online presence
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
              >
              {" "}
              skills{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
              >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certifications")} 
              active={tab === "certifications"}
              >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
              {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection