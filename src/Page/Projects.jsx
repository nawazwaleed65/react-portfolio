import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Furniro E-Commerce",
    description:
      "A React-based furniture e-commerce platform designed to provide a seamless shopping experience. Features include product filtering, Firebase authentication, and a responsive UI built with Tailwind CSS.",
    tags: ["React.js", "TailwindCSS", "Firebase"],
    image:
      "https://cdn3.f-cdn.com//files/download/214608292/Thumbnail%20%281%29.jpg?width=780&height=438&fit=crop",
  },
  {
    title: "House Selling App",
    description:
      "A Flutter-based real estate application that allows users to buy, sell, and rent properties easily. Integrated with Firebase for authentication, real-time listings, and cloud storage for property images.",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    image:
      "https://market-resized.envatousercontent.com/previews/files/452238437/Preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=8994a992ec23104c0949597ac66c1d42949c020dd33762338348ed5807e9e9cd",
  },
  {
    title: "Adware Detection ML",
    description:
      "A machine learning project using the CIC-AAGM-2017 dataset to detect adware in Android applications. Implemented and evaluated multiple ML algorithms to improve detection accuracy.",
    tags: ["Python", "TensorFlow", "scikit-learn", "Jupyter Notebook"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbTgyRpOGnXlJt2T6lcnd2FoN4DiBEEnA8g&s",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 text-[hsl(var(--foreground))] transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-2"
      >
        Featured <span className="text-[hsl(var(--primary))]">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-[hsl(var(--foreground))]/70 max-w-2xl mx-auto mb-12"
      >
        Here are some of my recent projects — designed with performance, creativity, and user experience in mind.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4 shadow-md hover:scale-110 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 w-full"
            />
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-[hsl(var(--primary))]/10 text-[hsl(var(--foreground))]/80 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-[hsl(var(--foreground))]/70 mb-4">{project.description}</p>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition"
              >
                <ExternalLink className="w-5 h-5 text-blue-500" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-lg border border-[hsl(var(--border))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition"
              >
                <Github className="w-5 h-5 text-blue-500" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center mt-12"
      >
        <a
          href="https://github.com/nawazwaleed65"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] transition text-[hsl(var(--primary-foreground))] font-semibold px-6 py-3 rounded-full flex items-center gap-2"
        >
          <Github className="w-5 h-5" />
          Check My Github
        </a>
      </motion.div>
    </section>
  );
}
