import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderOpen, ExternalLink, X, Code, Server, Cloud, Monitor } from 'lucide-react';
import Astronaut from './Astronaut';

interface Project {
  id: number;
  name: string;
  description: string;
  icon: any;
  command: string;
  color: string;
  details: string;
  technologies: string[];
  preview: string;
  highlights: string[];
  githubLink?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

  const projects: Project[] = [
    {
      id: 1,
      name: 'CI/CD Pipeline: Jenkins + Ansible + Docker (From Scratch)',
      description: 'Complete CI/CD pipeline built from scratch using Dockerized Jenkins, Ansible automation, and custom private Docker registry',
      icon: Code,
      command: './build_and_deploy.sh  # ⛏️ Build → 📦 Push → 🚀 Deploy',
      color: 'from-blue-400 to-cyan-500',
      details: 'This project demonstrates a complete CI/CD pipeline built from scratch using Dockerized Jenkins, Ansible automation, and a custom private Docker registry—all deployed on a self-managed EC2 instance without DockerHub or prebuilt containers. From GitHub code push to live deployment, the pipeline automates everything: Docker image is built and pushed to a private registry, Jenkins orchestrates the CI flow across containers, and Ansible handles remote deployment on a secure node.',
      technologies: ['Jenkins', 'Ansible', 'Docker', 'EC2', 'Private Docker Registry', 'SSH'],
      preview: 'Complete CI/CD pipeline from scratch with 5 custom containers on single EC2 instance.',
      highlights: [
        'Built entire pipeline from scratch without using DockerHub or prebuilt images',
        'Configured secure SSH key-based communication between all pipeline components',
        'Deployed and managed 5 custom containers on a single EC2 instance',
        'Enabled full Docker image lifecycle: Build → Push → Deploy',
        'Used custom shell scripts and organized folder structure for easy automation',
        'Achieved fully automated deployment triggered directly from GitHub commits'
      ],
      githubLink: 'https://github.com/Gaurav10111/CI-CD-Pipeline-Jenkins-Ansible-Docker-from-scratch.git'
    },
    {
      id: 2,
      name: 'WordPress on AWS using Terraform – Multi-Environment IaC',
      description: 'Production-ready WordPress infrastructure on AWS with Terraform automation',
      icon: Cloud,
      command: 'terraform apply -var-file="dev.tfvars" 🚀',
      color: 'from-purple-400 to-indigo-500',
      details: 'WordPress on AWS using Terraform – Multi-Environment Infrastructure as Code. This project automates the deployment of a production-ready WordPress application on AWS using Terraform. It provisions a custom VPC with public and private subnets, launches a WordPress EC2 instance in the public subnet, and sets up a MySQL RDS database in private subnets across availability zones. All credentials (like RDS passwords) are securely stored in AWS Secrets Manager, and the infrastructure supports multiple environments like dev and test through dedicated .tfvars files.',
      technologies: ['Terraform', 'AWS EC2', 'AWS RDS (MySQL)', 'AWS Secrets Manager', 'VPC', 'Security Groups', 'tfvars'],
      preview: 'Production-ready WordPress infrastructure with multi-environment support and secure credential management.',
      highlights: [
        'Fully automated provisioning of a secure, scalable WordPress infrastructure',
        'Multi-AZ RDS deployment with private access only',
        'Complete network isolation via public/private subnet segregation',
        'Dynamic, reusable Terraform modules for better scalability',
        'Secrets Manager integration for encrypted RDS password management',
        'Multi-environment support using dev.tfvars and test.auto.tfvars'
      ],
      githubLink: 'https://github.com/Gaurav10111/Terraform-AWS-Wordpress-RDS.git'
    },
    {
      id: 3,
      name: 'DevOps CI/CD Workflow (Jenkins + Ansible + Docker + Kubernetes on RHEL 9 EC2)',
      description: 'Production-style CI/CD pipeline built from scratch using only open-source tools',
      icon: Server,
      command: 'ansible-playbook site.yml -i inventory.ini',
      color: 'from-green-400 to-emerald-500',
      details: 'DevOps CI/CD Workflow (Jenkins + Ansible + Docker + Kubernetes on RHEL 9 EC2). This project showcases a production-style CI/CD pipeline built from scratch using only open-source tools — no DockerHub, no prebuilt images, and no shortcuts. It follows a GitOps-inspired approach where pushing code to GitHub triggers a Jenkins pipeline, builds a Docker image, stores it in a private registry, and uses Ansible to provision and deploy the app into Kubernetes (Minikube) on a separate EC2 node.',
      technologies: ['Jenkins', 'Ansible', 'Docker', 'Minikube', 'Kubernetes', 'Python Flask'],
      preview: 'Complete CI/CD pipeline from scratch with GitOps practices and private registry.',
      highlights: [
        'Built CI/CD pipeline from scratch using only self-hosted tools',
        'Configured private Docker registry for secure image management',
        'Used Ansible roles for modular infra + app provisioning',
        'Deployed Flask app to Minikube inside remote EC2',
        'Emulated real-world GitOps practices using Jenkins + Ansible combo',
        '100% manual installation and configuration — no shortcuts'
      ],
      githubLink: 'https://github.com/Gaurav10111/Demonstrate-complete-CI-CD-Workflow.git'
    },
    {
      id: 4,
      name: 'Ansible Master-Node Automation using Docker & Kubernetes',
      description: 'Complete Ansible Master-Node automation setup built from scratch using Docker and Kubernetes',
      icon: Monitor,
      command: 'kubectl apply -f ansible-automation/',
      color: 'from-yellow-400 to-orange-500',
      details: 'A complete Ansible Master-Node automation setup built from scratch using Docker and Kubernetes. It features custom Docker images, SSH key-based authentication, and Ansible playbooks for automation. In Kubernetes, StatefulSets and Headless Services ensure stable node identity and seamless orchestration in a dynamic container environment.',
      technologies: ['Ansible', 'Docker', 'Kubernetes', 'SSH', 'Python', 'RHEL 9'],
      preview: 'Complete Ansible automation setup with Docker and Kubernetes orchestration.',
      highlights: [
        'Built infra from scratch with deep control over every layer',
        'Implemented secure SSH automation in dynamic environments',
        'Mastered Docker & Kubernetes networking (bridge, svc, StatefulSet)',
        'Learned real-world DevOps automation patterns & IaC best practices'
      ],
      githubLink: 'https://github.com/Gaurav10111/Ansible-Master-Node-Automation-Setup-using-Docker-Kubernetes.git'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-800/30 relative">
      <Astronaut />
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 inline-block shadow-2xl shadow-cyan-400/10">
              <div className="flex items-center space-x-3 mb-4">
                <FolderOpen className="text-cyan-400" size={28} />
                <span className="text-gray-400 font-mono">$ kubectl get projects</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                DevOps Projects
              </h2>
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient Border on Hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <project.icon 
                          className="text-gray-400 group-hover:text-white transition-all duration-300" 
                          size={32} 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                        {project.name}
                      </h3>
                    </div>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {!project.githubLink && (
                      <ExternalLink className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" size={20} />
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="bg-gray-900/80 rounded-lg p-4">
                    <code className="text-sm font-mono text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                      $ {project.command}
                    </code>
                  </div>
                  
                  {/* Hover Preview */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center transition-all duration-300 z-10">
                      <div className="text-center space-y-4">
                        <project.icon className="text-cyan-400 mx-auto" size={48} />
                        <h4 className="text-xl font-bold text-white">{project.name}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{project.preview}</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-xs border border-cyan-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-gray-400 text-xs">+{project.technologies.length - 3} more</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400 mt-4">Click for full details</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700">
                  <div className="flex items-center space-x-4">
                    <selectedProject.icon className="text-cyan-400" size={32} />
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {selectedProject.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                
                {/* Modal Content */}
                <div className="p-6 space-y-6">
                  {/* Command */}
                  <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm ml-4 font-mono">project-terminal</span>
                    </div>
                    <code className="text-cyan-400 font-mono">$ {selectedProject.command}</code>
                  </div>
                  
                  {/* Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.details}</p>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-full text-sm border border-cyan-400/30 hover:border-cyan-400 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Achievements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Terminal Output */}
          <div className="mt-12 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-2xl shadow-cyan-400/10">
            <div className="font-mono text-sm space-y-1">
              <div className="text-green-400">NAME                    READY   STATUS    RESTARTS   AGE</div>
              <div className="text-gray-300">ci-cd-pipeline          1/1     Running   0          30d</div>
              <div className="text-gray-300">terraform-wordpress     1/1     Running   0          25d</div>
              <div className="text-gray-300">devops-workflow         1/1     Running   0          20d</div>
              <div className="text-gray-300">ansible-automation      1/1     Running   0          15d</div>
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-block"
            >
              <a
                href="https://github.com/Gaurav10111"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-2xl shadow-cyan-400/10 hover:shadow-cyan-400/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    See More Projects on GitHub
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    Explore my complete portfolio of DevOps projects
                  </p>
                </div>
                <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                  <ExternalLink className="text-cyan-400" size={16} />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;