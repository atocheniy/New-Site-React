import React, { useState, useEffect, useRef } from 'react';
import ColorThief from 'colorthief';
import '../styles/avatar.css';

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  let r, g, b;
  h /= 360;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


function Avatar() {

  const [accentColor, setAccentColor] = useState('rgb(0, 255, 34)');
  const imgRef = useRef(null);

  const imageUrl = "https://avatars.githubusercontent.com/u/155244188?v=4";

  useEffect(() => {
    const img = imgRef.current;

    const handleImageLoad = () => {
      const colorThief = new ColorThief();
      try {
        const dominantColor = colorThief.getColor(img);
        
        let [h, s, l] = rgbToHsl(...dominantColor);
        s = Math.min(1, s * 1.4); 
        l = Math.max(0.5, l);

        const vibrantRgb = hslToRgb(h, s, l);
        
        setAccentColor(`rgb(${vibrantRgb.join(',')})`);

      } catch (error) {
        console.error('Ошибка при получении доминирующего цвета:', error);
        setAccentColor('rgb(0, 255, 34)');
      }
    };

    if (img.complete) {
      handleImageLoad();
    } else {
      img.addEventListener('load', handleImageLoad);
    }

    return () => {
      img.removeEventListener('load', handleImageLoad);
    };
  }, []);

  const shadowColor = accentColor.replace('rgb', 'rgba').replace(')', ', 0.45)'); 
  const innerShadowColor = accentColor.replace('rgb', 'rgba').replace(')', ', 0.6)'); 

  const containerStyle = {
    border: `6px solid ${accentColor}`,
    boxShadow: `0 0 250px ${shadowColor}, 0 0 50px ${innerShadowColor}`,
  };

  return (
    <div className='avatarContainer' style={containerStyle}>
      {}
      <img
        id="image"
        ref={imgRef}
        src={imageUrl}
        alt="avatar"
        crossOrigin="anonymous"
      ></img>
    </div>
  );
}

export default Avatar;