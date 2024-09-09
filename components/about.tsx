"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While Studying and after graduating with a degree in{" "}
        <span className="font-medium">Science</span>, I decided to pursue my
        passion for programming and computer science. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium underline">
          Creating Full-Stack Web Apps using FrontEnd Tools like JS, TypeScript, React, Next.js, and Node.js
          and BackEnd Tools like Express.js, C#, .Net Framework, using RDBMS like MSSQL Server and PostgreSQL,
          and Non-RDBMS like MongoDB, and also know the basics of CI/CD Pipelines 
        </span>
        .I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>,I enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">Web Development</span>.
        I&apos;m also deep in computer science information and its history.
      </p>
    </motion.section>
  );
}
