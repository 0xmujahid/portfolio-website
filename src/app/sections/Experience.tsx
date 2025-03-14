'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
};

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 md:gap-6"
    >
      <div className="hidden md:flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <FiBriefcase size={20} />
        </div>
        <div className="w-1 flex-grow bg-primary/20 mt-4"></div>
      </div>
      
      <div className="bg-background rounded-lg shadow-md p-6 mb-8 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0">
            <FiCalendar className="mr-1" />
            <span>{item.duration}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-primary font-medium">{item.company}</p>
          <p className="text-sm text-gray-500">{item.location}</p>
        </div>
        
        <ul className="list-disc list-inside mb-4 space-y-2">
          {item.description.map((desc, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-300">{desc}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: ' MERN Stack Developer',
      company: 'Software Development Hub.',
      location: 'gulberg islamabad, Pakistan',
      duration: 'Jan 2023 - july 2023',
      description: [
        'Led the development of a scalable e-commerce platform using the MERN stack, resulting in a 40% increase in user engagement.',
        'Implemented RESTful APIs and GraphQL endpoints for efficient data retrieval and manipulation.',
        'Collaborated with cross-functional teams to design and implement new features based on user feedback.',
        'Mentored junior developers and conducted code reviews to ensure code quality and best practices.',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'GraphQL', 'AWS'],
    },
    {
      id: 2,
      title: 'Blockchain Developer',
      company: 'NimbiTech',
      location: 'Colarado, USA',
      duration: 'aug 2023 - present',
      description: [
        'Developed smart contracts for a decentralized finance platform using Solidity and Ethereum.',
        'Integrated Web3.js with React frontend to enable seamless interaction with blockchain networks.',
        'Implemented secure wallet connections and transaction signing using MetaMask and WalletConnect.',
        'Conducted security audits and optimized gas usage for smart contracts.',
      ],
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React', 'Hardhat', 'MetaMask', 'Truffle'],
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'NimbiTech',
      location: 'Colarado, USA',
      duration: 'aug 2023 - present',
      description: [
        'Developed responsive and interactive user interfaces using React and Next.js.',
        'Implemented state management solutions using Redux and Context API.',
        'Collaborated with designers to translate wireframes and mockups into functional components.',
        'Optimized application performance through code splitting, lazy loading, and memoization techniques.',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto">
            My professional journey as a developer, showcasing my roles and responsibilities in different organizations.
          </p>
        </motion.div>

        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} item={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 