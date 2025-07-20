import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
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

  const contacts = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'Gaurav10111',
      link: 'https://github.com/Gaurav10111',
      command: 'git clone github.com/Gaurav10111',
      color: 'from-gray-400 to-gray-600',
      description: 'Open source contributions & projects'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'gauravpatil20',
      link: 'https://www.linkedin.com/in/gauravpatil20/',
      command: 'curl -X GET linkedin.com/in/gauravpatil20',
      color: 'from-blue-400 to-blue-600',
      description: 'Professional network & career updates'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'patil2023gaurav@gmail.com',
      link: 'mailto:patil2023gaurav@gmail.com',
      command: 'sendmail patil2023gaurav@gmail.com',
      color: 'from-red-400 to-red-600',
      description: 'Direct communication & collaboration'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7058644361',
      link: 'tel:7058644361',
      command: 'call +91-7058644361',
      color: 'from-green-400 to-green-600',
      description: 'Voice calls & urgent matters'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 inline-block shadow-2xl shadow-cyan-400/10">
              <div className="flex items-center space-x-3 mb-4">
                <ExternalLink className="text-cyan-400" size={28} />
                <span className="text-gray-400 font-mono">$ ssh gaurav@linkedin.com</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
            </div>
          </div>
          
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contacts.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:shadow-2xl block ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <contact.icon 
                          className="text-gray-400 group-hover:text-white transition-all duration-300" 
                          size={32} 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                          {contact.label}
                        </h3>
                        <p className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                          {contact.value}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" size={20} />
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {contact.description}
                  </p>
                  
                  <div className="bg-gray-900/80 rounded-lg p-3">
                    <code className="text-xs font-mono text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                      $ {contact.command}
                    </code>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Connection Status */}
          <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-2xl shadow-cyan-400/10">
            <div className="text-center space-y-6">
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">Connection established successfully!</div>
                <div className="text-gray-400">Last login: {new Date().toLocaleDateString()} from localhost</div>
                <div className="text-cyan-400">Welcome to Gaurav's DevOps network.</div>
              </div>
              
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
              
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  I'm always excited to connect with fellow tech enthusiasts, DevOps practitioners, 
                  and anyone passionate about automation and infrastructure. Whether you want to 
                  discuss the latest in container orchestration, share DevOps best practices, 
                  or explore collaboration opportunities, I'd love to hear from you!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="text-cyan-400 font-semibold mb-2">Open to Discuss</div>
                    <div className="text-gray-300 text-sm">DevOps practices, Cloud architecture, Automation strategies</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="text-purple-400 font-semibold mb-2">Collaboration</div>
                    <div className="text-gray-300 text-sm">Open source projects, Learning partnerships, Knowledge sharing</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <div className="text-green-400 font-semibold mb-2">Opportunities</div>
                    <div className="text-gray-300 text-sm">Internships, Full-time roles, Freelance projects</div>
                  </div>
                </div>
              </div>
              
              <div className="font-mono text-sm bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="text-gray-400">Response time: Usually within 24 hours</div>
                <div className="text-green-400">Status: Available for new connections</div>
                <div className="text-cyan-400">Preferred method: Email or LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;