import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-12 px-4 flex items-center">
      <div className="max-w-2xl mx-auto text-center w-full">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-400 mb-8 text-lg">
          I'm currently open to new opportunities. Feel free to reach out!
        </p>
        <div className="space-y-4">
          <a
            href="mailto:your.email@example.com"
            className="group block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
          >
            <div className="flex items-center justify-center space-x-3">
              <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>titiswahyudiputro2003@mail.ugm.ac.id</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/titiswahyudiputro"
            className="group block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
          >
            <div className="flex items-center justify-center space-x-3">
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>LinkedIn Profile</span>
            </div>
          </a>
          <a
            href="https://github.com/Yudzyyy"
            className="group block p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
          >
            <div className="flex items-center justify-center space-x-3">
              <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>GitHub Profile</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;