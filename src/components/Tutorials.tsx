"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const tutorialsData = [
  {
    id: 1,
    title: "How to code a Crypto Sniping Bot for Base Chain",
    description:
      "Learn how to build a crypto sniping bot for Base Chain using Bitquery Events API and Uniswap SDK. This tutorial walks through the complete process of setting up a bot that can monitor and execute trades automatically.",
    thumbnail: "/images/base-video.png",
    tags: ["Base Chain", "Bitquery API", "Uniswap SDK", "Trading Bot"],
    youtubeUrl: "https://www.youtube.com/watch?v=0T_v2nctLmA",
  },
  {
    id: 2,
    title: "How to get Solana DEXTrades Data just like DEXScreener",
    description:
      "This tutorial demonstrates how to fetch and analyze Solana DEX trades data similar to what DEXScreener provides. Learn how to access and process on-chain data for trading insights and market analysis.",
    thumbnail: "/images/dexscreener-video.png",
    tags: ["Solana", "DEX", "Data Analysis", "Blockchain Data"],
    youtubeUrl: "https://www.youtube.com/watch?v=t-qdemV4Yo0",
  },
  {
    id: 3,
    title:
      "How to Track Pump Fun DEX Trades and Newly Launched Tokens in Realtime",
    description:
      "Discover how to monitor DEX trades and track newly launched tokens in real-time to identify potential pump opportunities. This tutorial covers setting up alerts and data processing for timely market insights.",
    thumbnail: "/images/pump-video.png",
    tags: ["DEX Trades", "Token Tracking", "Real-time Data", "Market Analysis"],
    youtubeUrl: "https://www.youtube.com/watch?v=QV8zBnmDFxY",
  },
];

const Tutorials = () => {
  return (
    <section id="tutorials" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="web3-text-gradient">Technical Tutorials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-web3-purple to-web3-cyan mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Educational content I've created to help developers understand
            blockchain technologies and build decentralized applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorialsData.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="web3-card overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <a
                  href={tutorial.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <FaYoutube className="text-red-600 text-5xl" />
                  </div>
                  <Image
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </a>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  <a
                    href={tutorial.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-web3-cyan transition-colors"
                  >
                    {tutorial.title}
                  </a>
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {tutorial.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-web3-dark-light text-web3-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={tutorial.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-web3-cyan hover:text-white transition-colors"
                >
                  <span className="mr-2">Watch Tutorial</span>
                  <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/@bitquery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-web3-purple to-web3-cyan text-white font-medium text-lg hover:opacity-90 transition-opacity"
          >
            <FaYoutube className="mr-2 text-xl" />
            85+ More Videos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tutorials;
