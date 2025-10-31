import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-[hsl(var(--foreground))]"
    >
      <div className="max-w-2xl">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-400">Waleed Nawaz</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-400 dark:text-gray-300 mb-6"
        >
          A passionate{" "}
          <span className="text-[hsl(var(--primary))]">Front-End Developer</span>{" "}
          and{" "}
          <span className="text-[hsl(var(--primary))]">Machine Learning Enthusiast</span>{" "}
          who loves crafting interactive and elegant web experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-all"
          >
            View Projects
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
