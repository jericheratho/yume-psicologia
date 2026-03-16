/* ============================================================
   Animated Hero Carousel — Yume Psicologia
   Cycles through multiple images with smooth fade transitions
   Similar to Amelie Advice header animation
   ============================================================ */

import { useEffect, useState } from "react";

// Therapy and psychology-related images for the carousel
const CAROUSEL_IMAGES = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/yume-hero-ZrWpfvbLkyoqBkkH5LJPqD.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/vbKXhfLJCTkKGnQjLjMh9Z/yume-therapy-lxVzUqKpOXvKJqVjCvJ7Yw.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/6qSbJXMvVHqVCLKYvEBCJa/yume-abstract-RvCVjQvQpVqKLvQjCvJ7Yw.webp",
];

export default function AnimatedHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Image carousel with fade transition */}
      {CAROUSEL_IMAGES.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Hero background ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
      
      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Carousel indicators (dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {CAROUSEL_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
