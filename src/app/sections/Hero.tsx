'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="block text-foreground">Hi, I&apos;m</span>
              <span className="text-primary block">Mujahid Ali</span>
            </motion.h1>
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Full Stack Ai & Blockchain Developer
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 max-w-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              I specialize in building modern web applications using the MERN stack  & Ai  developing blockchain solutions. With 5 years of experience, I create scalable and efficient applications that solve real-world problems.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#projects" 
                className="btn btn-primary flex items-center gap-2"
              >
                View Projects <FiArrowRight />
              </Link>
              <Link 
                href="#contact" 
                className="btn border border-primary text-primary hover:bg-primary/10 flex items-center gap-2"
              >
                Contact Me <FiArrowRight />
              </Link>
            </div>
            
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/0xmujahid" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FiGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FiLinkedin size={24} />
              </a>
              <a href="https://x.com/Mujahidali7864" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <FiTwitter size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center overflow-hidden">
                <Image 
                  src="/mujahidpic.jpg" 
                  alt="Mujahid Ali - MERN Stack & Blockchain Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 