"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {

  // =========================
  // TERMINAL
  // =========================

  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    "🚀 Welcome to GitVerse",
    "Learn Git like a real game.",
    "",
    "Commands:",
    "git init",
    "git status",
    "git commit",
    "git branch feature",
    "git checkout feature",
    "git checkout main",
    "git merge feature",
    "git stash",
    "git log",
    "git reset",
  ]);

  // =========================
  // GAME STATE
  // =========================

  const [repoInitialized, setRepoInitialized] =
    useState(false);

  const [xp, setXP] = useState(0);

  const [level, setLevel] = useState(1);

  const [streak, setStreak] = useState(0);

  const [stashCount, setStashCount] =
    useState(0);

  const [activeBranch, setActiveBranch] =
    useState("main");

  const [branches, setBranches] = useState([
    "main",
  ]);

  const [mergeConflict, setMergeConflict] =
    useState(false);

  const [showAchievement, setShowAchievement] =
    useState("");

  // =========================
  // COMMITS
  // =========================

  const [commits, setCommits] = useState([
    {
      id: 1,
      x: 100,
      y: 170,
      branch: "main",
      color: "bg-cyan-400",
      message: "Initial Commit",
    },
  ]);

  // =========================
  // ACHIEVEMENTS
  // =========================

  const [achievements, setAchievements] =
    useState([
      {
        title: "Initialize Repository",
        unlocked: false,
      },

      {
        title: "Create First Commit",
        unlocked: false,
      },

      {
        title: "Create Branch",
        unlocked: false,
      },

      {
        title: "Merge Branch",
        unlocked: false,
      },

      {
        title: "Use Git Stash",
        unlocked: false,
      },
    ]);

  // =========================
  // LEVEL SYSTEM
  // =========================

  useEffect(() => {

    if (xp >= 1000) {
      setLevel(5);
    }

    else if (xp >= 700) {
      setLevel(4);
    }

    else if (xp >= 400) {
      setLevel(3);
    }

    else if (xp >= 200) {
      setLevel(2);
    }

  }, [xp]);

  // =========================
  // ACHIEVEMENT POPUP
  // =========================

  const unlockAchievement = (title: string) => {

    setAchievements((prev) =>
      prev.map((item) =>
        item.title === title
          ? {
              ...item,
              unlocked: true,
            }
          : item
      )
    );

    setShowAchievement(title);

    setTimeout(() => {
      setShowAchievement("");
    }, 3000);
  };

  // =========================
  // COMMAND ENGINE
  // =========================

  const handleCommand = () => {

    if (!input.trim()) return;

    let response = "❌ Unknown command";

    // =====================
    // git init
    // =====================

    if (input === "git init") {

      setRepoInitialized(true);

      response =
        "✅ Initialized empty Git repository";

      setXP((prev) => prev + 50);

      setStreak((prev) => prev + 1);

      unlockAchievement(
        "Initialize Repository"
      );
    }

    // =====================
    // git status
    // =====================

    else if (input === "git status") {

      response = repoInitialized
        ? `✅ On branch ${activeBranch}`
        : "❌ Repository not initialized";
    }

    // =====================
    // git commit
    // =====================

    else if (input === "git commit") {

      if (!repoInitialized) {

        response =
          "❌ Initialize repository first";

      } else {

        response =
          `✅ Commit created on ${activeBranch}`;

        setXP((prev) => prev + 100);

        setStreak((prev) => prev + 1);

        setCommits((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            x: 100 + prev.length * 120,
            y:
              activeBranch === "main"
                ? 170
                : 340,
            branch: activeBranch,
            color:
              activeBranch === "main"
                ? "bg-cyan-400"
                : "bg-purple-500",
            message: `Commit ${prev.length}`,
          },
        ]);

        unlockAchievement(
          "Create First Commit"
        );
      }
    }

    // =====================
    // git branch feature
    // =====================

    else if (
      input === "git branch feature"
    ) {

      if (!branches.includes("feature")) {

        setBranches((prev) => [
          ...prev,
          "feature",
        ]);

        response =
          "✅ Feature branch created";

        setXP((prev) => prev + 150);

        unlockAchievement(
          "Create Branch"
        );

      } else {

        response =
          "⚠️ Feature branch already exists";
      }
    }

    // =====================
    // git checkout feature
    // =====================

    else if (
      input === "git checkout feature"
    ) {

      if (branches.includes("feature")) {

        setActiveBranch("feature");

        response =
          "✅ Switched to feature branch";

      } else {

        response =
          "❌ Feature branch not found";
      }
    }

    // =====================
    // git checkout main
    // =====================

    else if (
      input === "git checkout main"
    ) {

      setActiveBranch("main");

      response =
        "✅ Switched to main branch";
    }

    // =====================
    // git merge feature
    // =====================

    else if (
      input === "git merge feature"
    ) {

      const randomConflict =
        Math.random() > 0.5;

      if (randomConflict) {

        response =
          "⚠️ Merge conflict detected";

        setMergeConflict(true);

      } else {

        response =
          "✅ Feature branch merged successfully";

        setXP((prev) => prev + 300);

        setCommits((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            x: 100 + prev.length * 120,
            y: 170,
            branch: "main",
            color: "bg-pink-500",
            message: "Merge Commit",
          },
        ]);

        unlockAchievement(
          "Merge Branch"
        );
      }
    }

    // =====================
    // git stash
    // =====================

    else if (input === "git stash") {

      setStashCount((prev) => prev + 1);

      response =
        "✅ Changes stashed";

      setXP((prev) => prev + 80);

      unlockAchievement(
        "Use Git Stash"
      );
    }

    // =====================
    // git reset
    // =====================

    else if (input === "git reset") {

      if (commits.length > 1) {

        setCommits((prev) =>
          prev.slice(0, -1)
        );

        response =
          "✅ Removed last commit";

      } else {

        response =
          "⚠️ Cannot remove initial commit";
      }
    }

    // =====================
    // git log
    // =====================

    else if (input === "git log") {

      response = commits
        .map(
          (commit) =>
            `commit-${commit.id} (${commit.branch})`
        )
        .join(" | ");
    }

    // =====================
    // UPDATE TERMINAL
    // =====================

    setHistory((prev) => [
      ...prev,
      `$ ${input}`,
      response,
    ]);

    setInput("");
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_25%),radial-gradient(circle_at_bottom_right,#6d28d9,transparent_25%)]"></div>

      {/* ACHIEVEMENT POPUP */}

      <AnimatePresence>

        {showAchievement && (

          <motion.div
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 20,
            }}
            exit={{
              opacity: 0,
              y: -100,
            }}
            className="fixed top-5 right-5 z-50 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold shadow-[0_0_40px_#22d3ee]"
          >
            🏆 Achievement:
            {" "}
            {showAchievement}
          </motion.div>

        )}

      </AnimatePresence>

      {/* NAVBAR */}

      <nav className="relative z-10 flex justify-between items-center px-10 py-6">

        <h1 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          GitVerse
        </h1>

        <div className="flex gap-4 flex-wrap">

          <div className="px-5 py-2 rounded-full bg-white/10">
            🌿
            {" "}
            {activeBranch}
          </div>

          <div className="px-5 py-2 rounded-full bg-white/10">
            ⚡
            {" "}
            {xp}
            {" "}
            XP
          </div>

          <div className="px-5 py-2 rounded-full bg-white/10">
            🔥
            {" "}
            {streak}
          </div>

          <div className="px-5 py-2 rounded-full bg-white/10">
            📦
            {" "}
            {stashCount}
          </div>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative z-10 grid md:grid-cols-2 gap-10 items-center px-10 py-20">

        <div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-7xl md:text-8xl font-black leading-tight"
          >
            Learn Git <br />
            Like a
            {" "}
            <span className="text-cyan-400">
              Game
            </span>
          </motion.h1>

          <p className="mt-8 text-xl text-gray-300 leading-10">
            Interactive Git gameplay with
            commits, branches,
            merge conflicts,
            stash, reset,
            and real Git learning.
          </p>

        </div>

        {/* PLANET */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="relative flex justify-center items-center"
        >

          <div className="absolute w-[450px] h-[450px] rounded-full border border-cyan-400/20"></div>

          <div className="absolute w-[320px] h-[320px] rounded-full border border-purple-500/20"></div>

          <div className="w-44 h-44 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 shadow-[0_0_120px_#22d3ee] flex items-center justify-center text-6xl font-black">
            Git
          </div>

        </motion.div>

      </section>

      {/* XP PANEL */}

      <section className="relative z-10 px-10">

        <div className="max-w-7xl mx-auto p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-5xl font-black text-cyan-400">
                Level
                {" "}
                {level}
              </h2>

              <p className="text-gray-400 mt-4">
                Git Progression System
              </p>

            </div>

            <div className="text-right">

              <p className="text-6xl font-black">
                {xp}
              </p>

              <p className="text-gray-500">
                XP
              </p>

            </div>

          </div>

          {/* XP BAR */}

          <div className="mt-10 w-full h-6 rounded-full bg-white/10 overflow-hidden">

            <motion.div
              animate={{
                width: `${Math.min(
                  xp / 10,
                  100
                )}%`,
              }}
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            />

          </div>

        </div>

      </section>

      {/* TERMINAL */}

      <section className="relative z-10 px-10 py-20">

        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-cyan-500/30 bg-black/60 backdrop-blur-xl">

          {/* TOP */}

          <div className="flex items-center gap-3 px-6 py-5 bg-white/5 border-b border-white/10">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>

            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <p className="ml-5 text-gray-400">
              GitVerse Terminal
            </p>

          </div>

          {/* CONTENT */}

          <div className="p-6 h-[450px] overflow-y-auto font-mono text-sm text-green-400 space-y-3">

            {history.map((line, index) => (
              <p key={index}>
                {line}
              </p>
            ))}

            <div className="flex items-center gap-3">

              <span className="text-cyan-400">
                $
              </span>

              <input
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
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

        <div className="max-w-7xl mx-auto rounded-3xl bg-white/5 border border-cyan-500/20 p-10 backdrop-blur-xl">

          <h2 className="text-5xl font-black text-cyan-400 mb-10">
            Git Graph
          </h2>

          <div className="relative h-[500px] overflow-hidden">

            {/* LINES */}

            <svg className="absolute inset-0 w-full h-full">

              {/* MAIN */}

              <line
                x1="100"
                y1="190"
                x2="1600"
                y2="190"
                stroke="#22d3ee"
                strokeWidth="4"
              />

              {/* FEATURE */}

              <line
                x1="220"
                y1="190"
                x2="220"
                y2="360"
                stroke="#a855f7"
                strokeWidth="4"
              />

              <line
                x1="220"
                y1="360"
                x2="1600"
                y2="360"
                stroke="#a855f7"
                strokeWidth="4"
              />

            </svg>

            {/* COMMITS */}

            {commits.map((commit) => (

              <motion.div
                key={commit.id}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                className={`absolute w-14 h-14 rounded-full ${commit.color} shadow-[0_0_40px_currentColor] flex items-center justify-center text-black font-black`}
                style={{
                  left: commit.x,
                  top: commit.y,
                }}
              >
                {commit.id}
              </motion.div>

            ))}

            {/* HEAD */}

            <motion.div
              animate={{
                y:
                  activeBranch === "main"
                    ? 170
                    : 340,
              }}
              className="absolute right-20 w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-black font-black"
            >
              HEAD
            </motion.div>

          </div>

        </div>

      </section>

      {/* MISSIONS */}

      <section className="relative z-10 px-10 py-20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-6xl font-black text-cyan-400 mb-12">
            Missions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {achievements.map(
              (achievement, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="p-8 rounded-3xl bg-white/5 border border-cyan-500/20"
                >

                  <div className="flex justify-between items-center">

                    <h3 className="text-3xl font-black">
                      {achievement.title}
                    </h3>

                    <span
                      className={`px-5 py-3 rounded-full font-bold ${
                        achievement.unlocked
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {achievement.unlocked
                        ? "Completed"
                        : "Pending"}
                    </span>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </section>

      {/* MERGE CONFLICT */}

      {mergeConflict && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50">

          <div className="bg-[#111] border border-red-500/30 p-10 rounded-3xl max-w-lg">

            <h2 className="text-4xl font-black text-red-400">
              ⚠️ Merge Conflict
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Two branches modified the same
              file. Resolve conflict manually.
            </p>

            <button
              onClick={() =>
                setMergeConflict(false)
              }
              className="mt-8 px-8 py-4 rounded-2xl bg-red-500 text-white font-bold"
            >
              Resolve Conflict
            </button>

          </div>

        </div>

      )}

    </main>
  );
}