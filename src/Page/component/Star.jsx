import { useEffect, useState } from "react";

export default function Starback() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Generate random stars
  const generateStars = () => {
    const number = Math.floor((window.innerWidth * window.innerHeight) / 1200);
    const newStars = Array.from({ length: number }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  };

  // Generate a few meteors
  const generateMeteors = () => {
    const number = 6;
    const newMeteors = Array.from({ length: number }).map(() => ({
      top: Math.random() * 50, // spawn in upper half
      left: Math.random() * 50, // spawn on left half
      size: Math.random() * 2 + 1,
      animationDelay: Math.random() * 10,
    }));
    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();

    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-[hsl(var(--background))] transition-colors duration-500">
      {/* ✨ Stars */}
      {stars.map((star, i) => (
        <div
          key={`star-${i}`}
          className="star animate-twinkle absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        ></div>
      ))}

      {/* 🌠 Meteors (left-top → right-bottom) */}
      {meteors.map((meteor, i) => (
        <div
          key={`meteor-${i}`}
          className="meteor animate-meteor absolute bg-gradient-to-r from-white to-transparent rounded-full"
          style={{
            width: `${meteor.size * 30}px`,
            height: `${meteor.size * 1.2}px`,
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.animationDelay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
