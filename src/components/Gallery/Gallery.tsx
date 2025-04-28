interface HouseIconProps {
  imgs?: Array<string>;
}

function Gallery({ imgs }: HouseIconProps) {
  return (
    <div className="flex flex-row max-w-[100dvw] overflow-x-scroll md:overflow-x-hidden">
      {imgs.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery image ${index + 1}`}
          className="w-[1/6] h-auto object-cover"
        />
      ))}
    </div>
  );
}

export default Gallery;
