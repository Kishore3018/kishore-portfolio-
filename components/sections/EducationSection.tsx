"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, TrendingUp } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { containerVariants, itemVariants } from "@/lib/animations";

export const EducationSection = () => {
  return (
    <SectionContainer id="education">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto"
        >
          <Card className="border-l-4 border-l-primary">
            <div className="flex gap-6 items-start">
              <div className="p-3 rounded-lg bg-primary/10 h-fit">
                <BookOpen className="text-primary" size={24} />
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">
                    B.E. Computer Science and Engineering
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    M. Kumarasamy College of Engineering
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Expected Graduation: 2027
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">CGPA</p>
                    <p className="text-2xl font-bold text-accent">7.84</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary" size="sm">
                        Full Stack Dev
                      </Badge>
                      <Badge variant="primary" size="sm">
                        DSA
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="font-semibold mb-3 text-gray-300">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures",
                      "DBMS",
                      "Operating Systems",
                      "Computer Networks",
                      "Software Engineering",
                      "Web Development",
                      "Algorithms",
                      "Database Design",
                    ].map((course) => (
                      <Badge key={course} variant="secondary" size="sm">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements During Studies */}
                <div className="pt-4 space-y-3 border-t border-dark-tertiary/30">
                  <p className="font-semibold text-sm text-gray-300">
                    Academic Highlights
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Strong foundation in computer science fundamentals",
                      "Hands-on project experience in full-stack development",
                      "Active participation in hackathons and coding competitions",
                      "Consistent learning and skill development",
                    ].map((achievement, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <TrendingUp
                          size={16}
                          className="text-accent mt-0.5 flex-shrink-0"
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-accent" size={24} />
            Continuous Learning Path
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                phase: "Current",
                focus: "Advanced DSA & System Design",
                skills: ["LeetCode grinding", "System architecture"],
              },
              {
                phase: "Next",
                focus: "AI & ML Integration",
                skills: ["ML fundamentals", "AI applications"],
              },
              {
                phase: "Future",
                focus: "Specialization",
                skills: ["Cloud technologies", "Distributed systems"],
              },
            ].map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <p className="text-sm font-semibold text-accent">{path.phase}</p>
                <p className="font-medium text-gray-200">{path.focus}</p>
                <ul className="space-y-1">
                  {path.skills.map((skill) => (
                    <li key={skill} className="text-sm text-gray-400">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
