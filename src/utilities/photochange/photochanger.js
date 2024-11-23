import React, { useState, useEffect } from "react";

function PhotoChanger({ images = [], intervalTime }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCycling, setIsCycling] = useState(false);

  useEffect(() => {
    let interval;

    if (isCycling) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < images.length - 1) {
            return prevIndex + 1; // Move to the next image
          } else {
            clearInterval(interval); // Stop cycling at the last image
            return prevIndex;
          }
        });
      }, intervalTime);
    }

    return () => clearInterval(interval);
  }, [isCycling, intervalTime, images.length]);

  const handleMouseEnter = () => {
    setIsCycling(true);
  };

  const handleMouseLeave = () => {
    setIsCycling(false);
    setCurrentIndex(0); // Reset to the first image
  };

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt="cycling photos"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default PhotoChanger;
