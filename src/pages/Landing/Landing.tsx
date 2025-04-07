//import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Anillo from '../../assets/images/ANILLO.webp';

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
    <div className="m-h-[100dvh] flex flex-col m-w-full fontNoto scroll-smooth">
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
        <img src={Anillo} />
      </div>
      <div
        className="bg-[#d8d5be] text-[#397374] m-h-[10dvh] max-w-[900px] p-4 flex flex-col gap-6"
        ref={nosotros}
      >
        <h1 className="text-2xl font-bold">Sobre nosotros</h1>
        <p>¡Que si! ¡Que nos casamos!</p>
        <p>
          Y si has llegado a esta página es porque eres una persona muy especial
          para nosotros, queremos compartir esta gran fiesta. Nos vemos el 27 de
          septiembre a las 16:30 de la tarde.
        </p>
        <p>
          Queremos disfrutar de todos vosotros el mayor tiempo posible, así que
          si decidís venir a Rascafria desde el viernes por la noche avisad,
          habrá cañas de bienvenida en algún bar de la zona para ir calentando
          motores.
        </p>
        <p>
          Aquí abajo encontrarás todo lo que necesitas saber para el gran día.
        </p>
      </div>
      <div
        className="bg-[#397374] text-[#d8d5be] m-h-[10dvh] max-w-[900px]  p-4 flex flex-col gap-6"
        ref={horarios}
      >
        <h1 className="text-2xl font-bold">Horario</h1>
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
        className="bg-[#d8d5be] text-[#397374] m-h-[10dvh] max-w-[900px]  p-4 flex flex-col gap-6"
        ref={donde}
      >
        <h1 className="text-2xl font-bold">La finca</h1>
        <p>
          Toda la celebración va a tener lugar en la finca Prados Riveros, en
          Rascafría. Es un espacio muy especial que nos enamoró desde el primer
          momento.
        </p>
        <p>
          Como la fecha es a finales de septiembre por la tarde es probable que
          a partir de cierta hora caiga bastante la temperatura. ¡Qué no cunda
          el pánico! Vamos a estar super agusto, pero como diría tu madre:
        </p>
        <div className="flex flex-row justify-center align-middle items-center">
          <span className="font-semibold text-xl">
            "¡Llévate una rebequita que por la noche refresca!" *
          </span>
        </div>

        <p className="italic text-sm">
          * Más bien tráete abrigo por si acaso, forma parte de la experiencia.
        </p>
      </div>
      <div
        className="bg-[#397374] text-[#d8d5be] m-h-[10dvh] max-w-[900px]  p-4 flex flex-col gap-6"
        ref={comoLlegar}
      >
        <h1 className="text-2xl font-bold">Cómo llegar</h1>
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
        className="bg-[#d8d5be] text-[#397374] m-h-[10dvh] max-w-[900px]  p-4 flex flex-col gap-6"
        ref={alojamientos}
      >
        <h1 className="text-2xl font-bold">Alojamientos </h1>
        <p>
          En el caso de que prefieras pasar la noche en Rascafría aquí tenéis
          algunas recomendaciones de alojamientos. Llamad de parte de Jorge
          Pascual de Prados Riveros os tratarán muy bien.
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
    </div>
  );
}

export default Landing;
