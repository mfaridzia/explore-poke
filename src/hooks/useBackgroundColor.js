import ColorThief from "colorthief";
import { useEffect, useState } from "react";

const useBackgroundColor = (imgUrl) => {
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    const image = new Image();
    image.src = imgUrl;
    image.crossOrigin = "Anonymous";

    image.onload = function () {
      const colorThief = new ColorThief();
      const palettes = colorThief.getPalette(this, 10);

      setBackgroundColor(palettes.map((color) => {
        return `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
      })[0]);
    };
  }, [imgUrl]);

  return { 
    backgroundColor
  };
};

export default useBackgroundColor;