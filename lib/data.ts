import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommereceImg from "@/public/ecomerece.png";
import chatImg from "@/public/chat.png";
import footImg from "@/public/food.png";
import fm from "@/public/fm.png";
import leetcode from "@/public/leetcode.png";

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
    title: "Self-motivated, Passion for programming and computer science.",
    location: "",
    description:
      "Self-motivated and detail-oriented individual with a strong passion for computer science and technology. Demonstrated hands-on experience through personal projects focused on web development,",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Problem Solving with javascript, C++, SQL",
    location: "LeetCode",
    description:
      "Problem Solving: Proven ability to tackle complex algorithmic and coding challenges, having successfully solved over 1000 problems on LeetCode.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "",
    description:
      "Self-motivated and detail-oriented individual with a strong passion for computer science and technology. Demonstrated hands-on experience through personal projects focused on web development.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Passionate learner embracing the latest technologies.",
    location: "",
    description:
      "Eager to explore and adapt to emerging trends in the ever-evolving tech landscape. Committed to continuous growth and development on the cutting edge of innovation. Aspiring to contribute meaningfully to the dynamic world of technology",
    icon: React.createElement(FaReact),
    date: "2023 - present",
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
  {
    title: "Frontend-Mentor-Challenge",
    description:
      "This Project is designed to create a responsive and user-friendly web application using the power of React, and styled components, a CSS-in-JS library, to build a modern and visually stunning user interface.",
    tags: ["React", "HTML", "Tailwind", "CSS", "Responsive Web Design"],
    imageUrl: fm,
    github: "https://github.com/mohamed66786/Frontend-Mintor-challenge",
  },
  {
    title: "Problem Solving",
    description:
      "Problem Solving: Proven ability to tackle complex algorithmic and coding challenges, having successfully solved over 1000 problems on LeetCode.",
    tags: ["Algorithmis", "DataStructur", "Problem Solving"],
    imageUrl: leetcode,
    github: "https://leetcode.com/mohamedtarek4545/",
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
