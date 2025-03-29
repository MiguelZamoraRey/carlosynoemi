export default function Header({ section, handleOnClickSection }) {
  return (
    <div className="sticky top-0">
      <div className="flex flex-row justify-center align-middle gap-6 min-w-[100vw] sm:min-w-[900px] max-w-[900px] min-h-[10dvh] bg-[#d8d5be] text-[#397374]">
        <div
          className="flex flex-col align-middle justify-center"
          onClick={() => handleOnClickSection('Inicio')}
        >
          <span
            className={`font-bold cursor-pointer hover:scale-110 ${
              section == 'Inicio' ? 'underline' : ''
            }`}
          >
            Inicio
          </span>
        </div>
        <div
          className="flex flex-col align-middle justify-center"
          onClick={() => handleOnClickSection('Nosotros')}
        >
          <span
            className={`font-bold cursor-pointer hover:scale-110 ${
              section == 'Nosotros' ? 'underline' : ''
            }`}
          >
            Nosotros{' '}
          </span>
        </div>
        <div
          className="flex flex-col align-middle justify-center"
          onClick={() => handleOnClickSection('Horarios')}
        >
          <span
            className={`font-bold cursor-pointer hover:scale-110 ${
              section == 'Horarios' ? 'underline' : ''
            }`}
          >
            Horarios{' '}
          </span>
        </div>
        <div
          className="flex flex-col align-middle justify-center"
          onClick={() => handleOnClickSection('Dónde')}
        >
          <span
            className={`font-bold cursor-pointer hover:scale-110 ${
              section == 'Dónde' ? 'underline' : ''
            }`}
          >
            Dónde{' '}
          </span>
        </div>
        <div
          className="flex flex-col align-middle justify-center"
          onClick={() => handleOnClickSection('Cómo llegar')}
        >
          <span
            className={`font-bold cursor-pointer hover:scale-110 ${
              section == 'Cómo llegar' ? 'underline' : ''
            }`}
          >
            Cómo llegar
          </span>
        </div>
        <div
          className="flex flex-col align-middle justify-center"
          onClick={() => handleOnClickSection('Alojamientos')}
        >
          <span
            className={`font-bold cursor-pointer hover:scale-110 ${
              section == 'Alojamientos' ? 'underline' : ''
            }`}
          >
            Alojamientos{' '}
          </span>
        </div>
      </div>
    </div>
  );
}
