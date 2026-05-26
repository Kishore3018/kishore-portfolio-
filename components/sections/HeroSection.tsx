"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/data/personal";
import { containerVariants, itemVariants } from "@/lib/animations";

export const HeroSection = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke="rgba(0, 102, 255, 0.1)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Availability Badge */}
            <motion.div variants={itemVariants} className="w-fit">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-primary">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-gradient">Full Stack</span>
                <span className="block text-white">Developer</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Computer Science student building scalable web applications with
                modern tech. Passionate about software engineering excellence
                and exploring AI-driven solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => handleScroll("projects")}
                className="group"
              >
                View Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll("contact")}
              >
                <Mail size={20} />
                Get in Touch
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-sm text-gray-400">Production Projects</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-accent">67+</p>
                <p className="text-sm text-gray-400">LeetCode Problems</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-primary">6</p>
                <p className="text-sm text-gray-400">Certifications</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative hidden md:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Gradient Orb */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/10 blur-3xl"
              />

              {/* Code Window */}
              <div className="relative bg-dark-secondary/50 border border-dark-tertiary/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-gray-500">
                    <span className="text-primary">const</span>{" "}
                    <span className="text-accent">developer</span> ={" "}
                    <span className="text-green-400">{"{"}</span>
                  </div>
                  <div className="text-gray-500 ml-4">
                    <span className="text-blue-300">name:</span>{" "}
                    <span className="text-green-400">&quot;Kishore&quot;</span>,
                  </div>
                  <div className="text-gray-500 ml-4">
                    <span className="text-blue-300">skills:</span>{" "}
                    <span className="text-green-400">
                      [&quot;PHP&quot;, &quot;Python&quot;, &quot;Angular&quot;]
                    </span>
                    ,
                  </div>
                  <div className="text-gray-500 ml-4">
                    <span className="text-blue-300">passion:</span>{" "}
                    <span className="text-green-400">&quot;Web Development&quot;</span>
                  </div>
                  <div className="text-gray-500">
                    <span className="text-green-400">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <p className="text-sm">Scroll to explore</p>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
