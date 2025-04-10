import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header({ section, handleOnClickSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#499495]">
      <div className="flex flex-row justify-center items-center w-full text-[#000000] p-4">
        <div className="md:hidden flex items-center ml-auto">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex flex-row justify-center align-middle gap-6">
          {[
            'Inicio',
            'Nosotros',
            'Horarios',
            'Dónde',
            'Cómo llegar',
            'Alojamientos',
          ].map((item) => (
            <div
              key={item}
              className="flex flex-col align-middle justify-center"
              onClick={() => handleOnClickSection(item)}
            >
              <span
                className={`font-bold cursor-pointer hover:scale-110 ${
                  section === item ? 'underline' : ''
                }`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-[#499495] text-black flex flex-col items-start justify-center gap-6 p-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {[
            'Inicio',
            'Nosotros',
            'Horarios',
            'Dónde',
            'Cómo llegar',
            'Alojamientos',
          ].map((item) => (
            <div
              key={item}
              className="flex flex-col align-middle justify-center w-full"
              onClick={() => {
                handleOnClickSection(item);
                toggleMenu();
              }}
            >
              <span
                className={`font-bold cursor-pointer hover:scale-110 ${
                  section === item ? 'underline' : ''
                }`}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
