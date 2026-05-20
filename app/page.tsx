"use client";

import { motion } from "framer-motion";
import Terminal from "@/components/Terminal";
import GitGraph from "@/components/GitGraph";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#1e3a8a,transparent_30%),radial-gradient(circle_at_bottom_right,#7e22ce,transparent_30%)] opacity-40"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 relative z-10">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          GitVerse
        </h1>

        <button className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
          Start Learning
        </button>

      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20 relative z-10">

        {/* Left Side */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extrabold leading-tight"
          >
            Learn Git <br />
            Like a <span className="text-cyan-400">Game</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-gray-300 text-lg leading-8"
          >
            Master Git visually through futuristic gameplay,
            cinematic animations, interactive terminals,
            and mission-based learning.
          </motion.p>

          <div className="mt-10 flex gap-5">

            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
              Play Now
            </button>

            <button className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Side Visual */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="relative flex justify-center items-center"
        >

          {/* Rings */}
          <div className="w-[400px] h-[400px] rounded-full border border-cyan-400/30 absolute"></div>

          <div className="w-[300px] h-[300px] rounded-full border border-purple-500/30 absolute"></div>

          {/* Git Planet */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_80px_#22d3ee] flex items-center justify-center text-5xl font-bold">
            Git
          </div>

          {/* Floating Nodes */}
          <div className="absolute top-10 left-10 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

          <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7]"></div>

          <div className="absolute top-32 right-0 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_#ec4899]"></div>

        </motion.div>

      </section>

      {/* Terminal */}
      <div className="relative z-10 px-10 pb-20">
        <Terminal />
      </div>

      {/* Git Graph */}
      <div className="relative z-10 px-10 pb-20">
        <GitGraph />
      </div>

    </main>
  );
}