import styles from '@/styles/landing.module.css';

import { useState, useEffect } from "react";


export default function StarryBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const numStars = 100; 
    const newStars = Array.from({ length: numStars }).map((_, index) => ({
      id: index,
      x: Math.random() * 100, // Posición X aleatoria (0% - 100%)
      y: Math.random() * 100, // Posición Y aleatoria (0% - 100%)
      size: Math.random() * 3 + 1, // Tamaño entre 1px y 4px
      duration: Math.random() * 5 + 2, // Duración aleatoria entre 2s y 7s
    }));

    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`${styles.animateStarFall} absolute bg-white rounded-full opacity-80`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}vh`,
            left: `${star.x}vw`,
            animationDuration: `${star.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
