"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaEthereum } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="web3-text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-web3-purple to-web3-cyan mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="web3-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6 web3-text-gradient">
              Who I Am
            </h3>
            <p className="text-gray-300 mb-4">
              I'm a Blockchain Enthusiast and Developer Relations professional
              at Bitquery, passionate about Web3 technologies and decentralized
              applications.
            </p>
            <p className="text-gray-300 mb-4">
              With a background in Computer Science from IIT Kanpur, I bridge
              the gap between complex blockchain technologies and developers,
              helping them build innovative solutions.
            </p>
            <p className="text-gray-300">
              My journey in the blockchain space has equipped me with deep
              knowledge of smart contracts, DeFi protocols, NFTs, and various
              blockchain platforms including Ethereum, Algorand, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="web3-card p-6 flex items-start">
                <div className="mr-4 mt-1">
                  <FaGraduationCap className="text-web3-cyan text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-gray-300">
                    Bachelor's in Computer Science from IIT Kanpur (2024)
                  </p>
                </div>
              </div>

              <div className="web3-card p-6 flex items-start">
                <div className="mr-4 mt-1">
                  <FaCode className="text-web3-cyan text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Development</h4>
                  <p className="text-gray-300">
                    Experienced in JavaScript, TypeScript, React, Node.js, and
                    Solidity
                  </p>
                </div>
              </div>

              <div className="web3-card p-6 flex items-start">
                <div className="mr-4 mt-1">
                  <FaEthereum className="text-web3-cyan text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Blockchain</h4>
                  <p className="text-gray-300">
                    Specialized in NFTs, DeFi, and blockchain data analytics
                  </p>
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
