"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {

  const [history, setHistory] = useState([
    "Welcome to GitVerse Terminal 🚀",
    "Type: git init",
  ]);

  const [input, setInput] = useState("");

  const commands: Record<string, string> = {
    "git init": "✅ Initialized empty Git repository",
    "git status": "✅ Working tree clean",
    "git add .": "✅ Files added to staging area",
    'git commit -m "first commit"':
      "✅ First commit created successfully",
    "git branch feature-login":
      "✅ Created feature branch",
    "git checkout feature-login":
      "✅ Switched to feature-login",
  };

  const handleCommand = () => {

    if (!input) return;

    const response =
      commands[input] || "❌ Unknown command";

    setHistory((prev) => [
      ...prev,
      `$ ${input}`,
      response,
    ]);

    setInput("");
  };

  const commits = [
    { id: 1, x: 100, y: 120, color: "bg-cyan-400" },
    { id: 2, x: 250, y: 120, color: "bg-cyan-400" },
    { id: 3, x: 400, y: 120, color: "bg-cyan-400" },
    { id: 4, x: 250, y: 250, color: "bg-purple-500" },
    { id: 5, x: 400, y: 250, color: "bg-purple-500" },
  ];

  const missions = [
    {
      title: "Initialize Repository",
      xp: "+50 XP",
      status: "Completed",
    },
    {
      title: "Create First Commit",
      xp: "+100 XP",
      status: "Completed",
    },
    {
      title: "Create Feature Branch",
      xp: "+150 XP",
      status: "In Progress",
    },
    {
      title: "Merge Branches",
      xp: "+250 XP",
      status: "Locked",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background */}
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

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20 relative z-10">

        {/* Left */}
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
            cinematic animations, and interactive missions.
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

        {/* Right */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="relative flex justify-center items-center"
        >

          <div className="w-[400px] h-[400px] rounded-full border border-cyan-400/30 absolute"></div>

          <div className="w-[300px] h-[300px] rounded-full border border-purple-500/30 absolute"></div>

          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_80px_#22d3ee] flex items-center justify-center text-5xl font-bold">
            Git
          </div>

          <div className="absolute top-10 left-10 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]"></div>

          <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_20px_#a855f7]"></div>

          <div className="absolute top-32 right-0 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_#ec4899]"></div>

        </motion.div>

      </section>

      {/* XP CARD */}
      <section className="relative z-10 px-10">

        <div className="w-full max-w-6xl mx-auto p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl">

          <div className="flex justify-between items-center">

            <div>
              <h2 className="text-4xl font-bold text-cyan-400">
                Git Explorer
              </h2>

              <p className="text-gray-400 mt-2">
                Level 1 Developer
              </p>
            </div>

            <div className="text-right">

              <p className="text-5xl font-extrabold">
                120 XP
              </p>

              <p className="text-gray-500">
                Next Level: 250 XP
              </p>

            </div>

          </div>

          <div className="mt-8 w-full h-5 rounded-full bg-white/10 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "48%" }}
              transition={{ duration: 2 }}
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />

          </div>

        </div>

      </section>

      {/* TERMINAL */}
      <section className="relative z-10 px-10 py-20">

        <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-cyan-500/30 bg-black/60 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.2)]">

          <div className="flex items-center gap-3 px-5 py-4 bg-white/5 border-b border-white/10">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <p className="ml-4 text-sm text-gray-400">
              GitVerse Terminal
            </p>

          </div>

          <div className="p-6 h-[400px] overflow-y-auto font-mono text-sm text-green-400 space-y-2">

            {history.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            <div className="flex items-center gap-2 mt-4">

              <span className="text-cyan-400">$</span>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCommand();
                  }
                }}
                className="bg-transparent outline-none flex-1 text-white"
                placeholder="Type git command..."
              />

            </div>

          </div>

        </div>

      </section>

      {/* GIT GRAPH */}
      <section className="relative z-10 px-10">

        <div className="w-full max-w-6xl mx-auto rounded-3xl bg-black/40 border border-cyan-500/20 backdrop-blur-xl overflow-hidden relative p-10">

          <div className="mb-10">
            <h2 className="text-4xl font-bold text-cyan-400">
              Git Branch Visualization
            </h2>

            <p className="text-gray-400 mt-3">
              Learn branching visually through animated commit graphs.
            </p>
          </div>

          <div className="relative h-[400px]">

            <svg className="absolute inset-0 w-full h-full">

              <line
                x1="100"
                y1="140"
                x2="400"
                y2="140"
                stroke="#22d3ee"
                strokeWidth="4"
              />

              <line
                x1="250"
                y1="140"
                x2="250"
                y2="270"
                stroke="#a855f7"
                strokeWidth="4"
              />

              <line
                x1="250"
                y1="270"
                x2="400"
                y2="270"
                stroke="#a855f7"
                strokeWidth="4"
              />

            </svg>

            {commits.map((commit) => (

              <motion.div
                key={commit.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: commit.id * 0.2,
                }}
                className={`absolute w-12 h-12 rounded-full ${commit.color} shadow-[0_0_30px_currentColor]`}
                style={{
                  left: commit.x,
                  top: commit.y,
                }}
              />

            ))}

          </div>

        </div>

      </section>

      {/* MISSIONS */}
      <section className="relative z-10 px-10 py-20">

        <div className="w-full max-w-6xl mx-auto">

          <div className="mb-10">

            <h2 className="text-5xl font-extrabold text-cyan-400">
              Missions
            </h2>

            <p className="text-gray-400 mt-4 text-lg">
              Complete Git missions and level up.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {missions.map((mission, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {mission.title}
                    </h3>

                    <p className="text-cyan-400 mt-3">
                      Reward: {mission.xp}
                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold
                    ${
                      mission.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : mission.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {mission.status}
                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}