/* ============================================================
   Animated Hero Background — Yume Psicologia
   Rotating words with fade animation: "holding", "support", "psychological support"
   Respects sage green brand palette (#8FBF8F)
   ============================================================ */

import { useEffect, useState } from "react";

const ANIMATION_WORDS = [
  {
    text: "holding",
    color: "#8FBF8F",
  },
  {
    text: "support",
    color: "#6B9B6B",
  },
  {
    text: "psychological support",
    color: "#8FBF8F",
  },
];

export default function AnimatedHeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % ANIMATION_WORDS.length);
        setIsVisible(true);
      }, 500); // Half second fade out, then switch
    }, 2000); // 2 second total cycle

    return () => clearInterval(interval);
  }, []);

  const currentWord = ANIMATION_WORDS[currentIndex];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Animated text with fade effect */}
      <div
        className={`text-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
          style={{ color: currentWord.color }}
        >
          {currentWord.text}
        </p>
      </div>

      {/* Semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent pointer-events-none" />
    </div>
  );
}
