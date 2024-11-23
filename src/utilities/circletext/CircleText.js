import React from "react";
import "./CircleText.css";

function CircleText({ text, radius }) {
  const letters = text.split(""); // Split text into individual characters
  const angleStep = 360 / letters.length; // Calculate the angle for each character

  return (
    <div
      className="circle-text-container"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          className="circle-char"
          style={{
            transform: `rotate(${
              i * angleStep
            }deg) translate(${radius}px) rotate(${90}deg)`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default CircleText;
