import { useState } from 'react';

export default function Header({ section, handleOnClickSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0">
      <div className="flex flex-row justify-center items-center min-w-full bg-[#d8d5be] text-[#397374] p-4">
        <div className="flex flex-row w-full justify-end md:w-0">
          <button
            className="md:hidden text-[#397374] focus:outline-none justify-end "
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
        <div className="md:hidden fixed inset-0 bg-[#d8d5be] text-[#397374] flex flex-col items-center justify-center gap-6">
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
        </div>
      )}
    </div>
  );
}
