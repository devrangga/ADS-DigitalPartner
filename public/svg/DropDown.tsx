import React from "react";
type Props = {
  whiteBlue: "white" | "#3366FF" | "#000000";
};

const DropDown: React.FC<Props> = ({ whiteBlue }) => {
  return (
    <svg
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.60156 2.00391L5.12891 5.50391C4.9375 5.66797 4.71875 5.75 4.5 5.75C4.25391 5.75 4.03516 5.66797 3.87109 5.50391L0.398438 2.00391C0.125 1.75781 0.0429688 1.375 0.179688 1.04688C0.316406 0.71875 0.644531 0.5 1 0.5H7.97266C8.32812 0.5 8.62891 0.71875 8.76562 1.04688C8.90234 1.375 8.84766 1.75781 8.60156 2.00391Z"
        fill={whiteBlue}
      />
    </svg>
  );
};

export default DropDown;
