import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50",
        " text-[hsl(var(--foreground))] transition-all duration-300"
      )}
    >
      <div className="container w-11/12 mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
        >
          <span className="text-blue-400">Waleed</span> Portfolio
        </a>
        <div className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[hsl(var(--primary))] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] py-4 px-6">
          <div className="flex flex-col gap-4 text-center font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[hsl(var(--primary))] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
