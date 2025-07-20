import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'lucide-react';

const About = () => {
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
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Terminal Header */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-t-xl p-4">
            <div className="flex items-center space-x-3">
              <Terminal className="text-cyan-400" size={24} />
              <span className="text-gray-400 font-mono text-sm">$ whoami</span>
            </div>
          </div>
          
          {/* Content Card */}
          <div className="bg-gray-800/90 backdrop-blur-sm border-x border-b border-gray-700 rounded-b-xl p-8 shadow-2xl shadow-cyan-400/10 hover:scale-105 transition-transform duration-500 cursor-pointer">
            <div className="space-y-6">
              <div className="font-mono text-green-400 text-lg">
                gaurav_patil
              </div>
              
              <div className="h-px bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-transparent"></div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="text-cyan-400 font-semibold">DevOps learner</span> on 
                  an exciting journey of mastering the art of automation, infrastructure management, 
                  and continuous delivery.
                </p>
                
                <p>
                  My fascination with DevOps stems from its power to bridge the gap between development 
                  and operations, creating seamless workflows that enable teams to deliver software 
                  faster and more reliably. I'm constantly exploring new tools and methodologies 
                  that make deployment pipelines more efficient and infrastructure more resilient.
                </p>
                
                <p>
                  Currently diving deep into containerization with <span className="text-blue-400">Docker</span>, 
                  orchestration with <span className="text-purple-400">Kubernetes</span>, infrastructure 
                  as code with <span className="text-yellow-400">Terraform</span>, and automation 
                  with <span className="text-red-400">Ansible</span>. Every day brings new challenges 
                  and opportunities to learn something that makes systems more robust and scalable.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 font-mono text-sm mb-2">Focus Areas</div>
                  <div className="text-gray-300 text-sm">CI/CD Pipelines, Infrastructure Automation</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-purple-400 font-mono text-sm mb-2">Learning Path</div>
                  <div className="text-gray-300 text-sm">Cloud Platforms, Container Orchestration</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="text-yellow-400 font-mono text-sm mb-2">Goal</div>
                  <div className="text-gray-300 text-sm">Building Scalable, Reliable Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;