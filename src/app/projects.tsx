"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog2.svg",
    title: "Weather Trend Prediction Research",
    desc: "A research project evaluating different machine learning models to learn and predict weather trends, using Python for data processing, visualization, and model comparison.",
    href: "/image/weatherReport.pdf"
  },
  {
    img: "/image/blog3.svg",
    title: "Startup Flowchart Web App",
    desc: "A fast and lightweight web application designed for startups to quickly create, edit, and share flowcharts, focusing on usability, performance, and clean interface design.",
    href: "https://auto-timetable-gilt.vercel.app/"
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce Web Application",
    desc: "An e-commerce platform offering access to modern gadgets and accessories, featuring dynamic product listings and a scalable, data-driven structure.",
    href: "#"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props}/>
        ))}
      </div>
    </section>
  );
}

export default Projects;
