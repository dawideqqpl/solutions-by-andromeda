// src/components/Cursor.jsx

import React, { useState, useEffect } from 'react'; // 1. Dodaj useState i useEffect
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const Cursor = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false); // 2. Dodaj stan do śledzenia najechania

  // 3. Efekt do dodawania i usuwania nasłuchiwania na zdarzenia
  useEffect(() => {
    const handleMouseOver = (e) => {
      // Sprawdzamy, czy element to przycisk, link lub ma atrybut 'role=button'
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('[role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('[role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);


  // 4. Warianty dla animacji - jeden normalny, drugi powiększony
  const variants = {
    default: {
      x: x - 12, 
      y: y - 12,
      height: 24,
      width: 24,
      background: "radial-gradient(circle, rgba(170, 130, 255, 0.5) 0%, rgba(170, 130, 255, 0) 60%)",
      mixBlendMode: 'difference',
    },
    hover: {
      x: x - 32,
      y: y - 32,
      height: 64,
      width: 64,
      background: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: 'difference',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      variants={variants}
      animate={isHovering ? "hover" : "default"} // 5. Zmieniaj animację w zależności od stanu
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
        mass: 0.1,
      }}
    />
  );
};

export default Cursor;