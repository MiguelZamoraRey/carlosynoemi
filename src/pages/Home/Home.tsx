//import { useState } from 'react';
import { useEffect, useState } from 'react';

import SaveTheDate from '../../assets/images/Save the Date.webp';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { createNewGuest, getGuestById } from '../../services/GuestService';
import { isValidEmail } from '../../utils/generalMethods';

function Home() {
  const [isQuestionHide, setIsQuestionHide] = useState(true);
  const [animationStart, setAnimationStart] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsQuestionHide(false);
    }, 500);
    const guestId = localStorage.getItem('guestId');
    if (guestId) {
      const getGuest = async () => {
        const response = await getGuestById(guestId);
        if (response && response.data.status === 'COMPLETE') {
          navigate('/landing');
        } else if (
          response.data.status === 'INCOMPLETE' &&
          response.data.code
        ) {
          navigate(`/survey/${response.data.code}`);
        } else {
          localStorage.clear();
        }
      };
      getGuest();
    }
  }, []);

  const handleCheckEmail = () => {
    if (email != '' && isValidEmail(email)) {
      const getOrCreateGuest = async () => {
        setIsQuestionHide(true);
        const response = await createNewGuest(email);
        const guestId = response.data._id;
        setAnimationStart(true);
        localStorage.setItem('guestId', guestId);
        setTimeout(() => {
          navigate(`/survey/${guestId}`);
        }, 1000);
      };
      getOrCreateGuest();
    } else {
      setError('El email no parece correcto');
      setEmail(null);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCheckEmail();
    }
  };

  return (
    <div className="flex place-content-center">
      <div className="p-0 m-0 m-w-full md:m-w-[900px] max-w-[900px] m-h-[100vh] overflow-hidden relative z-12">
        <div className="flex flex-col items-center justify-center align-middle h-[100vh] p-2">
          <motion.img
            className={`max-h-[60vh] transition-transform z-40`}
            transition={{ duration: 1.5 }}
            animate={animationStart ? { opacity: [1, 0] } : {}}
            src={SaveTheDate}
          />
          <div
            className={`flex flex-col gap-4 max-w-[80%] lg:max-w-[100%] transition-opacity duration-[1000ms] h-[30vh] text-2xl z-10 ${
              isQuestionHide ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Introduce tu email:
            <input
              type="text"
              className="border rounded-lg bg-transparent p-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <div
              className={`${
                error.length > 0
                  ? 'flex align-middle justify-center'
                  : 'invisible'
              }`}
            >
              <span className={`text-xs w-full`}>{error}</span>
            </div>
            <button
              onClick={() => {
                handleCheckEmail();
              }}
              className="border rounded-lg font-bold transition-text duration-[500ms] bg-[#d8d5be] text-[#397374] p-2 hover:bg-[#397374] hover:text-[#d8d5be]"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
