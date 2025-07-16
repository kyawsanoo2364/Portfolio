"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { projects, ProjectType } from "@/assets/assets";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

const Project = () => {
  return (
    <div
      id="projects"
      className="w-full  h-screen container mx-auto flex items-center justify-center flex-col mt-[26rem] md:mt-20 lg:mt-0 max-w-5xl px-4"
    >
      <h3 className="text-3xl font-bold text-center">My Projects</h3>
      <span className="text-lg text-muted-foreground text-center mt-2">
        Projects I worked on. Each of them containing its own case study.
      </span>
      <div className="mt-5 grid  md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project, index) => (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.01 * index + 1 }}
            viewport={{ once: true, amount: 0.5 }}
            key={project.title}
          >
            {" "}
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;

const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="">
      <CardContent className="flex flex-col gap-4">
        <a href={project.link} target="_blank" className="cursor-pointer">
          <Image
            src={project.img}
            alt={project.title}
            width={500}
            height={500}
            className="w-full  h-60 rounded-lg hover:scale-105 transition-all duration-300 object-contain"
          />
        </a>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="flex items-center flex-row gap-4">
          {project.languages.map((language) => (
            <Badge
              key={language}
              variant={"outline"}
              className="text-sm px-4 py-2"
            >
              {language}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
