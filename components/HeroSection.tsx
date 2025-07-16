"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, DownloadIcon, GithubIcon } from "lucide-react";
import { Badge } from "./ui/badge";

const HeroSection = () => {
  return (
    <div
      id="top"
      className="flex w-full h-screen justify-center items-center flex-col gap-2 scroll-mt-20 px-4"
    >
      <div className="w-40 h-40 relative">
        <div className="border border-pink-500 rounded-full h-full w-full absolute" />
        <Image
          src={assets.profile_png}
          width={300}
          height={300}
          alt=""
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <Button
        asChild
        variant={"outline"}
        className="px-4 text-[12px] py-1 font-[200] "
      >
        <a href="#contact" className="tracking-widest">
          <div className="relative">
            <div className="size-2 rounded-full animate-ping absolute bg-green-500" />
            <div className="size-2 rounded-full  bg-green-500" />
          </div>
          Avalible for work!
        </a>
      </Button>
      <h3 className="text-2xl font-bold mt-2 px-4 text-center">
        <motion.span
          initial={{ rotate: 0 }}
          animate={{
            rotate: [0, 20, -10, 20, -10, 0], // wave motion
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          style={{ display: "inline-block", transformOrigin: "70% 70%" }}
        >
          👋🏼
        </motion.span>{" "}
        Hello , I'm{" "}
        <span className="text-pink-500">
          <TypeAnimation
            sequence={[100, "Kyaw San Oo", 300, "Full Stack Developer."]}
          />
        </span>{" "}
      </h3>

      <motion.p
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transitionDuration: 1000,
        }}
        className="px-4 md:max-w-lg mx-auto text-lg font-semibold mt-1 text-center"
      >
        I’ve pursued web development through self-study, building real-world
        projects using Next.js, React, Node.js, and Django. Passionate about
        technology, problem-solving, and excited to contribute to a team
        environment.
      </motion.p>

      <motion.div
        className="flex mt-4 items-center flex-row w-full justify-center gap-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transitionDuration: 1200 }}
      >
        <Button asChild>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 font-semibold"
          >
            Resume
            <DownloadIcon />
          </a>
        </Button>
        <Button variant={"outline"} asChild>
          <a href="#contact">
            Contact <ArrowRight />
          </a>
        </Button>
        <Button variant={"outline"} className="rounded-full p-2" asChild>
          <a
            href="https://github.com/kyawsanoo2364"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="size-5" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
