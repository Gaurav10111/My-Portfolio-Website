import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, User } from 'lucide-react';

const Hero = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const commands = [
    'echo "Gaurav Patil – DevOps Learner"',
    'sudo apt-get install job-offer',
    'curl -O gaurav_resume.pdf'
  ];

  useEffect(() => {
    const command = commands[currentCommand];
    let index = 0;
    
    const typeCommand = () => {
      if (index <= command.length) {
        setTypedText(command.slice(0, index));
        index++;
        setTimeout(typeCommand, 80);
      } else {
        setTimeout(() => {
          setCurrentCommand((prev) => (prev + 1) % commands.length);
          setTypedText('');
        }, 2000);
      }
    };

    typeCommand();
  }, [currentCommand]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* CI/CD Pipeline Animation */}
      <div className="absolute top-10 sm:top-20 w-full max-w-5xl z-10 px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {['Code', 'Build', 'Test', 'Deploy'].map((stage, index) => (
            <div key={stage} className="flex items-center">
              <div className="relative group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-cyan-400 flex items-center justify-center text-xs sm:text-sm font-bold bg-gray-800/80 backdrop-blur-sm shadow-lg shadow-cyan-400/20 group-hover:shadow-cyan-400/40 transition-all duration-300">
                  <span className="text-cyan-400">{stage}</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-75"></div>
                {index < 3 && (
                  <ArrowRight className="absolute -right-3 sm:-right-4 lg:-right-6 top-1/2 transform -translate-y-1/2 text-cyan-400 animate-pulse w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl w-full z-20 mt-20 sm:mt-24 lg:mt-32 px-4">
        {/* Profile Section */}
        <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6">
          <div className="relative group">
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-1 shadow-2xl shadow-cyan-400/30 hover:scale-110 transition-transform duration-500">
              <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                <img 
                  src="/myimage (3).jpeg" 
                  alt="Gaurav Patil" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 animate-pulse"></div>
          </div>
          
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gaurav Patil
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6">
              DevOps Learner & Technical Intern
            </p>
            <p className="text-sm sm:text-base text-gray-400 max-w-md">
              Passionate about automation, infrastructure, and building scalable solutions 
              that bridge development and operations.
            </p>
          </div>
        </div>

        {/* Terminal Section */}
        <div className="w-full">
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl shadow-cyan-400/10 overflow-hidden">
            <div className="bg-gray-800 px-4 sm:px-6 py-3 flex items-center space-x-3 border-b border-gray-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-xs sm:text-sm ml-4 font-mono">gaurav@devops-terminal</span>
            </div>
            
            <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
              <div className="font-mono text-cyan-400 text-sm sm:text-base">
                <span className="text-purple-400">gaurav@devops</span>
                <span className="text-white">:</span>
                <span className="text-yellow-400">~</span>
                <span className="text-white">$ </span>
                <span className="text-green-400">{typedText}</span>
                <span className={`inline-block w-2 h-5 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
              </div>
              
              <div className="space-y-2 sm:space-y-3 text-gray-300 font-mono text-xs sm:text-sm">
                <div className="text-green-400">✓ DevOps tools: learning in progress...</div>
                <div className="text-yellow-400">⚡ Infrastructure automation: enabled</div>
                <div className="text-cyan-400">🚀 Deployment pipeline: optimized</div>
              </div>
              
              <a 
                href="https://drive.google.com/file/d/1YwfnFktCEcv0VH08iTiaG9BykIrQz-qV/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 flex items-center space-x-3 inline-block text-sm sm:text-base"
              >
                <Download size={18} className="sm:w-5 sm:h-5" />
                <span>Download Resume</span>
                <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                  <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Command Elements */}
      <div className="absolute top-1/3 left-10 text-gray-600/50 text-sm font-mono animate-pulse hidden lg:block">
        $ docker ps -a
      </div>
      <div className="absolute bottom-1/3 right-10 text-gray-600/50 text-sm font-mono animate-pulse hidden lg:block">
        $ kubectl get nodes
      </div>
    </section>
  );
};

export default Hero;