//import { useState } from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import SaveTheDate from '../../assets/images/Save the Date.webp';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const [isQuestionHide, setIsQuestionHide] = useState(true);
  const [animationStart, setAnimationStart] = useState(false);
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsQuestionHide(false);
    }, 500);
    const guestId = localStorage.getItem('guestId');
    if (guestId) {
      navigate('/landing');
    }
  }, []);

  const handleCheckCode = () => {
    if (code.toLocaleUpperCase() === 'NYC2025') {
      setAnimationStart(true);

      setTimeout(() => {
        navigate('/survey/NYC2025');
      }, 1000);
    } else if (code.toLocaleUpperCase() === 'CYN2025') {
      setAnimationStart(true);
      setTimeout(() => {
        navigate('/survey/CYN2025');
      }, 1000);
    } else {
      console.log('Código incorrecto');
    }
  };

  return (
    <div className="p-0 m-0 md:min-w-[900px] max-w-[900px] min-h-[100vh] overflow-hidden relative z-12">
      <div className="flex flex-col items-center justify-center align-middle h-[100vh] p-2">
        <motion.img
          className={`max-h-[60vh] transition-transform z-40`}
          transition={{ duration: 1.5 }}
          animate={animationStart ? { scale: [1, 4] } : {}}
          src={SaveTheDate}
        />
        <div
          className={`flex flex-col gap-4 max-w-[80%] lg:max-w-[100%] transition-opacity duration-[1000ms] h-[30vh] text-2xl z-10 ${
            isQuestionHide ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Introduce el código que verás en tu tarjeta:
          <input
            type="text"
            className="border rounded-lg bg-transparent p-2 focus:outline-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={() => {
              handleCheckCode();
            }}
            className="border rounded-lg font-bold transition-text duration-[500ms] bg-[#d8d5be] text-[#397374] p-2 hover:bg-[#397374] hover:text-[#d8d5be]"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
