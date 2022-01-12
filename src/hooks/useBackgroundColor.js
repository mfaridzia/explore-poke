import { useEffect, useState } from "react";
import ColorThief from "colorthief";

export default function useBackgroundColor(imgUrl) {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const image = new Image();
    image.src = imgUrl;
    image.crossOrigin = "Anonymous";

    image.onload = function () {
      const colorThief = new ColorThief();
      const colorPalette = colorThief.getPalette(this, 10);
      console.log("COLOR", colorPalette);

      setBackgroundColor(colorPalette.map((color) => {
        return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
      })[0]);
    };
  }, [imgUrl]);

  return { 
    backgroundColor
  };
}