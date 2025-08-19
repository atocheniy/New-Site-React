import React from "react";
import { useState, useEffect, useRef } from "react";
import '../styles/card.css'

function Card({ name, children }) {

    const cardRef = useRef(null);
    const [style, setStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg) scale(1)' });
    const [glowStyle, setGlowStyle] = useState({});

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;

        const rotateX = (+15 * mouseY / (rect.height / 2)).toFixed(2);
        const rotateY = (-15 * mouseX / (rect.width / 2)).toFixed(2);

        setGlowStyle({
            background: `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(2, 107, 74, 0.3), rgba(23, 23, 23, 0.512)`
        });

        setStyle({
    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1) translateY(-20px)`
});

    };

    const handleMouseLeave = () => {
        setStyle({ transform: 'rotateX(0deg) rotateY(0deg) scale(1)', transition: 'transform 0.3s ease' });
        setGlowStyle({ background: 'rgba(23, 23, 23, 0.512)' });
    };

  return (
        <div
            className="cardContainer"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...style, ...glowStyle }}
        >
            <label>{name}</label>
            <div className="cardDiv">
                {children}
            </div>
        </div>
    );
}

export default Card;