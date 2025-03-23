"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      <div className="hero-gradient absolute inset-0 z-0"></div>

      {/* Static background with animated particles */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg-fallback.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated particles */}
        <div className="particles-container">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                width: `${3 + Math.random() * 7}px`,
                height: `${3 + Math.random() * 7}px`,
                opacity: 0.1 + Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hey, I&apos;m</span>
              <span className="web3-text-gradient font-mono">Akshat Meena</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              <span className="glow-text">Blockchain Enthusiast</span> &
              Developer Relations at Bitquery
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              Building bridges between Web3 technologies and developers. IIT
              Kanpur graduate passionate about blockchain innovation and
              creating impactful decentralized solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="web3-border-gradient px-6 py-3 text-web3-cyan font-medium"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border border-gray-600 text-gray-300 hover:border-web3-cyan hover:text-web3-cyan transition-colors duration-300"
              >
                Contact Me
              </motion.a>
            </div>

            <div className="flex mt-8 space-x-4">
              <motion.a
                href="https://github.com/Akshat-cs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#00FFFF" }}
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://twitter.com/akshatmeena368"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#00FFFF" }}
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/akshat-meena20/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#00FFFF" }}
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 web3-border-gradient rounded-full overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/u/75172495?v=4"
                alt="Akshat Meena"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-web3-cyan rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-web3-cyan rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
