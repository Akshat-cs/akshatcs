"use client";

const ThreeCanvasFallback = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-web3-purple/30 to-web3-dark">
      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-web3-purple to-web3-cyan animate-pulse-slow opacity-70"></div>
    </div>
  );
};

export default ThreeCanvasFallback;
