//import { useState } from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import HandwritingAnimation from '../../components/HandwrittingAnimation';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isQuestionHide, setIsQuestionHide] = useState(true);
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsQuestionHide(false);
    }, 5000);
  }, []);

  const handleCheckCode = () => {
    console.log(code);
    navigate('/survey/1');
  };

  return (
    <div className="p-0 w-[100vw] min-h-[100vh]">
      <div className=" flex flex-col items-center justify-center align-middle min-h-[100vh] p-2">
        <HandwritingAnimation
          text={'Carlos y Noemí te invitan a su boda'}
          fontSize={120}
          strokeWidth={2}
          strokeColor="#dfdcda"
          fillColor="#dfdcda"
          duration={4}
        />
        <div
          className={`flex flex-col text-4xl gap-2 max-w-[80%] lg:max-w-[100%] transition-opacity duration-[5000ms] ${
            isQuestionHide ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Introduce el código que verás en tu tarjeta:
          <input
            type="text"
            className="border rounded-lg bg-transparent p-2"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={() => {
              handleCheckCode();
            }}
            className="border rounded-lg font-bold transition-text duration-[500ms] bg-[#dfdcda] text-[#397374] p-2 hover:bg-[#397374] hover:text-[#dfdcda]"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
