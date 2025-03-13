import { useEffect, useState } from 'react';
import './StarBackground.css';
import starSvg from './star.svg';

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<
    { x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    function generateStars(n: number): {
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
    }[] {
      return Array.from({ length: n }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 5 + 5, // Velocidad aleatoria entre 5s y 10s
        delay: Math.random() * 10, // Retraso aleatorio para evitar reinicios simultáneos
      }));
    }

    setStars(generateStars(150));
  }, []);

  return (
    <div className="star-background">
      {stars.map((star, index) => (
        <img
          key={index}
          src={starSvg}
          alt="star"
          className="star"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `-${star.delay}s`, // Retraso negativo para que ya estén en diferentes posiciones al iniciar
            zIndex: -1,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
