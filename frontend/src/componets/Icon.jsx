import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width= {props.width}
      height="auto"
      viewBox="0 0 512 512"
      className="Icon"
    >
      <g>
        <path
          fill="#ffce33"
          d="M512 160v32c0 29.119-19.52 53.76-46.4 61.439C474.881 273.6 480 296.32 480 320c0 44.16-17.92 84.16-46.721 113.279C427.84 438.719 422.08 443.52 416 448v64h-64v-35.201c-10.24 2.24-21.119 3.201-32 3.201H192v32h-64v-45.121c-36.801-16.32-66.561-46.08-82.881-82.879H0V256h45.119c5.441-12.48 12.48-23.68 20.48-34.24L0 156.16C18.561 137.6 43.199 128 67.84 128s49.279 9.6 67.84 28.16l10.561 10.559C160.641 162.24 176 160 192 160h128c52.16 0 98.881 25.279 128 64 17.6 0 32-14.4 32-32v-32z"
        ></path>
        <circle cx="256" cy="352" r="96" fill="#fffa50"></circle>
        <path fill="#ffce33" d="M240 288h32v80h-32zM272 336h32v32h-32z"></path>
        <path
          fill="#ffa65c"
          d="M240 336h32v32h-32zM320 160c0 35.199-28.801 64-64 64s-64-28.801-64-64z"
        ></path>
        <g fill="#fffa50">
          <path d="M320 160H192c0-35.201 28.801-64 64-64s64 28.799 64 64z"></path>
          <circle cx="112" cy="272" r="16"></circle>
          <path d="M208 0h32v64h-32zM272 0h32v64h-32z"></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon;