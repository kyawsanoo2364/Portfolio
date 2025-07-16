"use client";

import React from "react";
import { motion } from "motion/react";
import { skills } from "@/assets/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="container mx-auto w-full h-screen scroll-mt-20 flex items-center justify-center flex-col gap-4 md:mt-0 mt-10 px-4"
    >
      <h3 className="text-3xl font-bold">About Me</h3>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl  tracking-wider"
      >
        I'm Kyaw San Oo, a self-study full stack developer from Myanmar. I
        discovered my passion for programming through self-study, and since
        then, I’ve been consistently learning and building real-world
        applications. What I enjoy most about programming is the challenge of
        solving problems and turning ideas into working products. Throughout my
        journey, I've built a variety of projects—from personal apps to
        collaborative side projects—that helped me strengthen both my frontend
        and backend skills. My core tech stack includes React, Next.js, Node.js,
        Express.js, Python, and Django. I'm also familiar with tools like
        Tailwind CSS, REST APIs, and version control with Git. I'm open to job
        opportunities where I can contribute, grow, and collaborate with a
        passionate team. If you’re looking for a motivated developer who’s eager
        to learn and deliver, feel free to get in touch!
      </motion.p>
      <Marquee
        autoFill
        loop={0}
        className="mt-10 max-w-6xl flex w-full mx-auto justify-center items-center "
      >
        {skills.map((icon) => (
          <Image
            src={icon}
            width={500}
            height={500}
            alt=""
            className="w-20 h-20 object-contain mx-5"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default AboutMe;
