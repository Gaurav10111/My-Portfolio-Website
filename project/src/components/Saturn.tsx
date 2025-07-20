import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Saturn = () => {
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
        initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
        animate={isVisible ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.3, rotate: -45 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute left-4 sm:left-8 lg:left-10 top-1/3 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 z-10"
      >
        {/* Saturn Planet */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Planet Body */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-amber-500 relative">
            {/* Planet Surface Details */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-300/30 to-amber-600/30 opacity-60"></div>
            <div className="absolute top-1/4 left-1/4 w-8 h-2 bg-orange-600/40 rounded-full transform rotate-12"></div>
            <div className="absolute top-1/2 right-1/3 w-6 h-1.5 bg-amber-600/40 rounded-full transform -rotate-6"></div>
            <div className="absolute bottom-1/3 left-1/3 w-4 h-1 bg-orange-500/40 rounded-full transform rotate-45"></div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-500/20 blur-xl animate-pulse"></div>
          </div>

          {/* Saturn Rings */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-8"
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-orange-300/60 transform rotate-15"></div>
            {/* Middle Ring */}
            <div className="absolute inset-2 rounded-full border-3 border-yellow-300/80 transform -rotate-5"></div>
            {/* Inner Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-amber-200/90 transform rotate-10"></div>
            {/* Ring Shadows */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-800/40 transform rotate-15"></div>
          </motion.div>

          {/* Ring Glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-12 bg-gradient-to-r from-yellow-400/20 via-orange-400/30 to-amber-500/20 rounded-full blur-lg"
          />
        </motion.div>

        {/* Floating Space Debris */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-8 -right-4 w-3 h-3 bg-yellow-300/60 rounded-full"
        />
        <motion.div
          animate={{
            y: [15, -15, 15],
            x: [5, -5, 5],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-6 -left-6 w-2 h-2 bg-orange-400/70 rounded-full"
        />
        <motion.div
          animate={{
            y: [-10, 25, -10],
            x: [-15, 5, -15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-amber-300/80 rounded-full"
        />

        {/* Background Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="absolute left-0 top-1/3 w-48 h-48 bg-gradient-to-r from-yellow-400/10 via-orange-400/15 to-amber-500/10 rounded-full blur-3xl"
        />
      </motion.div>
    </div>
  );
};

export default Saturn; 