import React, { useEffect, useRef, useState } from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
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
              <Building className="text-cyan-400" size={24} />
              <span className="text-gray-400 font-mono text-sm">$ terraform apply -auto-approve --target=internship</span>
            </div>
          </div>
          
          {/* Content Card */}
          <div className="bg-gray-800/90 backdrop-blur-sm border-x border-b border-gray-700 rounded-b-xl p-8 shadow-2xl shadow-cyan-400/10">
            <div className="space-y-8">
              <div className="font-mono text-green-400 text-sm">
                Plan: 1 to add, 0 to change, 0 to destroy.
              </div>
              
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-400/20 hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Technical Intern</h3>
                    <div className="flex items-center space-x-2 text-cyan-400 text-lg mb-2">
                      <Building size={20} />
                      <span>LinuxWorld Informatics Pvt. Ltd.</span>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span className="text-sm">Feb 2025 – Present</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span className="text-sm">Remote</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-px bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-transparent mb-6"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Learning Areas</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">CI/CD Pipelines</div>
                          <div className="text-gray-400 text-sm">Jenkins, Docker integration, automated testing</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Container Orchestration</div>
                          <div className="text-gray-400 text-sm">Kubernetes deployments using Minikube</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Infrastructure as Code</div>
                          <div className="text-gray-400 text-sm">Terraform provisioning and management</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Technologies & Tools</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Cloud Platforms</div>
                          <div className="text-gray-400 text-sm">Hands-on AWS CLI usage and services</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Configuration Management</div>
                          <div className="text-gray-400 text-sm">Ansible playbooks and automation</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <div className="text-white font-medium">Version Control</div>
                          <div className="text-gray-400 text-sm">Git workflows and collaboration</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="font-mono text-green-400 text-sm space-y-1">
                <div>Apply complete! Resources: 1 added, 0 changed, 0 destroyed.</div>
                <div className="text-gray-400">Outputs:</div>
                <div className="text-cyan-400 ml-4">internship_status = "active"</div>
                <div className="text-cyan-400 ml-4">learning_progress = "accelerating"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;