import React from 'react';
import { skills } from '../data/portfolioData';

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
            >
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-white transition-colors">{skill.category}</h3>
              <div className="space-y-2">
                {skill.items.map((item, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 rounded-lg bg-white/5 text-sm text-gray-300 hover:bg-white/10 transition-all duration-200 hover:translate-x-1"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;