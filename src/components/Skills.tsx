import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Server, Cloud, GitBranch, Package, Settings, Monitor, Shield, Workflow, Code } from 'lucide-react';
import Saturn from './Saturn';

const Skills = () => {
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

  const skills = [
    { 
      name: 'Linux', 
      icon: Terminal, 
      command: '$ uname -a', 
      color: 'from-green-400 to-emerald-500',
      description: 'System administration & shell scripting'
    },
    { 
      name: 'Git/GitHub', 
      icon: GitBranch, 
      command: '$ git status', 
      color: 'from-orange-400 to-red-500',
      description: 'Version control & collaboration'
    },
    { 
      name: 'Docker', 
      icon: Package, 
      command: '$ docker --version', 
      color: 'from-blue-400 to-cyan-500',
      description: 'Containerization & microservices'
    },
    { 
      name: 'Kubernetes', 
      icon: Server, 
      command: '$ kubectl get pods', 
      color: 'from-purple-400 to-indigo-500',
      description: 'Container orchestration'
    },
    { 
      name: 'Jenkins', 
      icon: Settings, 
      command: '$ jenkins --version', 
      color: 'from-red-400 to-pink-500',
      description: 'CI/CD pipeline automation'
    },
    { 
      name: 'Argo CD', 
      icon: Workflow, 
      command: '$ argocd version', 
      color: 'from-indigo-400 to-purple-500',
      description: 'GitOps continuous deployment'
    },
    { 
      name: 'Shell Scripting', 
      icon: Code, 
      command: '$ bash script.sh', 
      color: 'from-yellow-400 to-orange-500',
      description: 'Bash scripting & automation'
    },
    { 
      name: 'Ansible', 
      icon: Settings, 
      command: '$ ansible --version', 
      color: 'from-red-400 to-pink-500',
      description: 'Configuration management'
    },
    { 
      name: 'Terraform', 
      icon: Cloud, 
      command: '$ terraform plan', 
      color: 'from-indigo-400 to-purple-500',
      description: 'Infrastructure as Code'
    },
    { 
      name: 'AWS CLI', 
      icon: Shield, 
      command: '$ aws configure list', 
      color: 'from-yellow-400 to-orange-500',
      description: 'Cloud services & deployment'
    },
    { 
      name: 'Monitoring', 
      icon: Monitor, 
      command: '$ top', 
      color: 'from-pink-400 to-rose-500',
      description: 'System monitoring & observability'
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative z-20">
      <div className="hidden sm:block">
        <Saturn />
      </div>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="bg-gray-900/90 border border-gray-700 rounded-xl p-6 inline-block shadow-2xl shadow-cyan-400/10">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="text-cyan-400" size={28} />
                <span className="text-gray-400 font-mono">$ ansible-playbook skills.yml</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                DevOps Arsenal
              </h2>
            </div>
          </div>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`relative group bg-gray-800/50 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer z-10 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                <div className="relative z-10">
                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    {/* Icon with Glow Effect */}
                    <div className="relative">
                      <skill.icon 
                        className="text-gray-400 group-hover:text-white transition-all duration-300 drop-shadow-lg w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" 
                        size={48} 
                      />
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                    </div>
                    {/* Skill Name */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 text-center" 
                        style={{ backgroundImage: `linear-gradient(to right, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})` }}>
                      {skill.name}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm text-center group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                    {/* Command */}
                    <div className="bg-gray-900/80 rounded-lg p-2 sm:p-3 w-full">
                      <code className="text-xs font-mono text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 block text-center">
                        {skill.command}
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Terminal Output */}
          <div className="mt-12 bg-gray-900/90 border border-gray-700 rounded-xl p-6 shadow-2xl shadow-cyan-400/10">
            <div className="font-mono text-sm space-y-2">
              <div className="text-green-400">PLAY RECAP *********************************************************</div>
              <div className="text-gray-400">localhost : ok=8 changed=8 unreachable=0 failed=0 skipped=0</div>
              <div className="text-cyan-400">Skills deployment: SUCCESSFUL ✓</div>
              <div className="text-yellow-400">Learning progress: CONTINUOUS ∞</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;