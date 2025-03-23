"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    role: "Developer Relations",
    company: "Bitquery",
    duration: "2023 - Present",
    description: [
      "Leading developer relations initiatives to support Web3 developers using Bitquery's blockchain data APIs",
      "Creating technical content, tutorials, and documentation to help developers integrate blockchain data into their applications",
      "Engaging with the developer community through workshops, webinars, and social media",
      "Building sample applications and demos to showcase Bitquery's capabilities",
    ],
    icon: FaBriefcase,
  },
  {
    id: 2,
    role: "Blockchain Developer",
    company: "Freelance",
    duration: "2022 - 2023",
    description: [
      "Developed smart contracts and decentralized applications for various clients",
      "Created NFT marketplaces, token systems, and DeFi applications",
      "Implemented blockchain solutions on Ethereum, Algorand, and other platforms",
      "Optimized gas usage and improved security of smart contracts",
    ],
    icon: FaBriefcase,
  },
  {
    id: 3,
    role: "Bachelor's in Computer Science",
    company: "IIT Kanpur",
    duration: "2020 - 2024",
    description: [
      "Graduated with a degree in Computer Science",
      "Focused on blockchain technology, cryptography, and distributed systems",
      "Participated in hackathons and blockchain development competitions",
      "Completed research projects related to blockchain scalability and security",
    ],
    icon: FaGraduationCap,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="web3-text-gradient">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-web3-purple to-web3-cyan mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey in the blockchain space and educational
            background.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-web3-purple to-web3-cyan"></div>

          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0
                  ? "md:text-right md:pr-16 md:ml-auto md:mr-0"
                  : "md:pl-16"
              } ${index % 2 === 0 ? "md:ml-0 md:mr-auto" : ""}`}
              style={{ width: "100%", maxWidth: "calc(50% - 20px)" }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-8 h-8 rounded-full bg-web3-dark border-2 border-web3-cyan flex items-center justify-center">
                <item.icon className="text-web3-cyan" />
              </div>

              <div className="web3-card p-6">
                <h3 className="text-xl font-bold mb-1 text-white">
                  {item.role}
                </h3>
                <div className="flex items-center mb-3 text-sm text-gray-400">
                  <span>{item.company}</span>
                  <span className="mx-2">•</span>
                  <span>{item.duration}</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-2">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-web3-cyan mr-2">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
