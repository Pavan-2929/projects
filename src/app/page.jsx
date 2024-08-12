"use client";

import projectsData from "../data/project";
import Image from "next/image";
import {
  Download,
  GithubIcon,
  Link2Icon,
  LinkedinIcon,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Advanced", "Intern", "UI-UX", "Medium"];

  const filteredProjects = projectsData.filter(
    (project) =>
      selectedCategory === "All" ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1C1C1C] text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-wrap gap-y-4 mb-12 justify-between items-center">
          <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium transform ease-in-out duration-150 rounded-full cursor-pointer shadow-md hover:shadow-lg ${
                  selectedCategory === category
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#262626] text-gray-300"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.div>
            ))}
          </div>
          <div className="flex gap-4 items-center justify-center md:justify-normal w-full md:w-fit">
            <Link
              href="/https://drive.google.com/file/d/178jgiD-7bh-0fYCuNTrUJiY8o8RbjjPZ/view?usp=drive_link"
              passHref
            >
              <motion.div
                className="flex items-center gap-2 text-sm md:text-base bg-[#1A1A1A] px-4 py-2 rounded-full cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Download className="h-4 w-4 md:h-5 md:w-5" />
                Resume
              </motion.div>
            </Link>
            <Link href="www.linkedin.com/in/pavankapadiya" passHref>
              <motion.div
                className="p-2 bg-[#1A1A1A] rounded-full cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <LinkedinIcon className="h-5 w-5 md:h-6 md:w-6" />
              </motion.div>
            </Link>
            <Link href="mailto:kapadiyapavan3218@gmail.com" passHref>
              <motion.div
                className="p-2 bg-[#1A1A1A] rounded-full cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </motion.div>
            </Link>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                <div className="overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105">
                  <Image
                    src={project.img}
                    alt={project.title}
                    height={500}
                    width={300}
                    className="object-cover h-48 w-full"
                  />
                  <div className="bg-[#1A1A1A] py-6 px-4 md:px-8 text-white rounded-b-lg border border-zinc-600 shadow-sm">
                    <div className="text-xs md:text-sm text-gray-400 text-center mb-2">
                      {project.category}
                    </div>
                    <h1 className="text-lg md:text-2xl font-bold text-center">
                      {project.title}
                    </h1>
                    <div className="flex gap-2 md:gap-4 mt-4 md:mt-6 justify-center text-gray-200 flex-wrap">
                      {project.technology.map((tech, index) => (
                        <div
                          key={index}
                          className="bg-[#262626] text-xs md:text-sm w-fit rounded-lg px-3 py-1 md:px-4 md:py-[6px]"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                    <div
                      className={`flex mt-8 md:mt-10 ${
                        project.explore ? "justify-between" : "justify-center"
                      }`}
                    >
                      <div className="flex gap-x-4">
                        {project.github && (
                          <Link href={project.github} passHref>
                            <div className="border border-white p-2 rounded-full inline-block">
                              <GithubIcon className="h-5 w-5 text-white" />
                            </div>
                          </Link>
                        )}
                        {project.live && (
                          <Link href={project.live} passHref>
                            <div className="border border-white p-2 rounded-full inline-block">
                              <Link2Icon className="h-5 w-5 text-white" />
                            </div>
                          </Link>
                        )}
                      </div>
                      {project.explore && (
                        <Link href={project.link} passHref>
                          <div className="bg-gray-100 font-semibold hover:bg-opacity-75 text-black px-4 py-2 md:px-6 md:py-2 rounded-lg cursor-pointer">
                            Explore
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
