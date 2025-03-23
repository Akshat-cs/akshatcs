"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaEthereum } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <FaEthereum className="text-web3-cyan text-2xl" />
              <span className="text-xl font-bold font-mono web3-text-gradient">
                Akshat.eth
              </span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm">
              Blockchain Enthusiast & Developer Relations
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com/Akshat-cs"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#00FFFF" }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://twitter.com/akshatmeena368"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#00FFFF" }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/akshat-meena20/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "#00FFFF" }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaLinkedin />
              </motion.a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Akshat Meena. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            Built with Next.js, Tailwind CSS, and Three.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
