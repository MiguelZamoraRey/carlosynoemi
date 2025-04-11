//import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Anillo from '../../assets/images/ANILLOv2.webp';
import Mapa from '../../assets/images/mapa_prados.webp';
import Alojamiento from '../../components/Alojamiento';
import ChurchIcon from '../../components/iconos/ChurchIcon';
import PeopleIcon from '../../components/iconos/PeopleIcon';
import FoodIcon from '../../components/iconos/FoodIcon';
import CupIcon from '../../components/iconos/CupIcon';
import SleepIcon from '../../components/iconos/SleepIcon';
import PartyIcon from '../../components/iconos/PartyIcon';
import GMap from '../../components/GMap';

function Landing() {
  const navigate = useNavigate();
  const [actualSection, setActualSection] = useState('INICIO');
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 900); // Puedes ajustar este valor según tus necesidades
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleNavigateFromSection = (section: string) => {
    setActualSection(section);
    switch (section) {
      case 'INICIO':
        if (inicio.current) {
          inicio.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'NOSOTROS':
        if (nosotros.current) {
          nosotros.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      case 'HORARIOS':
        if (horarios.current) {
          horarios.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      case 'DÓNDE':
        if (donde.current) {
          donde.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        break;
      case 'CÓMO LLEGAR':
        if (comoLlegar.current) {
          comoLlegar.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
        break;
      case 'ALOJAMIENTOS':
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
    <div className="m-h-[100dvh] flex flex-col m-w-full fontNoto scroll-smooth font-wix">
      <Header
        section={actualSection}
        handleOnClickSection={(section) => {
          handleNavigateFromSection(section);
        }}
      />
      <div
        className="bg-[#499495] text-[#d8d5be] flex place-content-center py-[1rem] md:py-[2.5rem]"
        ref={inicio}
      >
        <div className="max-h-[90dvh] max-w-[900px] p-2">
          <img src={Anillo} className="max-h-[90dvh] w-auto" />
        </div>
      </div>
      <div
        className="bg-[#fffff5] text-[#000000] flex place-content-center py-[1rem] md:py-[2.5rem]"
        ref={nosotros}
      >
        <div className="m-h-[10dvh] max-w-[900px] p-4 flex flex-col gap-6">
          <h1 className="text-3xl font-extrabold  font-wix-bold">
            Sobre nosotros
          </h1>
          <p>¡Que si! ¡Que nos casamos!</p>
          <p>
            Y si has llegado a esta página es porque eres una persona muy
            especial para nosotros, queremos compartir esta gran fiesta. Nos
            vemos el 27 de septiembre a las 16:30 de la tarde.
          </p>
          <p>
            Queremos disfrutar de todos vosotros el mayor tiempo posible, así
            que si decidís venir a Rascafria desde el viernes por la noche
            avisad, habrá cañas de bienvenida en algún bar de la zona para ir
            calentando motores.
          </p>
          <p>
            Aquí abajo encontrarás todo lo que necesitas saber para el gran día.
          </p>
        </div>
      </div>
      <div
        className="bg-[#499495] text-[#000000] m-h-[10dvh] flex place-content-center py-[1rem] md:py-[2.5rem]"
        ref={horarios}
      >
        <div className="max-w-[900px] p-4 flex flex-col gap-6">
          <h1 className="text-3xl font-extrabold  font-wix-bold">Horario</h1>
          <div className="absolute h-[18em] w-1 bg-[#fffff0] ml-[1.1em] mt-[5em] z-[1]"></div>
          <div className="flex flex-col gap-4 justify-start align-middle ">
            <div className="flex flex-row justify-start align-middle gap-4">
              <div className="bg-[#fffff0] rounded-full p-2 z-10">
                <PeopleIcon color="#397374" />{' '}
              </div>{' '}
              <span className="text-xl mt-1">16:30</span>
              <span className="font-bold text-xl mt-1">Llegada invitados</span>
            </div>
            <div className="flex flex-row justify-start align-middle gap-4">
              <div className="bg-[#fffff0] rounded-full p-2 z-10">
                <ChurchIcon color="#397374" />{' '}
              </div>{' '}
              <span className="text-xl mt-1">17:00</span>
              <span className="font-bold text-xl mt-1">Ceremonia</span>
            </div>
            <div className="flex flex-row justify-start align-middle gap-4">
              <div className="bg-[#fffff0] rounded-full p-2 z-10">
                <CupIcon color="#397374" />{' '}
              </div>{' '}
              <span className="text-xl mt-1">18:00</span>
              <span className="font-bold text-xl mt-1">Cóctel</span>
            </div>
            <div className="flex flex-row justify-start align-middle gap-4">
              <div className="bg-[#fffff0] rounded-full p-2 z-10">
                <FoodIcon color="#397374" />{' '}
              </div>{' '}
              <span className="text-xl mt-1">20:00</span>
              <span className="font-bold text-xl mt-1">Banquete</span>
            </div>
            <div className="flex flex-row justify-start align-center gap-4">
              <div className="bg-[#fffff0] rounded-full p-2 z-10">
                <PartyIcon color="#397374" />{' '}
              </div>{' '}
              <span className="text-xl mt-1">22:00</span>
              <span className="font-bold text-xl mt-1">Comienza la fiesta</span>
            </div>
            <div className="flex flex-row justify-start align-middle gap-4">
              <div className="bg-[#fffff0] rounded-full p-2 z-10">
                <SleepIcon color="#397374" />{' '}
              </div>{' '}
              <span className="text-xl mt-1">04:00</span>
              <span className="font-bold text-xl mt-1">Si me queréis irse</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#fffff5] text-[#000000] flex place-content-center py-[1rem] md:py-[2.5rem]"
        ref={donde}
      >
        <div className="m-h-[10dvh] max-w-[900px] p-4 flex flex-col gap-6">
          <h1 className="text-3xl font-extrabold  font-wix-bold">La finca</h1>
          <p>
            Toda la celebración va a tener lugar en la finca Prados Riveros, en
            Rascafría. Es un espacio muy especial que nos enamoró desde el
            primer momento.
          </p>
          <p>
            Como la fecha es a finales de septiembre por la tarde es probable
            que a partir de cierta hora caiga bastante la temperatura. ¡Qué no
            cunda el pánico! Vamos a estar super agusto, pero como diría tu
            madre:
          </p>
          <div className="flex flex-row justify-center align-middle items-center py-[1rem] md:py-[2.5rem]">
            <span className="font-bold text-xl">
              "¡Llévate una rebequita que por la noche refresca!" *
            </span>
          </div>

          <p className="italic text-sm">
            * Más bien tráete abrigo por si acaso, forma parte de la
            experiencia.
          </p>
        </div>
      </div>
      <div
        className="bg-[#499495] text-[#000000] flex place-content-center py-[1rem] md:py-[2.5rem]"
        ref={comoLlegar}
      >
        <div className="m-h-[10dvh] max-w-[900px] p-4 flex flex-col gap-6">
          <h1 className="text-3xl font-extrabold  font-wix-bold">
            Cómo llegar
          </h1>
          <GMap isMobile={isMobile} />
          <img
            src={Mapa}
            alt="mapa direccion finca"
            className="w-[100%] max-w-[900px] h-auto"
          />
        </div>
      </div>
      <div
        className="bg-[#fffff5] text-[#000000] flex place-content-center py-[1rem] md:py-[2.5rem]"
        ref={alojamientos}
      >
        <div className=" m-h-[10dvh] max-w-[900px]  p-4 flex flex-col gap-6">
          <h1 className="text-3xl font-extrabold  font-wix-bold">
            Alojamientos{' '}
          </h1>
          <p>
            En el caso de que prefieras pasar la noche en Rascafría aquí tenéis
            algunas recomendaciones de alojamientos. Llamad de parte de Jorge
            Pascual de Prados Riverosos tratarán muy bien.
          </p>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
            <Alojamiento
              name="Casa rural"
              direction="Al lado de la finca"
              phone="627232914"
              description="Preguntar por Gabriela"
              web={''}
            />
            <Alojamiento
              name="Apartamentos La Cabaña"
              direction="Av. del Paular, 38, 28740 Rascafría, Madrid"
              phone="669701504"
              description="Preguntar por Brigi"
              web="http://www.rascafria.eu/Apartamento_rural_La_Cabana.html"
            />
            <Alojamiento
              name="Casa Granero"
              direction="C. del Artiñuelo, 4, 28740 Rascafría, Madrid"
              phone="606362561"
              description="Apartamentos y casas rurales"
              web={'http://www.casagranero.com/'}
            />
            <Alojamiento
              name="Caserón de Trastamara"
              direction="Pl. de Trastamara, 11, 28740 Rascafría"
              phone="620233266"
              description="Preguntar por Maribel"
              web={'http://www.caserontrastamara.es'}
            />
            <Alojamiento
              name="El rincón de Rascafría"
              direction="Plaza del Dos de Mayo, 4, 28740 Rascafría"
              phone="682802528 / 918692490"
              description="Hotel rural,llamar de parte de jorge de orador Riveros"
              web={'http://www.hotelelrinconderascafria.com'}
            />
            <Alojamiento
              name="Hotel Los Manzanos"
              direction="Av. del Valle, 50, 28740 Rascafría, Madri"
              phone="620233266"
              description="Preguntar por Maribe"
              web={'http://www.caserontrastamara.es'}
            />
            <Alojamiento
              name="Hotel rural El Valle"
              direction="Av. del Valle, 39, 28740 Rascafría"
              phone="918691213"
              description="Acogedor alojamiento de montaña en Rascafría, que ofrece un trato familiar y un ambiente agradable"
              web={'http://www.hotelruralelvalle.com/'}
            />
            <Alojamiento
              name="Hotel Marcos"
              direction="Av. del Paular, 34, 28740 Rascafría, Madrid"
              phone="659212540"
              description="Habitaciones, dobles, e individuales"
              web={'https://hotelruralmarcos.eatbu.com/'}
            />
            <Alojamiento
              name="Los Espinares"
              direction="Av. de Cascajales, 52, 28740 Rascafría, Madrid"
              phone="609888417"
              description="Un hostal con encanto, con posibilidad de reservar el alojamiento al completo o por habitaciones"
              web={'https://www.losespinares.net/es'}
            />
            <Alojamiento
              name="Alojamientos La Abuela"
              direction="C. de la Rivera del Artiñuelo, 4, 28740 Rascafría"
              phone="646966898"
              description="Complejo rural compuesto por 2 casas rurales con habitaciones independientes"
              web={'https://www.alojamientoslaabuela.com/'}
            />
            <Alojamiento
              name="La Casa del Farmacéutico"
              direction="C. Grande, 16, 28749 Alameda del Valle"
              phone="670750660"
              description="Casa grande de alquiler íntegro"
              web={'https://www.casaruraldelfarmaceutico.es'}
            />
            <Alojamiento
              name="Casa Antigua del Valle"
              direction="Tr.ª del Alamillo, 5, 28749 Alameda del Valle"
              phone="649588981"
              description="Preguntar por Fabiola"
              web={'http://www.casasantiguasdelvalle.es'}
            />
            <Alojamiento
              name="Casa rural El Bosque"
              direction="C. Grande, 3, 28749 Alameda del Valle, Madrid"
              phone="636593914"
              description="Preguntar por Maricarmen"
              web={'http://www.casaruralelbosque.es/'}
            />
            <Alojamiento
              name="El Pajar de Alameda"
              direction="Tr.ª de la Cochera, 11, 28749 Alameda del Valle"
              phone="680217886"
              description="El Pajar de Alameda es una casa rural para alquiler completo en la sierra norte de Madrid"
              web={'https://www.elpajardealameda.com/'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
