import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import Moon from './Moon';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <Moon />
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Terminal Header */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-t-xl p-4">
            <div className="flex items-center space-x-3">
              <GraduationCap className="text-cyan-400" size={24} />
              <span className="text-gray-400 font-mono text-sm">$ cat education.txt</span>
            </div>
          </div>
          
          {/* Content Card */}
          <div className="bg-gray-800/90 backdrop-blur-sm border-x border-b border-gray-700 rounded-b-xl p-8 shadow-2xl shadow-cyan-400/10">
            <div className="space-y-8">
              {/* Education Entry */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20 hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Bachelor of Engineering in Computer Engineering
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-cyan-400">
                        <GraduationCap size={18} />
                        <span className="text-lg">Savitribai Phule Pune University</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <MapPin size={16} />
                        <span>AISSMS IOIT, Pune, Maharashtra</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar size={16} />
                        <span>Completed: 2024</span>
                      </div>
                    </div>
                  </div>
                  

                </div>
                
                <div className="h-px bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-transparent mb-6"></div>
                
                {/* Academic Focus Areas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Core Subjects</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">Software Engineering</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Computer Networks</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Operating Systems</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Database Management</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">Specialized Learning</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Cloud Computing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-gray-300">System Design</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span className="text-gray-300">DevOps Practices</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        <span className="text-gray-300">Software Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Academic Achievements */}
                <div className="mt-6 p-4 bg-gray-900/30 rounded-lg border border-gray-700">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Academic Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">Strong</div>
                      <div className="text-gray-400 text-sm">Programming Foundation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">Active</div>
                      <div className="text-gray-400 text-sm">Project Participation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">Focused</div>
                      <div className="text-gray-400 text-sm">DevOps Learning</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Terminal Output */}
              <div className="font-mono text-sm space-y-1">
                <div className="text-green-400">File contents displayed successfully.</div>
                <div className="text-cyan-400">Learning trajectory: Accelerating</div>
                <div className="text-purple-400">Focus area: DevOps & Cloud Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;