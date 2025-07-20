import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-2xl shadow-cyan-400/10">
          <div className="text-center space-y-8">
            {/* Terminal Commands */}
            <div className="space-y-4">
              <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700">
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-purple-400">gaurav@devops</span>
                    <span className="text-white">:</span>
                    <span className="text-yellow-400">~</span>
                    <span className="text-white">$ sudo rm -rf self-doubt</span>
                  </div>
                  <div className="text-green-400">self-doubt: removed successfully ✓</div>
                </div>
              </div>
              
              <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700">
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-purple-400">gaurav@devops</span>
                    <span className="text-white">:</span>
                    <span className="text-yellow-400">~</span>
                    <span className="text-white">$ echo "Thanks for visiting!"</span>
                  </div>
                  <div className="text-green-400">Thanks for visiting! 🚀</div>
                </div>
              </div>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            
            {/* Footer Content */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <span>Built with</span>
                <Heart className="text-red-400 animate-pulse" size={16} />
                <span>using</span>
                <Code className="text-cyan-400" size={16} />
                <span>React & Tailwind CSS</span>
              </div>
              
              <div className="text-gray-400 text-sm space-y-2">
                <p>© 2025 Gaurav Patil • DevOps Learner & Technical Intern</p>
                <p className="flex items-center justify-center space-x-2">
                  <span>Deployed on the cloud</span>
                  <span className="text-cyan-400">☁️</span>
                  <span>•</span>
                  <span>Powered by</span>
                  <Coffee className="text-yellow-600" size={16} />
                  <span>and passion</span>
                </p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-xs font-mono space-y-1 text-gray-500">
                  <div className="text-cyan-400 mb-2">"Infrastructure as Code, Dreams as Reality"</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center">
                    <div>
                      <span className="text-green-400">System uptime:</span> ∞ days
                    </div>
                    <div>
                      <span className="text-purple-400">Last deployment:</span> Always improving
                    </div>
                    <div>
                      <span className="text-yellow-400">Status:</span> Ready for production 🚀
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Final Terminal Prompt */}
            <div className="bg-gray-800/80 rounded-lg p-3 border border-gray-700">
              <div className="font-mono text-sm text-gray-400">
                <span className="text-purple-400">gaurav@devops</span>
                <span className="text-white">:</span>
                <span className="text-yellow-400">~</span>
                <span className="text-white">$ _</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;