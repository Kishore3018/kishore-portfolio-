"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/data/skills";
import { containerVariants, itemVariants, staggerContainerVariants } from "@/lib/animations";

export const SkillsSection = () => {
  return (
    <SectionContainer id="skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            A comprehensive toolkit built through hands-on project experience and
            continuous learning
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <Card className="h-full">
                <h3 className="text-xl font-bold mb-6 text-primary">
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: (categoryIndex * 0.1 + skillIndex * 0.05),
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                      {skill.level && (
                        <div className="w-full bg-dark-tertiary/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-6">Key Expertise Areas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Backend Development",
                skills: ["PHP", "Python Flask", "REST APIs", "Database Design"],
              },
              {
                title: "Frontend Development",
                skills: [
                  "Responsive Design",
                  "Angular",
                  "Bootstrap & Tailwind",
                  "HTML/CSS",
                ],
              },
              {
                title: "Database Management",
                skills: ["MySQL", "Query Optimization", "Data Modeling"],
              },
              {
                title: "Development Tools",
                skills: ["Git", "VS Code", "XAMPP", "Apache"],
              },
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-accent mb-3">{area.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
