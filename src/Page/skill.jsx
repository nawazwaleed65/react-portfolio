import React, { useState } from "react";
import { Code2, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Flutter", level: 80, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Backend" },
  { name: "Firebase", level: 65, category: "Backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Android Studio", level: 85, category: "Tools" },
  { name: "Google Colab", level: 80, category: "Tools" },
  { name: "Figma", level: 80, category: "Tools" },
];

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const filteredSkills =
    filter === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  return (
    <section className="relative py-20 text-white overflow-hidden">
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-center"
        >
          My <span className="text-indigo-500">Skills</span>
        </motion.h2>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-10 flex-wrap justify-center">
          {["All", "Frontend", "Backend", "Tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-indigo-600 text-indigo-400 hover:bg-indigo-700 hover:text-white"
              }`}
            >
              {cat === "Frontend" && <Code2 className="w-4 h-4" />}
              {cat === "Backend" && <Server className="w-4 h-4" />}
              {cat === "Tools" && <Wrench className="w-4 h-4" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111122] p-5 rounded-xl border border-gray-800 hover:border-indigo-500 shadow-md hover:shadow-indigo-500/40 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-gray-200">{skill.name}</h3>
                <span className="text-indigo-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-500 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
