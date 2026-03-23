import { Link } from 'react-router-dom';
import { ArrowRight, Download, Coffee, Sparkles, Database, Terminal, Cpu, BrainCircuit, GitBranch, Layout, Server, Workflow } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';
import projects from '../data/projects';
import experience from '../data/experience';

const stats = [
  { value: '03+', label: 'Projects Built', icon: <Terminal size={24} className="text-primary" /> },
  { value: '03+', label: 'Certifications', icon: <Cpu size={24} className="text-secondary" /> },
 ,

];

const featuredProjects = projects.filter(p => p.featured);

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#020617]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-max relative z-10 font-outfit">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Section 1: Core Identity (Left) */}
          <div className="animate-fade-up order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
              Saptarshi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-secondary animate-gradient">Banerjee</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-medium">
              <span className="text-white">Full Stack Developer</span> focused on building practical and usable web applications for real-world needs.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <Link to="/projects" className="h-14 px-8 flex items-center justify-center bg-primary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 group">
                Explore Projects 
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="/resume.pdf" download className="h-14 px-8 flex items-center justify-center bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300">
                <Download size={20} className="mr-2" /> Resume
              </a>
            </div>
          </div>

          {/* Section 2: Visual Profile (Right) */}
          <div className="animate-fade-in order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Subtle Refined Glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[48px] blur-3xl opacity-50 pointer-events-none" />
              
              <div className="relative w-80 sm:w-[400px] bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[48px] p-10 lg:p-12 shadow-2xl flex flex-col items-center">
                <div className="w-44 h-44 rounded-[32px] overflow-hidden border-2 border-white/10 mb-10 bg-slate-800 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src="/Screenshot (76).png"
                    alt="Saptarshi Banerjee"
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                
                <div className="text-center mb-10">
                  <h3 className="text-white text-3xl font-black mb-2 tracking-tight">Full Stack Developer</h3>
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.2em]">Lovely Professional University</p>
                </div>
                
                <div className="w-full flex flex-col items-center gap-8">
                  {[
                    { label: 'Projects Built', value: '03+', color: 'text-primary' },
                    { label: 'Certifications', value: '03+', color: 'text-indigo-400' },
                    { label: 'LeetCode Solved', value: '100+', color: 'text-secondary' },
                    { label: 'LPU CGPA', value: '7.0', color: 'text-emerald-400' },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1.5">
                      <span className={`${stat.color} text-4xl font-black tracking-tighter leading-none`}>{stat.value}</span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold whitespace-nowrap">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 w-full flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                    <Sparkles size={12} /> Ready for Collaboration
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
    <section className="py-24 bg-[#020617] border-y border-white/5 relative z-20">
      <div className="container-max" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`p-12 rounded-[32px] bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center transition-all duration-1000 group hover:bg-white/[0.04] hover:border-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSummary() {
  const { ref, isVisible } = useScrollAnimation();
  const skills = [
    { title: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind', 'Redux'], icon: <Layout size={24} />, color: 'text-primary' },
    { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'], icon: <Server size={24} />, color: 'text-indigo-400' },
    { title: 'Tools & DevOps', items: ['Docker', 'AWS', 'Firebase', 'Git'], icon: <Workflow size={24} />, color: 'text-secondary' }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617] border-y border-white/5">
      <div className="container-max" ref={ref}>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Expertise Stack</h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-medium">Focused on building scalable, high-performance applications with modern tools and best practices.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={skill.title}
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`p-10 lg:p-12 rounded-[48px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-1000 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className={`w-14 h-14 rounded-3xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-6">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 font-bold uppercase tracking-widest">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-32 relative bg-[#020617]" ref={ref}>
      <div className="container-max text-center">
        <div className={`transition-all duration-1000 bg-white/[0.02] border border-white/5 rounded-[64px] p-12 lg:p-24 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">Ready to build <br /> something amazing?</h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">Whether you have a specific project in mind or just want to chat about tech, I'm always open to new opportunities.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="h-16 px-10 flex items-center justify-center bg-primary text-white font-black rounded-3xl shadow-2xl hover:-translate-y-1 transition-all duration-300">
              Get In Touch
            </Link>
            <a href="mailto:saptarshibanerjee.work@gmail.com" className="h-16 px-10 flex items-center justify-center bg-white/5 border border-white/10 text-white font-black rounded-3xl hover:bg-white/10 transition-all duration-300">
              Drop an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden">
      <HeroSection />
      
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

      {/* Work Experience Section */}
      <section className="section-padding relative overflow-hidden bg-white/[0.02]">
        <div className="container-max">
          <SectionTitle 
            title="Professional Journey" 
            subtitle="My experiences in tech, contributing to quality and innovation." 
          />
          
          <div className="max-w-5xl mx-auto text-center">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="mb-24 last:mb-0">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-none mb-2 italic">{exp.role}</h3>
                  <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase opacity-70">{exp.company}</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center space-y-4">
                      {exp.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-400 text-sm sm:text-base leading-relaxed font-medium italic opacity-80">
                          <span className="text-primary text-xl">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Theory Section */}
      <section className="section-padding bg-white/2">
        <div className="container-max">
          <SectionTitle 
            title="Core Theory" 
            subtitle="The academic pillars of my computer science foundation, ensuring robust and scalable software design." 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Data Structures & Algorithms', icon: <GitBranch size={24} />, color: 'text-primary' },
              { title: 'Operating Systems', icon: <Cpu size={24} />, color: 'text-secondary' },
              { title: 'Computer Networks', icon: <Terminal size={24} />, color: 'text-accent' },
              { title: 'Database Management Systems', icon: <Database size={24} />, color: 'text-secondary' },
            ].map((skill, i) => (
              <div key={i} className="card-glass p-8 flex flex-col items-center text-center group">
                <div className={`mb-6 p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-neon ${skill.color}`}>
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{skill.title}</h4>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <Link to="/skills" className="btn-outline group h-14 px-8 rounded-2xl flex items-center justify-center">
              Explore All Skills 
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <SkillsSummary />

      {/* Work Experience Section */}
      <section className="section-padding relative overflow-hidden bg-white/[0.02]">
        <div className="container-max">
          <SectionTitle 
            title="Professional Journey" 
            subtitle="My experiences in tech, contributing to quality and innovation." 
          />
          
          <div className="max-w-5xl mx-auto text-center">
            {experience.map((exp, idx) => (
              <div key={exp.id} className="mb-24 last:mb-0">
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-none mb-2 italic">{exp.role}</h3>
                  <p className="text-primary font-bold text-sm tracking-[0.2em] uppercase opacity-70">{exp.company}</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col items-center space-y-4">
                      {exp.highlights.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-400 text-sm sm:text-base leading-relaxed font-medium italic opacity-80">
                          <span className="text-primary text-xl">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
