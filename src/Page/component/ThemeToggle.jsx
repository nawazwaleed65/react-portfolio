
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={cn("fixed max-sm:hidden top-2 right-2 p-2 rounded-full transition-colors duration-300")}
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-500" />
      )}
    </button>
  );
}
