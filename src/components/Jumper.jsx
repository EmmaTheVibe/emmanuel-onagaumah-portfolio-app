export default function Jumper({ theme }) {
  return (
    <span className="jumper-span">
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        className="jumper-svg"
      >
        <path
          className="jumper"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
        />
        <g stroke={theme === "light" ? "#edd9be" : "#0c0605"} strokeWidth="1">
          <ellipse
            className="circleL"
            fill="none"
            strokeMiterlimit="10"
            cx="47.2"
            cy="95.6"
            rx="10.7"
            ry="2.7"
          />
          <ellipse
            className="circleR"
            fill="none"
            strokeMiterlimit="10"
            cx="136.2"
            cy="95.6"
            rx="10.7"
            ry="2.7"
          />
        </g>
        <path
          className="jumper clone"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
        />
      </svg>
    </span>
  );
}
