"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/personal";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    mail: <Mail size={20} />,
  };

  return (
    <footer className="bg-dark-secondary/50 border-t border-dark-tertiary/50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-gradient">Kishore</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer passionate about building scalable
              applications and exploring AI-driven technologies.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                {personalInfo.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {personalInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold mb-4 text-gray-300">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-tertiary/50 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all duration-300"
                  aria-label={link.name}
                >
                  {iconMap[link.icon as keyof typeof iconMap]}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-tertiary/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>
              © {currentYear} Kishore S. All rights reserved.
            </p>
            <p>
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
