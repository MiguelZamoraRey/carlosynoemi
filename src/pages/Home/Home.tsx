//import { useState } from 'react';
import { useEffect, useState } from 'react';
import './Home.css';
import SaveTheDate from '../../assets/images/Save the Date.webp';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isQuestionHide, setIsQuestionHide] = useState(true);
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsQuestionHide(false);
    }, 500);
  }, []);

  const handleCheckCode = () => {
    console.log(code);
    if (code === 'NYC2025') {
      navigate('/survey/NYC2025');
    } else if (code === 'CYN2025') {
      navigate('/survey/CYN2025');
    } else {
      console.log('Código incorrecto');
    }
  };

  return (
    <div className="p-0 m-0  md:min-w-[900px] max-w-[900px] min-h-[100vh]">
      <div className="flex flex-col items-center justify-center align-middle h-[100vh] p-2 bg-[#397374]">
        <img className="max-h-[60vh]" src={SaveTheDate} />
        <div
          className={`flex flex-col gap-4 max-w-[80%] lg:max-w-[100%] transition-opacity duration-[1000ms] h-[30vh] text-2xl  ${
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
