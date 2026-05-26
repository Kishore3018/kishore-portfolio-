"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Card } from "@/components/ui/Card";
import { certifications } from "@/data/certifications";
import { containerVariants, itemVariants, staggerContainerVariants } from "@/lib/animations";

export const CertificationsSection = () => {
  return (
    <SectionContainer id="certifications">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            Professional credentials validating technical expertise
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-t-2 border-t-primary">
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <Award className="text-primary" size={24} />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="font-bold text-gray-200 text-sm leading-snug">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2">{cert.issuer}</p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-dark-tertiary/30">
                      <CheckCircle size={14} className="text-accent" />
                      <span className="text-xs text-gray-400">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Categories */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-dark-secondary/50 border border-dark-tertiary/50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-8">Certification Categories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cloud & IoT",
                certs: [
                  "NPTEL – Cloud Computing",
                  "NPTEL – Introduction to Internet of Things",
                ],
              },
              {
                title: "Business & Administration",
                certs: [
                  "Power BI Certification",
                  "ServiceNow Certified System Administrator",
                ],
              },
              {
                title: "User Experience",
                certs: ["NPTEL – Human Computer Interaction"],
              },
              {
                title: "Languages",
                certs: ["JLPT N5 & N4 (Japanese Language Proficiency)"],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="font-semibold text-primary mb-3">{category.title}</p>
                <ul className="space-y-2">
                  {category.certs.map((cert) => (
                    <li
                      key={cert}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <CheckCircle
                        size={16}
                        className="text-accent mt-0.5 flex-shrink-0"
                      />
                      {cert}
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
