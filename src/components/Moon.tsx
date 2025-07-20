import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Moon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
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

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 100 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute right-8 sm:right-16 lg:right-20 top-1/4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 z-10"
      >
        {/* Moon Body */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Main Moon */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-200 via-gray-100 to-white relative">
            {/* Moon Craters */}
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-gray-300/40 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gray-300/50 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gray-300/60 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gray-300/70 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-gray-300/45 rounded-full"></div>
            
            {/* Moon Surface Texture */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-200/80 to-white/90 opacity-70"></div>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-gray-200/20 blur-xl animate-pulse"></div>
          </div>

          {/* Moon Glow Rings */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-gray-200/10 blur-lg"
          />
          <motion.div
            animate={{
              scale: [1.1, 1.2, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white/15 to-gray-200/5 blur-xl"
          />
        </motion.div>

        {/* Floating Stars Around Moon */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-4 -left-4 w-2 h-2 bg-white/80 rounded-full"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-3 -right-3 w-1.5 h-1.5 bg-gray-300/90 rounded-full"
        />
        <motion.div
          animate={{
            y: [-8, 12, -8],
            x: [-8, 8, -8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 -left-6 w-1 h-1 bg-white/70 rounded-full"
        />

        {/* Scroll-based Moon Movement */}
        <motion.div
          animate={{
            y: scrollProgress * -50,
            opacity: 1 - scrollProgress * 0.5,
          }}
          transition={{ duration: 0.1 }}
          className="absolute inset-0"
        >
          {/* Additional glow that fades with scroll */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-white/25 to-gray-200/15 blur-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.5 }}
        className="absolute right-16 top-1/4 w-40 h-40 bg-gradient-to-r from-white/10 via-gray-200/15 to-gray-300/10 rounded-full blur-3xl"
      />
    </div>
  );
};

export default Moon; 