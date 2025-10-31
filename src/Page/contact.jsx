import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-20 text-[hsl(var(--foreground))]"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center text-[hsl(var(--primary))]"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col justify-center md:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/3 flex flex-col bg-[hsl(var(--card))] rounded-xl p-6 shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>

          <div className="flex items-start gap-4 mb-4">
            <Mail className="text-blue-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-medium">Email</h4>
              <p className="text-sm text-[hsl(var(--foreground))]/80">
                waleednawaz@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <Phone className="text-blue-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-medium">Phone</h4>
              <p className="text-sm text-[hsl(var(--foreground))]/80">
                +92 300 1234567
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-4">
            <MapPin className="text-blue-500 w-6 h-6 mt-1" />
            <div>
              <h4 className="text-lg font-medium">Location</h4>
              <p className="text-sm text-[hsl(var(--foreground))]/80">
                Lahore, Pakistan
              </p>
            </div>
          </div>

          {/* 🔹 Social Links */}
          <h3 className="text-xl font-semibold mt-6">Connect with me</h3>
          <div className="flex justify-center gap-4 ml-1">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/waleed-nawaz-5a385622a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <Linkedin size={28} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/nawazwaleed65"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <Github size={28} />
            </motion.a>

          </div>
        </motion.div>

        {/* 🔹 Right Side — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/3 flex flex-col bg-[hsl(var(--card))] rounded-xl p-6 shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
            Send a Message
          </h2>

          <form className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-md border border-[hsl(var(--border))] bg-transparent focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="Your Name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <label className="block mb-2 text-sm font-medium">Your Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-md border border-[hsl(var(--border))] bg-transparent focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="you@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <label className="block mb-2 text-sm font-medium">Your Message</label>
              <textarea
                rows="3"
                className="w-full p-3 rounded-md border border-[hsl(var(--border))] bg-transparent focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                placeholder="Write your message..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-semibold py-3 rounded-md hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
