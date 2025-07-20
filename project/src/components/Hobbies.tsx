import React, { useEffect, useRef, useState } from 'react';
import { Play, Film, Tv } from 'lucide-react';

const Hobbies = () => {
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
    <section ref={sectionRef} className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Terminal Header */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-t-xl p-4">
            <div className="flex items-center space-x-3">
              <Play className="text-cyan-400" size={24} />
              <span className="text-gray-400 font-mono text-sm">$ ps aux | grep "suspense_series"</span>
            </div>
          </div>
          
          {/* Content Card */}
          <div className="bg-gray-800/90 backdrop-blur-sm border-x border-b border-gray-700 rounded-b-xl p-8 shadow-2xl shadow-cyan-400/10">
            <div className="space-y-8">
              {/* Process Output */}
              <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="font-mono text-sm space-y-2">
                  <div className="grid grid-cols-6 gap-4 text-gray-400 border-b border-gray-600 pb-2">
                    <span>USER</span>
                    <span>PID</span>
                    <span>%CPU</span>
                    <span>%MEM</span>
                    <span>TIME</span>
                    <span>COMMAND</span>
                  </div>
                  <div className="grid grid-cols-6 gap-4 text-green-400">
                    <span>gaurav</span>
                    <span>1337</span>
                    <span>95.8</span>
                    <span>12.3</span>
                    <span>24:07</span>
                    <span>binge-watch.sh</span>
                  </div>
                </div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-transparent"></div>
              
              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 hover:scale-105 transition-transform duration-500 cursor-pointer">
                {/* Text Content */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      Beyond the Terminal
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      When I'm not debugging infrastructure or optimizing pipelines, you'll find me 
                      immersed in the world of <span className="text-cyan-400 font-semibold">suspense movies and thriller series</span>.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-400/20">
                    <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                      "They keep my mind sharp, just like debugging! There's something about unraveling 
                      complex plots that mirrors the satisfaction of solving system issues. Both require 
                      patience, attention to detail, and the ability to connect seemingly unrelated clues."
                    </blockquote>
                    <div className="mt-4 text-purple-400 font-semibold">— Gaurav's Philosophy</div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cyan-400">Why Suspense & DevOps Go Hand in Hand</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Pattern Recognition</div>
                          <div className="text-gray-400 text-sm">Spotting clues in plots = Finding system bottlenecks</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Problem Solving</div>
                          <div className="text-gray-400 text-sm">Unraveling mysteries = Debugging complex issues</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Attention to Detail</div>
                          <div className="text-gray-400 text-sm">Missing plot points = Missing log entries</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Patience & Persistence</div>
                          <div className="text-gray-400 text-sm">Long series = Long debugging sessions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual Elements */}
                <div className="space-y-6">
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <Film className="text-cyan-400" size={24} />
                      <h4 className="text-lg font-semibold text-white">Favorite Genres</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Psychological Thrillers</span>
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Crime Mysteries</span>
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Sci-Fi Suspense</span>
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-gradient-to-r from-green-400 to-cyan-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
                    <div className="flex items-center space-x-3 mb-4">
                      <Tv className="text-purple-400" size={24} />
                      <h4 className="text-lg font-semibold text-white">Current Status</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Currently Watching:</span>
                        <span className="text-cyan-400">Mind-bending thrillers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Binge Level:</span>
                        <span className="text-green-400">Expert</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Plot Prediction:</span>
                        <span className="text-purple-400">85% Accuracy</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Terminal Output */}
              <div className="font-mono text-sm space-y-1 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                <div className="text-cyan-400">$ echo "Currently watching: Mind-bending thrillers"</div>
                <div className="text-green-400">Currently watching: Mind-bending thrillers</div>
                <div className="text-gray-400">Process status: Running continuously</div>
                <div className="text-yellow-400">Next episode: Queued for deployment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;