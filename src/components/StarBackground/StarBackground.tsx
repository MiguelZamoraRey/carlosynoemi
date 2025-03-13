import { useEffect, useState } from 'react';
import './StarBackground.css';
import starSvg from './star.svg';

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>(
    []
  );

  useEffect(() => {
    function generateStars(
      n: number
    ): { x: number; y: number; size: number }[] {
      return Array.from({ length: n }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 5,
      }));
    }

    setStars(generateStars(300));
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
            zIndex: -1,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
