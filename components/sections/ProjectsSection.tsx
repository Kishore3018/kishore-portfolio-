"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import { containerVariants, itemVariants } from "@/lib/animations";

export const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <SectionContainer id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Production-grade applications showcasing full-stack development
            expertise
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:auto-cols-fr md:[direction:rtl]" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-xl overflow-hidden group"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 md:[direction:ltr]"
              >
                <div>
                  <motion.div className="flex items-center gap-2 mb-2">
                    {index === 0 && (
                      <Badge variant="accent" size="sm">
                        Featured
                      </Badge>
                    )}
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.longDescription}</p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">
                    Key Features
                  </p>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-primary font-medium">
                        +{project.features.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>

                {/* Engineering Challenges */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-accent">
                    Engineering Highlights
                  </p>
                  <ul className="space-y-1">
                    {project.challenges.slice(0, 2).map((challenge) => (
                      <li
                        key={challenge}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">→</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.github && (
                    <Button variant="outline" size="md">
                      <Github size={18} />
                      GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="md">
                      View Demo
                      <ExternalLink size={18} />
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* All Projects CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-dark-secondary/50 border border-dark-tertiary/50 rounded-xl p-8"
        >
          <p className="text-gray-400 mb-4">
            Interested in exploring more projects?
          </p>
          <a
            href="https://github.com/Kishore3018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <Github size={20} />
              View All Projects on GitHub
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
