import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommereceImg from "@/public/ecomerece.png";
import chatImg from "@/public/chat.png";
import footImg from "@/public/food.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "MERN E-Commerce App",
    description:
      "E-Commerce platform showcasing a seamless and user-friendly shopping experience",
    tags: [
      "Responsive Web Design ",
      "REST",
      "MongoDB",
      "Express.js",
      "Node.js",
      " React.js",
      "Redux",
    ],
    imageUrl: ecommereceImg,
    github: "https://github.com/mohamed66786/MERN-E-COMMERECE-APP",
  },
  {
    title: "Restaurant Page",
    description:
      "This project describes more information about restaurant food and enhances user experience about restaurants. This project was created by Reactjs.",
    tags: ["React", "HTML", "Tailwind", "CSS", "Responsive Web Design"],
    imageUrl: footImg,
    github: "https://github.com/mohamed66786/Restaurant--Page",
  },
  {
    title: "MERN Chat App",
    description:
      "Real-Time Chat Application built on the powerful MERN Stack, provide users with a dynamic and responsive chat experience",
    tags: [
      "React",
      "Responsive Web Design",
      "Next.js",
      "MongoDB",
      "Express.js",
      "Socket.io",
    ],
    imageUrl: chatImg,
    github: "https://github.com/mohamed66786/MERN-Chat-App",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "Algorithms",
  "DataStructure",
  "Problem Solving",
  "C++",
  "OOP",
  "MySQL",
  "Socket.io",
  
] as const;
