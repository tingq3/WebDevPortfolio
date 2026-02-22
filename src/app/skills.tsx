"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "I build modern, responsive websites and web applications using HTML, JavaScript, React, and Next.js. This allows me to create fast, scalable, and user-friendly interfaces tailored to any business needs.",
  },
  {
    icon: HashtagIcon,
    title: "Modern Frameworks & Type Safety",
    children:
      "Using React with TypeScript and Next.js, I develop maintainable, component-based applications that scale well and remain reliable as features and requirements grow.",
  },
  {
    icon: FingerPrintIcon,
    title: "Backend Services & Databases",
    children:
      "I work with cloud-based databases and backend services such as MongoDB and Supabase to store, manage, and retrieve data securely for dynamic, data-driven applications.",
  },
  {
    icon: SwatchIcon,
    title: "Full-Stack Web Applications",
    children:
      "By combining frontend frameworks with backend services, I can build complete web solutions such as dashboards, content-driven websites, and interactive platforms.",
  },
  {
    icon: EyeIcon,
    title: "Data Analysis & Visualization",
    children:
      "I use Python and R to clean, manipulate, analyze, and visualize data, turning raw information into clear insights and meaningful visuals.",
  },
  {
    icon: DocumentTextIcon,
    title: "Quality, Performance & Reliability",
    children:
      "I use professional development practices including code standards, automated checks, structured codebases, and performance optimization to deliver applications that are reliable, maintainable, and built to last.",
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
