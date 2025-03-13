import { useEffect } from 'react';
import './StarBackground.css';

const StarBackground: React.FC = () => {
  useEffect(() => {
    function generateBoxShadow(n: number): string {
      const shadows: string[] = [];
      for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadows.push(`${x}px ${y}px #d8d5be`);
      }
      return shadows.join(', ');
    }

    const stars = document.getElementById('stars');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    if (stars) stars.style.boxShadow = generateBoxShadow(700);
    if (stars2) stars2.style.boxShadow = generateBoxShadow(200);
    if (stars3) stars3.style.boxShadow = generateBoxShadow(100);
  }, []);

  return (
    <div className="star-background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
};

export default StarBackground;
