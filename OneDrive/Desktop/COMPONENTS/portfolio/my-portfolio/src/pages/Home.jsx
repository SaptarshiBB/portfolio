import { Link } from 'react-router-dom';
import { ArrowRight, Download, Coffee, Sparkles, Database, Terminal, Cpu, BrainCircuit } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import projects from '../data/projects';

const stats = [
  { value: '02+', label: 'Projects Built', icon: <Terminal size={24} className="text-primary" /> },
  { value: '03+', label: 'Certifications', icon: <Cpu size={24} className="text-secondary" /> },
  { value: '100+', label: 'LeetCode Solved', icon: <BrainCircuit size={24} className="text-accent" /> },
  { value: '7.0', label: 'LPU CGPA', icon: <Database size={24} className="text-primary" /> },
];

const featuredProjects = projects.filter(p => p.featured);

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mesh-bg pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* Left Side: Dynamic Content */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass border border-white/5 text-primary text-sm font-bold mb-8 shadow-neon">
              <Sparkles size={16} />
              <span>Available for Summer Internships ‘25</span>
            </div>

            <h1 className="hero-title text-white">
              Saptarshi <br />
              <span className="text-gradient">Banerjee</span>
            </h1>
            
            <p className="hero-subtitle">
              Computer Science student at LPU specializing in <span className="text-white font-bold">MERN Stack</span> and <span className="text-white font-bold">DSA</span>. Building elegant solutions for complex digital challenges.
            </p>

            <div className="flex flex-wrap gap-6">
              <Link to="/projects" className="btn-primary group">
                Explore Work 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="/resume.pdf" download className="btn-outline">
                <Download size={20} /> Resume
              </a>
            </div>
          </div>

          {/* Right Side: Glowing Profile Card */}
          <div className="animate-fade-in flex justify-center lg:justify-end">
            <div className="relative group animate-float">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              
              <div className="relative card-glass p-10 max-w-sm w-full border-white/10">
                <div className="flex flex-col items-center">
                  <div className="w-36 h-36 rounded-3xl bg-slate-800 flex items-center justify-center text-6xl shadow-inner border border-white/5 mb-8">
                     🔥
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 leading-none">Full Stack Dev</h3>
                  <p className="text-slate-500 font-mono text-sm mb-8 tracking-tighter">lovely-professional-university.edu</p>
                  
                  <div className="w-full space-y-3">
                    {[
                      { icon: <Terminal size={14} />, text: 'MERN Specialist' },
                      { icon: <BrainCircuit size={14} />, text: 'DSA Problem Solver' },
                      { icon: <Cpu size={14} />, text: 'B.Tech CSE @ LPU' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 py-2.5 px-4 rounded-xl text-sm text-slate-300 font-medium">
                        <span className="text-primary">{item.icon}</span>
                        {item.text}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 mt-8 text-slate-500 font-mono text-[10px] uppercase tracking-widest opacity-60">
                    <Coffee size={12} /> status: debugging life
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="section-padding bg-slate-900/20 border-y border-white/5">
      <div className="container-max" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`card-glass !p-10 text-center flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      
      {/* Featured Projects Preview */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle title="Featured Projects" subtitle="A glimpse into some of the complex systems I've architected and implemented." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProjects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 200} />
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <Link to="/projects" className="btn-outline group">
              View All Architectural Work 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
