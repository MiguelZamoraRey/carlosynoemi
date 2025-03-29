import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

//import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';

function Landing() {
  const navigate = useNavigate();
  const [actualSection, setActualSection] = useState('Inicio');
  const inicio = useRef<HTMLDivElement>(null);
  const nosotros = useRef<HTMLDivElement>(null);
  const horarios = useRef<HTMLDivElement>(null);
  const donde = useRef<HTMLDivElement>(null);
  const comoLlegar = useRef<HTMLDivElement>(null);
  const alojamientos = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const guestId = localStorage.getItem('guestId');
    if (!guestId) {
      navigate('/');
    }
  }, []);

  const handleNavigateFromSection = (section: string) => {
    setActualSection(section);
    switch (section) {
      case 'Inicio':
        if (inicio.current) {
          inicio.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'Nosotros':
        if (nosotros.current) {
          nosotros.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      case 'Horarios':
        if (horarios.current) {
          horarios.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      case 'Dónde':
        if (donde.current) {
          donde.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'Cómo llegar':
        if (comoLlegar.current) {
          comoLlegar.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      case 'Alojamientos':
        if (alojamientos.current) {
          alojamientos.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      default:
        if (inicio.current) {
          inicio.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
    }
  };

  return (
    <div className="m-h-[100dvh] flex flex-col m-w-full fontNoto scroll-smooth ">
      <Header
        section={actualSection}
        handleOnClickSection={(section) => {
          handleNavigateFromSection(section);
        }}
      />
      <div
        className="bg-[#397374] text-[#d8d5be] m-h-[10dvh] max-w-[900px] p-2"
        ref={inicio}
      >
        <h1>SECTION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="bg-[#d8d5be] text-[#397374] m-h-[10dvh] max-w-[900px] p-2"
        ref={nosotros}
      >
        <h1>SECTION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="bg-[#397374] text-[#d8d5be] m-h-[10dvh] max-w-[900px] p-2"
        ref={horarios}
      >
        <h1>SECTION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="bg-[#d8d5be] text-[#397374] m-h-[10dvh] max-w-[900px] p-2"
        ref={donde}
      >
        <h1>SECTION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="bg-[#397374] text-[#d8d5be] m-h-[10dvh] max-w-[900px] p-2"
        ref={comoLlegar}
      >
        <h1>SECTION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div
        className="bg-[#d8d5be] text-[#397374] m-h-[10dvh] max-w-[900px] p-2"
        ref={alojamientos}
      >
        <h1>SECTION</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Landing;
