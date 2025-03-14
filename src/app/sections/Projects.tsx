'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: 'mern' | 'blockchain' | 'frontend' | 'all';
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 w-full bg-gray-200">
        <Image
          src={project.image}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
          >
            <FiGithub /> Code
          </a>
          <a 
            href={project.demo} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-primary transition-colors"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'mern' | 'blockchain' | 'frontend'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with the MERN stack, featuring user authentication, product management, and payment integration.',
      image: '/ecomerce.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      github: 'https://github.com/0xmujahid/e-commerce-site',
      demo: 'https://reactjsphonestore.netlify.app/',
      category: 'mern',
    },
    {
      id: 2,
      title: 'NFT Marketplace',
      description: 'A decentralized marketplace for NFTs built on Ethereum, allowing users to mint, buy, and sell digital assets.',
      image: '/nftmarketplace.png',
      tags: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'IPFS'],
      github: 'https://github.com/0xmujahid/NFT-marketplace',
      demo: 'https://nft-marketplace1.netlify.app',
      category: 'blockchain',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user roles, and project tracking.',
      image: '/taskmanager.png',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      github: 'https://github.com/0xmujahid/task-manager',
      demo: 'https://lucas-santosp.github.io/task-manager/login',
      category: 'mern',
    },
    {
      id: 4,
      title: 'DeFi Dashboard',
      description: 'A dashboard for tracking DeFi investments, yields, and portfolio performance across multiple protocols.',
      image: '/defidashboard.png',
      tags: ['React', 'Web3.js', 'Ethereum', 'Chart.js', 'DeFi Protocols'],
      github: 'https://github.com/0xmujahid/simple-defi-dashboard',
      demo: 'https://simple-defi-dashboard.vercel.app/',
      category: 'blockchain',
    },
    {
      id: 5,
      title: 'Social Media Platform',
      description: 'A social networking platform with features like posts, comments, likes, and real-time notifications.',
      image: '/socialmedia.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/0xmujahid/sociopedia',
      demo: 'https://sociopedia.netlify.app/',
      category: 'mern',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode.',
      image: '/portfoliowebsite.png',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com/0xmujahid/portfolio',
      demo: 'https://portfolio-demo.com',
      category: 'frontend',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-light/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in different areas of web and blockchain development.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-background hover:bg-primary/10'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('mern')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'mern' 
                  ? 'bg-primary text-white' 
                  : 'bg-background hover:bg-primary/10'
              }`}
            >
              MERN Stack
            </button>
            <button
              onClick={() => setFilter('blockchain')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'blockchain' 
                  ? 'bg-primary text-white' 
                  : 'bg-background hover:bg-primary/10'
              }`}
            >
              Blockchain
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'frontend' 
                  ? 'bg-primary text-white' 
                  : 'bg-background hover:bg-primary/10'
              }`}
            >
              Frontend
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 