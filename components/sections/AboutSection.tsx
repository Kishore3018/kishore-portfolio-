"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { containerVariants, itemVariants } from "@/lib/animations";

export const AboutSection = () => {
  return (
    <SectionContainer id="about" className="bg-gradient-to-b from-dark/0 to-dark-secondary/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Who am I?</h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m a Computer Science Engineering student at M. Kumarasamy
                College of Engineering, specializing in full-stack web
                development. With a solid CGPA of 7.84, I&apos;ve built a strong
                foundation in both backend and frontend technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in software engineering has been marked by hands-on
                experience building enterprise-grade applications, from employee
                management systems to e-commerce platforms with AI
                recommendations.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Core Strengths</h3>
              <ul className="space-y-2">
                {[
                  "Full-stack web development with PHP, Python, and JavaScript",
                  "Database design and optimization with MySQL",
                  "Responsive UI design with modern CSS frameworks",
                  "REST API development and integration",
                  "Secure authentication and data protection",
                ].map((strength, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-accent font-bold mt-1">✓</span>
                    {strength}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Learning Focus */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-dark-secondary/50 border border-dark-tertiary/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4 text-accent">
                Currently Improving
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Data Structures & Algorithms",
                    desc: "Solving complex problems on LeetCode to strengthen DSA fundamentals",
                  },
                  {
                    title: "AI-Driven Applications",
                    desc: "Building recommendation engines and exploring machine learning integration",
                  },
                  {
                    title: "System Design",
                    desc: "Learning to architect scalable and resilient systems",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="font-semibold text-gray-200">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </motion.div>
                ))}
              </ul>
            </div>

            <div className="bg-dark-secondary/50 border border-dark-tertiary/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Career Goals
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Seeking opportunities to contribute to innovative projects at
                forward-thinking tech companies. My goal is to grow into a
                strong software engineer who builds scalable, secure, and
                user-centric applications that solve real-world problems.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};
