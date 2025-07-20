import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Astronaut = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 100 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-4 sm:right-8 lg:right-10 top-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 z-10"
      >
        {/* Astronaut SVG */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 0 30px rgba(34, 211, 238, 0.5))' }}
        >
          {/* Helmet */}
          <ellipse
            cx="50"
            cy="35"
            rx="25"
            ry="30"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />
          
          {/* Helmet Visor */}
          <ellipse
            cx="50"
            cy="35"
            rx="20"
            ry="25"
            fill="none"
            stroke="#34d1ee"
            strokeWidth="1"
            opacity="0.6"
          />
          
          {/* Body */}
          <rect
            x="40"
            y="60"
            width="20"
            height="25"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />
          
          {/* Arms */}
          <line
            x1="35"
            y1="65"
            x2="25"
            y2="75"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />
          <line
            x1="65"
            y1="65"
            x2="75"
            y2="75"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />
          
          {/* Legs */}
          <line
            x1="45"
            y1="85"
            x2="40"
            y2="95"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />
          <line
            x1="55"
            y1="85"
            x2="60"
            y2="95"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />
          
          {/* Oxygen Tank */}
          <circle
            cx="75"
            cy="70"
            r="8"
            fill="none"
            stroke="#34d1ee"
            strokeWidth="2"
            opacity="0.6"
          />
          
          {/* Oxygen Tube */}
          <path
            d="M 67 70 Q 60 65 50 65"
            fill="none"
            stroke="#34d1ee"
            strokeWidth="1"
            opacity="0.6"
          />
          
          {/* Glowing Effect */}
          <circle
            cx="50"
            cy="35"
            r="30"
            fill="none"
            stroke="#34d1ee"
            strokeWidth="1"
            opacity="0.2"
            className="animate-pulse"
          />
        </svg>
        
        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-2 -right-2 w-1 h-1 bg-purple-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            y: [-5, 15, -5],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 -left-4 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-60"
        />
      </motion.div>
      
              {/* Enhanced Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute right-8 top-1/4 w-48 h-48 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-6 top-1/4 w-44 h-44 bg-gradient-to-r from-cyan-400/15 to-purple-400/15 rounded-full blur-2xl"
        />
    </div>
  );
};

export default Astronaut; 