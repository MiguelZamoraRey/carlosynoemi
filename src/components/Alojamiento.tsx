import CommentIcon from './iconos/CommentIcon';
import PhoneIcon from './iconos/PhoneIcon';
import PlaceIcon from './iconos/PlaceIcon';
import WebIcon from './iconos/WebIcon';

interface AlojamientoProps {
  name: string;
  direction: string;
  phone: string;
  web: string;
  description: string;
}

function Alojamiento({
  name,
  direction,
  phone,
  web,
  description,
}: AlojamientoProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center relative min-h-[15em] border-[#d8d5be] rounded-lg min-w-[50%] p-4">
      <h2 className="text-2xl">{name}</h2>
      <div className="flex flex-row w-full justify-start items-center gap-2">
        <div className="bg-[#397374] rounded-full p-2">
          <PlaceIcon color="#fffff0" />{' '}
        </div>{' '}
        <span>{direction}</span>
      </div>
      <div className="flex flex-row w-full justify-start items-center gap-2">
        <div className="bg-[#397374] rounded-full p-2">
          <PhoneIcon color="#fffff0" />
        </div>{' '}
        <span>{phone}</span>
      </div>
      <div className="flex flex-row w-full justify-start items-center gap-2">
        <div className="bg-[#397374] rounded-full p-2">
          {' '}
          <WebIcon color="#fffff0" />
        </div>{' '}
        <span>
          Mira la web desde{' '}
          <a href={web} className="underline" target="_blank">
            aqui
          </a>
        </span>
      </div>
      <div className="flex flex-row w-full justify-start items-center gap-2">
        <div className="bg-[#397374] rounded-full p-2">
          {' '}
          <CommentIcon color="#fffff0" />
        </div>{' '}
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
}

export default Alojamiento;
