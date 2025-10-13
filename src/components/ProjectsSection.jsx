"use client";
import React from "react";
import { projects } from "@/data/portfolioData.jsx"; 
import { Briefcase } from "lucide-react";

// Pastikan kamu buat file ini: src/components/ui/3d-pin.jsx
// atau ubah path di bawah ini kalau kamu taruh di lokasi berbeda.
import { PinContainer } from "./ui/3d-pin"; 

const ProjectsSection = () => {
  const featuredProjects = projects.slice(0, 3); // tampilkan 3 proyek saja

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-400" /> Featured Projects
        </h2>
        <p className="text-gray-400 mt-2">
          Hover over the cards to see the 3D effect.
        </p>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-16">
        {featuredProjects.map((project, index) => (
          <PinContainer
            key={index}
            title={project.title}
            href={project.link}
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-sm !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {project.description || "Click to view more details"}
                </span>
              </div>
              <div
                className="flex flex-1 w-full rounded-lg mt-4"
                style={{
                  backgroundImage: `url(${project.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
