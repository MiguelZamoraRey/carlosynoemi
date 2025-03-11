interface CardProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  imageUrl: string;
  description: string;
  link?: string;
}

function Card({
  title,
  subtitle1,
  subtitle2,
  imageUrl,
  description,
  link,
}: CardProps) {
  return (
    <div className=" customCard relative h-[15em] sm:h-[25em] border-[#d8d5be] rounded-lg">
      {' '}
      <img
        src={imageUrl}
        alt={title}
        className="w-[80%] h-full object-cover rounded-lg"
      />{' '}
      <div className="absolute bottom-0 left-0 text-left text-[#d8d5be] w-[80%] bg-gradient-to-t from-black to-transparent rounded-lg p-2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{subtitle1}</p>
        <p className="text-sm">{subtitle2}</p>
        <p className="text-sm mb-2">{description}</p>
        {link && (
          <button
            className="p-2 bg-[#d8d5be] rounded-lg text-[#1e1e1e]"
            onClick={() => window.open(link)}
          >
            Ver más información
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
