"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Code } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { achievements } from "@/data/achievements";
import { containerVariants, itemVariants, staggerContainerVariants } from "@/lib/animations";

export const AchievementsSection = () => {
  const getIconForAchievement = (title: string) => {
    if (title.includes("LeetCode"))
      return <Code className="text-accent" size={24} />;
    if (title.includes("Hackathon") || title.includes("Contest"))
      return <Zap className="text-primary" size={24} />;
    return <Trophy className="text-primary" size={24} />;
  };

  return (
    <SectionContainer id="achievements">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Recognition of growth, learning, and technical excellence
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-l-4 border-l-accent hover-lift">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-dark-tertiary/50 h-fit">
                    {getIconForAchievement(achievement.title)}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-200 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                    {achievement.date && (
                      <p className="text-xs text-gray-500 mt-3">{achievement.date}</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Highlight */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-8">Key Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Problems Solved", value: "67+", icon: Code },
              { label: "Hackathons", value: "2+", icon: Zap },
              { label: "Awards", value: "1+", icon: Trophy },
              { label: "Certifications", value: "6", icon: Trophy },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <IconComponent className="mx-auto mb-3 text-accent" size={28} />
                  <p className="text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          variants={itemVariants}
          className="mt-12 space-y-6"
        >
          <h3 className="text-2xl font-bold">Learning Journey</h3>
          <div className="space-y-4">
            {[
              {
                title: "Technical Excellence",
                desc: "Continuously improving problem-solving skills through competitive programming and building real-world applications",
              },
              {
                title: "Industry Participation",
                desc: "Active engagement in hackathons and coding competitions to validate skills in fast-paced environments",
              },
              {
                title: "Holistic Development",
                desc: "Expanding knowledge beyond core programming to include cloud computing, IoT, and business tools",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-secondary/50 border border-dark-tertiary/50 rounded-xl p-6 hover-lift"
              >
                <h4 className="font-bold text-accent mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};
