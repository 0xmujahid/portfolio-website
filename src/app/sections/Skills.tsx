'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  FaReact, FaNodeJs, FaDatabase, FaEthereum, 
  FaHtml5, FaJs, FaGitAlt 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiNextdotjs, SiSolidity, SiWeb3Dotjs, SiTypescript } from 'react-icons/si';

const SkillBar = ({ name, percentage, icon, index }: { name: string; percentage: number; icon: React.ReactNode; index: number }) => {
  const direction = index % 2 === 0 ? 'left' : 'right';
  const skillAnimation = useScrollAnimation({ direction, delay: 0.1 * index });

  return (
    <motion.div 
      className="mb-6"
      {...skillAnimation}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium">{name}</span>
        </div>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md h-full">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: 'React', percentage: 90, icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', percentage: 85, icon: <SiNextdotjs /> },
    { name: 'JavaScript', percentage: 90, icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'TypeScript', percentage: 80, icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'HTML/CSS', percentage: 95, icon: <FaHtml5 className="text-[#E34F26]" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', percentage: 85, icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Express', percentage: 85, icon: <SiExpress /> },
    { name: 'MongoDB', percentage: 80, icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'RESTful APIs', percentage: 90, icon: <FaDatabase /> },
    { name: 'Git', percentage: 85, icon: <FaGitAlt className="text-[#F05032]" /> },
  ];

  const blockchainSkills = [
    { name: 'Ethereum', percentage: 80, icon: <FaEthereum className="text-[#627EEA]" /> },
    { name: 'Solidity', percentage: 75, icon: <SiSolidity /> },
    { name: 'Web3.js', percentage: 80, icon: <SiWeb3Dotjs /> },
    { name: 'Smart Contracts', percentage: 75, icon: <FaEthereum className="text-[#627EEA]" /> },
  ];

  const otherSkills = {
    tools: ['VS Code', 'GitHub', 'Postman', 'Docker', 'Figma', 'Webpack'],
    softSkills: ['Problem Solving', 'Communication', 'Teamwork', 'Time Management', 'Adaptability'],
    methodologies: ['Agile', 'Scrum', 'TDD', 'CI/CD', 'Responsive Design', 'RESTful Architecture'],
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto">
            I&apos;ve acquired a diverse set of skills throughout my journey as a developer. Here&apos;s a comprehensive overview of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                icon={skill.icon}
                index={index}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                icon={skill.icon}
                index={index + frontendSkills.length}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold mb-6">Blockchain Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blockchainSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                icon={skill.icon}
                index={index + frontendSkills.length + backendSkills.length}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Other Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillCard title="Tools & Software" skills={otherSkills.tools} />
            <SkillCard title="Soft Skills" skills={otherSkills.softSkills} />
            <SkillCard title="Methodologies" skills={otherSkills.methodologies} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 