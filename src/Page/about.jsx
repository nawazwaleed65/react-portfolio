import { Code2, Smartphone, Brain, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 text-[hsl(var(--foreground))] transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-[hsl(var(--primary))]"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex flex-col items-center justify-center text-center space-y-4"
        >
          <h3 className="text-2xl font-semibold">
            A Passionate{" "}
            <span className="text-[hsl(var(--primary))]">
              Web & Flutter Developer
            </span>
          </h3>

          <p className="text-[hsl(var(--foreground))]/80 leading-relaxed max-w-lg">
            I'm Waleed Nawaz, a front-end developer and machine learning
            enthusiast who loves turning creative ideas into interactive and
            scalable web experiences.
          </p>

          <p className="text-[hsl(var(--foreground))]/80 leading-relaxed max-w-lg">
            With a strong eye for design and deep knowledge of modern frameworks,
            I strive to build products that are both visually stunning and
            technically robust.
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap sm:flex-nowrap max-[400px]:flex-col max-[400px]:items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))]"
            >
              <Mail size={18} />
              Get in Touch
            </a>

            <a
              href="/Waleed_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border border-[hsl(var(--border))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="p-4 border border-[hsl(var(--border))] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <Code2 className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                Web Developer
              </h3>
            </div>
            <p className="text-sm text-[hsl(var(--foreground))]/80 leading-relaxed">
              I craft responsive and visually appealing web interfaces using
              React.js, Tailwind CSS, and modern front-end technologies.
            </p>
          </div>

          <div className="p-4 border border-[hsl(var(--border))] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-2">
              <Smartphone className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                Flutter Developer
              </h3>
            </div>
            <p className="text-sm text-[hsl(var(--foreground))]/80 leading-relaxed">
              I build cross-platform apps with Flutter for elegant, smooth
              performance on Android and iOS.
            </p>
          </div>

          <div className="p-4 border border-[hsl(var(--border))] rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg sm:col-span-2">
            <div className="flex items-center gap-4 mb-2">
              <Brain className="w-8 h-8 text-blue-500" />
              <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                Machine Learning Enthusiast
              </h3>
            </div>
            <p className="text-sm text-[hsl(var(--foreground))]/80 leading-relaxed">
              I explore data-driven insights using Python, TensorFlow, and
              scikit-learn to create adaptive, predictive systems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
