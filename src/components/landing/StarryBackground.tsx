import styles from '@/styles/landing.module.css';

import { useState, useEffect } from "react";


export default function StarryBackground() {
  const [stars, setStars] = useState<Array<{ id: number; posX: number; posY: number; size: number; duration: number, color: string }>>([]);

  const colors = ["#AECBFA", "#B0E0E6", "#FBF1E5"];

  useEffect(() => {
    const numStars = 150; 
    const newStars = Array.from({ length: numStars }).map((_, index) => ({
      id: index,
      posX: Math.random() * 100,
      posY: Math.random() * 100, 
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));

    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`${styles.animateStarFall} absolute rounded-full opacity-80`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.posY}vh`,
            left: `${star.posX}vw`,
            background: `${star.color}`,
            animationDuration: `${star.duration}s`,
          }}
        ></div>
      ))}
    </div>
  );
}
