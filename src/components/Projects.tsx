"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "NFT Ticketing DApp",
    description:
      "A decentralized application for NFT-based event ticketing built on Algorand blockchain.",
    image:
      "https://github.com/user-attachments/assets/5efc2479-ebfc-436d-bc09-d92e874f3812",
    tags: ["Algorand", "JavaScript", "React", "NFT"],
    github: "https://github.com/Akshat-cs/NFT-Ticketing-DApp",
    demo: null,
  },
  {
    id: 2,
    title: "Base Sniper Bot",
    description:
      "A trading bot for Base network that uses Bitquery Events API and Uniswap SDK to identify and execute trades.",
    image:
      "https://github.com/user-attachments/assets/a56f3ccf-aa79-451e-8abe-e3cc536f5e50",
    tags: ["TypeScript", "Base", "Uniswap", "Trading Bot"],
    github: "https://github.com/Akshat-cs/Base-sniper-bot",
    demo: null,
  },
  {
    id: 3,
    title: "ERC20 Faucet",
    description:
      "A custom ERC-20 token with a faucet implementation for testing and development purposes.",
    image:
      "https://github.com/user-attachments/assets/7b99a8ac-08c6-4e2b-b334-2c215805d9bb",
    tags: ["Solidity", "Ethereum", "ERC-20", "Smart Contract"],
    github: "https://github.com/Akshat-cs/ERC20-Faucet",
    demo: null,
  },
  {
    id: 4,
    title: "NFT Marketplace",
    description:
      "A decentralized marketplace for listing, buying, and selling NFTs with features to update or cancel listings.",
    image:
      "https://github.com/user-attachments/assets/0efb8df1-e050-4993-8d04-292ec4f10fc1",
    tags: ["TypeScript", "NFT", "Marketplace", "Smart Contract"],
    github: "https://github.com/Akshat-cs/Nft-Marketplace",
    demo: null,
  },
  {
    id: 5,
    title: "MERN AI Chatbot",
    description:
      "An AI-powered chatbot built with the MERN stack (MongoDB, Express, React, Node.js).",
    image:
      "https://github.com/user-attachments/assets/36ac2702-0d1e-4b8d-b771-79bc6c916b53",
    tags: ["TypeScript", "MERN", "AI", "Chatbot"],
    github: "https://github.com/Akshat-cs/MERN-AI-Chatbot",
    demo: null,
  },
  {
    id: 6,
    title: "Fleek Lottery Frontend",
    description:
      "Frontend for a blockchain-based lottery application hosted on Fleek (IPFS).",
    image:
      "https://github.com/user-attachments/assets/2c5a2c56-2da3-4475-a761-804524afe79d",
    tags: ["JavaScript", "React", "IPFS", "Fleek"],
    github: "https://github.com/Akshat-cs/Fleek-Lottery-frontend-hosted",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="web3-text-gradient">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-web3-purple to-web3-cyan mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my featured projects that showcase my skills and
            experience in blockchain development and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="web3-card overflow-hidden"
            >
              <div className="relative h-48 w-full bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/project-placeholder.svg";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm h-12 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-web3-dark border border-web3-cyan text-web3-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-web3-cyan transition-colors flex items-center"
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-web3-cyan transition-colors flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Akshat-cs"
            target="_blank"
            rel="noopener noreferrer"
            className="web3-border-gradient px-6 py-3 text-web3-cyan font-medium inline-block"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
