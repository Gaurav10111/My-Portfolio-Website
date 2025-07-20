import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const stages = ['Code', 'Build', 'Test', 'Deploy'];
  const stageColors = ['#34d1ee', '#f59e0b', '#10b981', '#8b5cf6'];

  useEffect(() => {
    // Cycle through stages
    const stageInterval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % stages.length);
    }, 1000);

    // Hide loading after 4 seconds (one complete cycle)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearInterval(stageInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 z-50 flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Main Loading Circle */}
        <div className="relative mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 border-4 border-gray-700 rounded-full relative"
          >
            {/* Animated border */}
            <motion.div
              animate={{ 
                background: `conic-gradient(from 0deg, ${stageColors[currentStage]}, transparent 60deg, transparent 360deg)` 
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-full"
              style={{
                mask: 'radial-gradient(circle at center, transparent 60%, black 61%)',
                WebkitMask: 'radial-gradient(circle at center, transparent 60%, black 61%)'
              }}
            />
            
            {/* Inner circle */}
            <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                    style={{ color: stageColors[currentStage] }}
                  >
                    {stages[currentStage]}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-mono">
                    {currentStage === 0 && 'Writing code...'}
                    {currentStage === 1 && 'Building image...'}
                    {currentStage === 2 && 'Running tests...'}
                    {currentStage === 3 && 'Deploying...'}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Orbiting dots */}
          {stages.map((stage, index) => (
            <motion.div
              key={stage}
              animate={{ 
                rotate: [0, 360],
                scale: currentStage === index ? [1, 1.2, 1] : 1
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "linear",
                scale: { duration: 0.5, repeat: Infinity }
              }}
              className="absolute inset-0"
            >
              <div
                className="absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: '50%',
                  top: '0%',
                  backgroundColor: stageColors[index],
                  boxShadow: `0 0 10px ${stageColors[index]}40`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gaurav Patil
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Initializing DevOps Portfolio...
          </p>
          
          {/* Progress Bar */}
          <div className="w-64 sm:w-80 lg:w-96 mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"
            />
          </div>
        </motion.div>

        {/* Floating Elements */}
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
          className="absolute -top-8 -left-8 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
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
          className="absolute -bottom-8 -right-8 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"
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
          className="absolute top-1/2 -left-12 w-1 h-1 bg-pink-400 rounded-full opacity-60"
        />
      </div>
    </div>
  );
};

export default Loading; 