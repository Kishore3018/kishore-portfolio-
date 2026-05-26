"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navigation, personalInfo } from "@/data/personal";
import { useActiveSection } from "@/hooks";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection([
    "about",
    "skills",
    "projects",
    "education",
    "certifications",
    "achievements",
    "contact",
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-secondary/95 backdrop-blur-md border-b border-dark-tertiary/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">KS</span>
          </div>
          <span className="hidden md:block font-bold text-lg text-gradient">
            Kishore
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={`px-3 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resume}
            download
            className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-dark-secondary/95 backdrop-blur-md border-b border-dark-tertiary/50 px-4 py-4"
        >
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 text-left ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href={personalInfo.resume}
              download
              className="px-3 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all duration-300 text-center mt-2"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
