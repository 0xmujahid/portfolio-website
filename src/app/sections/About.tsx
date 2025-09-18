'use client';

import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const titleAnimation = useScrollAnimation({ direction: 'left', delay: 0.2 });
  const leftContentAnimation = useScrollAnimation({ direction: 'left', delay: 0.3 });
  const rightContentAnimation = useScrollAnimation({ direction: 'right', delay: 0.4 });

  return (
    <section id="about" className="py-20 bg-background/5">
      <div className="container mx-auto px-4">
        <motion.div
          {...titleAnimation}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="md:w-1/2"
            {...leftContentAnimation}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="mb-4">
              I am a passionate Full Stack  Ai and Blockchain Developer with 5 years of experience in building web applications and decentralized solutions. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="mb-4">
              My journey in web development started when I was in college, and since then, I&apos;ve been continuously learning and improving my skills. I specialize in JavaScript,python, React, Node.js, Express, MongoDB, and various blockchain technologies including Ethereum, Solidity, and Web3.js.
            </p>
            <p className="mb-6">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through Linkedin and community forums.
            </p>
            
            <a 
              href="/mujahidblock.pdf" 
              download="mujahidblock.pdf"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Download Resume <FiDownload />
            </a>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">Personal Info</h4>
                <ul className="space-y-2">
                  <li><span className="font-medium">Name:</span> Mujahid ali</li>
                  <li><span className="font-medium">Location:</span> kallar syedan</li>
                  <li><span className="font-medium">Email:</span>mujahidtech985@gmail.com</li>
                  <li><span className="font-medium">Availability:</span> Full-time</li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-3">Education</h4>
                <div className="mb-4">
                  <p className="font-medium">Bachelor&apos;s Degree</p>
                  <p>Computer Science</p>
                  <p className="text-sm text-gray-500">University Name SZABIST Islamabad Campus (2019-2023)</p>
                </div>
                <div>
                  <p className="font-medium">Certifications</p>
                  <p>Ethereum Blockchain Developer</p>
                  <p className="text-sm text-gray-500">LeranWeb3Dao(2024)</p>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-md md:col-span-2">
                <h4 className="text-xl font-semibold mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Web Development</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Blockchain</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Smart Contracts</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Cloud Computing</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 