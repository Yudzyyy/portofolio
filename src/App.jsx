import React, { useState, useEffect } from 'react';
import MainLayout from './components/MainLayout';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';
import { FloatingDock } from './components/ui/floating-dock';
import { Button as MovingBorderButton } from "./components/ui/moving-border";
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconMessage,
  IconStack2,
} from "@tabler/icons-react";

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderVisible(window.scrollY <= 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { title: "Home", href: "#home", icon: <IconHome /> },
    { title: "Experience", href: "#experience", icon: <IconBriefcase /> },
    { title: "Skills", href: "#skills", icon: <IconCode /> },
    { title: "Projects", href: "#projects", icon: <IconStack2 /> },
    { title: "Contact", href: "#contact", icon: <IconMessage /> },
  ];

  return (
    <MainLayout>
      <header>
        <div
          className={`fixed top-8 left-8 z-50 transition-all duration-300 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-16 pointer-events-none"
          }`}
        >
          <FloatingDock items={navItems} />
        </div>

        <div
          className={`fixed top-8 right-8 z-50 transition-all duration-300 ${
            isHeaderVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-16 pointer-events-none"
          }`}
        >
          <MovingBorderButton
            as="a"
            href="/CV_Titis Wahyudi.pdf"
            download
            containerClassName="h-10 w-32"
            className="text-sm font-semibold"
            borderRadius="0.75rem"
          >
            Download CV
          </MovingBorderButton>
        </div>
      </header>

      <main>
        <HeroSection />
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </MainLayout>
  );
}

export default App;
