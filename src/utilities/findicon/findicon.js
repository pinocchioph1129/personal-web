import React from "react";
import icons from "@iconify-json/unjs/icons.json";

function FindIcon({ text }) {
  const iconName = text; // Replace with a valid icon name from the UnJS set
  const icon = icons.icons[iconName];

  if (!icon) {
    return <p>Icon not found</p>;
  }

  const svgPath = icon.body;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${icon.width || 24} ${icon.height || 24}`} // Default to 24x24 if dimensions are missing
      width="50"
      height="50"
    >
      <path d={svgPath} />
    </svg>
  );
}

export default FindIcon;
