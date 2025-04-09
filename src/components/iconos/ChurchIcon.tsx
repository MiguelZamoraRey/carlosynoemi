interface HouseIconProps {
  color?: string;
  width?: string;
  height?: string;
}

function ChurchIcon({
  color = '#000000',
  width = '24px',
  height = '24px',
}: HouseIconProps) {
  return (
    <svg
      width={width}
      height={height}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
    >
      <path
        d="M12 6L4.282 10.8237C4.10657 10.9334 4 11.1257 4 11.3325V21.4C4 21.7314 4.26863 22 4.6 22H12M12 6L19.718 10.8237C19.8934 10.9334 20 11.1257 20 11.3325V21.4C20 21.7314 19.7314 22 19.4 22H12M12 6V4M12 2V4M10 4H12M12 4H14M12 22V17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16 17.01L16.01 16.9989"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16 13.01L16.01 12.9989"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 13.01L12.01 12.9989"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8 13.01L8.01 12.9989"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8 17.01L8.01 16.9989"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export default ChurchIcon;
