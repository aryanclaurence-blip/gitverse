"use client";

import { motion } from "framer-motion";

export default function GitGraph() {

  const commits = [
    { id: 1, x: 100, y: 120, color: "bg-cyan-400" },
    { id: 2, x: 250, y: 120, color: "bg-cyan-400" },
    { id: 3, x: 400, y: 120, color: "bg-cyan-400" },

    { id: 4, x: 250, y: 250, color: "bg-purple-500" },
    { id: 5, x: 400, y: 250, color: "bg-purple-500" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto mt-20 rounded-3xl bg-black/40 border border-cyan-500/20 backdrop-blur-xl overflow-hidden relative p-10">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#06b6d4,transparent_25%),radial-gradient(circle_at_bottom_right,#9333ea,transparent_25%)] opacity-20"></div>

      {/* Title */}
      <div className="relative z-10 mb-10">
        <h2 className="text-4xl font-bold text-cyan-400">
          Git Branch Visualization
        </h2>

        <p className="text-gray-400 mt-3">
          Learn branching visually through animated commit graphs.
        </p>
      </div>

      {/* Graph */}
      <div className="relative h-[400px]">

        {/* SVG Branch Lines */}
        <svg className="absolute inset-0 w-full h-full">

          {/* Main Branch */}
          <line
            x1="100"
            y1="140"
            x2="400"
            y2="140"
            stroke="#22d3ee"
            strokeWidth="4"
          />

          {/* Feature Branch */}
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

        {/* Commit Nodes */}
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

        {/* Labels */}
        <div className="absolute left-10 top-10 text-cyan-400 font-bold">
          Main Branch
        </div>

        <div className="absolute left-10 bottom-10 text-purple-400 font-bold">
          Feature Branch
        </div>

      </div>

    </div>
  );
}