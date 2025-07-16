"use client";

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import { Separator } from "@/components/ui/separator";
import VerticalLineSeperator from "@/components/VerticalLineSeperator";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VerticalLineSeperator />
      <AboutMe />
      <Project />
      <Contact />
      <div className="my-5 flex flex-col items-center justify-center">
        <h4 className="text-center text-base text-muted-foreground">
          © 2025 Kyaw San Oo — All rights reserved.
        </h4>
        <span className="text-center text-base text-muted-foreground">
          Built with ❤️ using Next.js and Tailwind CSS.
        </span>
      </div>
    </>
  );
}
