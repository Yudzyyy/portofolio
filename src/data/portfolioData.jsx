import React from 'react';
import { Briefcase, User, Code2, FolderGit2, Mail } from 'lucide-react';

// Import gambar-gambar dari folder assets
import bpkImage from '@/assets/bpk.png';
import solarPanelImage from '@/assets/solarpanel.png';

// Data untuk Navigasi
export const navigation = [
    { name: 'Home', id: 'home', icon: User },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Skills', id: 'skills', icon: Code2 },
    { name: 'Projects', id: 'projects', icon: FolderGit2 },
    { name: 'Contact', id: 'contact', icon: Mail },
];

// Data Pengalaman (Experience) untuk Timeline
export const timelineData = [
  {
    title: "2025",
    content: (
      <>
        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 mb-8">
          <h4 className="font-bold text-lg text-white mb-1">IT Intern</h4>
          <p className="text-neutral-400 text-sm mb-4">Badan Pemeriksa Keuangan RI DIY</p>
          <p className="text-neutral-300">
            Developed a digital guestbook application using the Laravel framework and designed database structures for efficient visitor data storage.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 mb-8">
          <h4 className="font-bold text-lg text-white mb-1">Public Relations (Part-time)</h4>
          <p className="text-neutral-400 text-sm mb-4">Vocational College, Universitas Gadjah Mada</p>
          <p className="text-neutral-300">
            Edited communication materials (articles, press releases, social media) and contributed to photo and video editing for promotional campaigns.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "2024",
    content: (
      <>
        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 mb-8">
          <h4 className="font-bold text-lg text-white mb-1">Vice Chairman</h4>
          <p className="text-neutral-400 text-sm mb-4">National Networking Competition (Netcomp)</p>
          <p className="text-neutral-300">
            Provided technical support for live streaming and collaborated on WordPress website development and maintenance.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 mb-8">
          <h4 className="font-bold text-lg text-white mb-1">Vice Chairman of IPTEK Division</h4>
          <p className="text-neutral-400 text-sm mb-4">Forkom TRI</p>
          <p className="text-neutral-300">
            Developed and managed a WordPress-based community website and organized national professional certification events.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 mb-8">
          <h4 className="font-bold text-lg text-white mb-1">IT Streaming Staff</h4>
          <p className="text-neutral-400 text-sm mb-4">Ramadhan Bersama Mardliyyah (RBM)</p>
          <p className="text-neutral-300">
            Handled end-to-end live streaming operations and configured audiovisual equipment for mosque events.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "2023",
    content: (
      <div className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 mb-8">
        <h4 className="font-bold text-lg text-white mb-1">Staff Media</h4>
        <p className="text-neutral-400 text-sm mb-4">GAMAFORCE (UGM UAV Team)</p>
        <p className="text-neutral-300">
          Created visual branding materials, managed Instagram content, and designed custom team apparel.
        </p>
      </div>
    ),
  },
];

// Data Keahlian (Skills)
export const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
];

// Data Proyek untuk 3D Pin Section
export const pinProjects = [
  {
    title: "Digital Guest Book BPK",
    href: "#",
    thumbnail: bpkImage,
  },
  {
    title: "Solar Panel Cleaning Robot",
    href: "#",
    thumbnail: solarPanelImage,
  },
];

// Data Proyek untuk HeroParallax (jika ingin digunakan)
export const projects = [
    { title: 'Digital Guest Book BPK', link: '#', thumbnail: bpkImage },
    { title: 'Solar Panel Cleaning Robot', link: '#', thumbnail: solarPanelImage },
    // ... sisa data duplikat
];