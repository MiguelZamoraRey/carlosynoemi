interface HourCardProps {
  title: string;
  subtitle1: string;
  imageUrl: string;
  description: string;
  link?: string;
}

function HourCard({ title, subtitle1, imageUrl, description }: HourCardProps) {
  return (
    <div className="classCard relative h-[15em] sm:h-[25em] border-white rounded-lg">
      {' '}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />{' '}
      <div className="absolute bottom-0 left-0 text-left text-white w-full bg-gradient-to-t from-black to-transparent rounded-lg p-2">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{subtitle1}</p>
        <p className="text-sm mb-2">{description}</p>
      </div>
    </div>
  );
}

export default HourCard;
