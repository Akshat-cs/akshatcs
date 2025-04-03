"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    role: "Developer Relations",
    company: "Bitquery",
    duration: "April 2024 - Present",
    description: [
      "Built and managed Bitquery API documentation accessed by 12K+ users, reducing the number of generated support tickets",
      "Increased 10x the Bitquery's youtube content reach by creating 85+ technical tutorials, projects including Solana and EVM Sniper Bots",
      "Providing remote technical support at Bitquery telegram channel which has over 4K+ members",
      "Built Solana data APIs which added $500K+ to annual revenue for Bitquery",
    ],
    icon: FaBriefcase,
  },
  {
    id: 2,
    role: "Developer Relations Intern",
    company: "Algorand Foundation",
    duration: "2023 Summer",
    description: [
      "Built the NFT Ticketing dApp using PyTeal, Beaker for the ticketing smart contract used in event management",
      "Guided a team of startup founders who were building NFT ticketing systems on Algorand Blockchain",
      "Managed and solved technical issues on Algorand Discord which has over 15k+ members",
    ],
    icon: FaBriefcase,
  },
  {
    id: 3,
    role: "Bachelor's in Computer Science",
    company: "IIT Kanpur",
    duration: "2020 - 2024",
    description: [
      "Graduated with a degree in Computer Science & Engineering",
      "Organized Largest College Cultural Festival Antaragni'23 IITK",
      "Participated in Blockchain Hackathons and won 2 of them",
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
                <h3 className="text-xl font-bold mb-1 text-white text-left">
                  {item.role}
                </h3>
                <div className="flex items-center mb-3 text-sm text-gray-400">
                  <span>{item.company}</span>
                  <span className="mx-2">•</span>
                  <span>{item.duration}</span>
                </div>
                <ul className="text-gray-300 text-sm space-y-2 text-left">
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
