interface HouseIconProps {
  color?: string;
  width?: string;
  height?: string;
}

function CupIcon({
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
        d="M3.03919 4.2939C3.01449 4.10866 3.0791 3.92338 3.23133 3.81499C3.9272 3.31953 6.3142 2 12 2C17.6858 2 20.0728 3.31952 20.7687 3.81499C20.9209 3.92338 20.9855 4.10866 20.9608 4.2939L19.2616 17.0378C19.0968 18.2744 18.3644 19.3632 17.2813 19.9821L16.9614 20.1649C13.8871 21.9217 10.1129 21.9217 7.03861 20.1649L6.71873 19.9821C5.6356 19.3632 4.90325 18.2744 4.73838 17.0378L3.03919 4.2939Z"
        stroke={color}
        strokeWidth="1.5"
      ></path>
      <path
        d="M3 5C5.57143 7.66666 18.4286 7.66662 21 5"
        stroke={color}
        strokeWidth="1.5"
      ></path>
      <path
        d="M4 13C5.03151 14.2034 7.92505 14.8638 11 14.981C14.7388 15.1236 18.7458 14.4632 20 13"
        stroke={color}
        strokeWidth="1.5"
      ></path>
      <path d="M15 14.823V20.5" stroke={color} strokeWidth="1.5"></path>
      <path
        d="M4 13C6.28571 10.3333 17.7143 10.3334 20 13"
        stroke={color}
        strokeWidth="1.5"
      ></path>
    </svg>
  );
}

export default CupIcon;
