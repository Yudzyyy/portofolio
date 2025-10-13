import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { CometCard } from './ui/comet-card';
import profileImage from '../assets/profile.jpg';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const HeroSection = () => {
  const words = [
    { text: "IT" },
    { text: "Enthusiast.", className: "text-blue-500 dark:text-blue-500" },
  ];

  const handleScrollClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">

        {/* Kartu Profil */}
        <div className="w-full md:w-1/3 flex justify-center">
          <CometCard>
            <div className="w-full bg-[#1F2121] rounded-2xl p-4">
              <div className="relative aspect-[3/4] w-full">
                <img
                  src={profileImage}
                  alt="Foto Profil Titis Wahyudi Putro"
                  className="absolute inset-0 h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col items-center text-center font-mono text-white">
                <div className="text-xl font-bold">Titis Wahyudi Putro</div>
                <div className="text-sm text-gray-400 mt-1">
                  Internet Engineering Technology
                </div>
              </div>
            </div>
          </CometCard>
        </div>

        {/* Teks dan Tombol */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <TypewriterEffectSmooth words={words} />

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 -mt-4">
            An Internet Engineering student at UGM passionate about web development 
            and Internet of Things (IoT) technologies. Deeply interested in network security, 
            cloud computing, and Java-based system development.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              onClick={(e) => handleScrollClick(e, 'projects')}
              className="group text-center relative px-6 py-3 bg-white text-black rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollClick(e, 'contact')}
              className="group text-center relative px-6 py-3 border border-white/20 rounded-lg font-medium overflow-hidden transition-all duration-300 hover:border-white/40 hover:scale-105"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Ikon Sosial */}
          <div className="mt-12 flex justify-center md:justify-start space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
