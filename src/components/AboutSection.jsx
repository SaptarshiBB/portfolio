import { Sparkles, Database, Cpu, Terminal, BrainCircuit } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionTitle from './SectionTitle';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  const education = [
    {
      school: 'Lovely Professional University',
      degree: 'Bachelor of Technology (B.Tech)',
      period: 'Present',
      description: 'Currently pursuing specialized studies in Computer Science and Engineering, focusing on full-stack development and algorithmic problem solving.',
      icon: <Cpu size={20} />
    },
    {
      school: 'Vivekananda Academy',
      degree: 'Intermediate (Higher Secondary)',
      period: '2020-2022',
      description: 'Completed secondary education with a focus on science and mathematics, building a strong analytical foundation.',
      icon: <BrainCircuit size={20} />
    },
    {
      school: 'Gospel Home School',
      degree: 'Matriculation (Secondary)',
      period: '2019-2020',
      description: 'Established fundamental academic excellence and developed an early interest in computing and technology.',
      icon: <Terminal size={20} />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]" ref={ref}>
      <div className="container-max">
        <SectionTitle 
          title="About Me" 
          subtitle="A brief look into my professional background and academic journey." 
        />
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Professional Description */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="card-glass p-10 border-primary/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <h3 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                <Sparkles size={28} className="text-primary" />
                Who I Am
              </h3>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-medium">
                <p>
                  I'm a <span className="text-white font-bold">Full Stack Developer</span> dedicated to building efficient, modern, and user-centric web applications. My approach combines technical precision with a focus on solving real-world challenges through clean code and scalable architectures.
                </p>
                <p>
                  With expertise in the <span className="text-primary font-bold">MERN stack</span> and modern frontend frameworks like <span className="text-secondary font-bold">Next.js</span>, I enjoy the process of turning complex ideas into functional, practical digital solutions that provide real value to users.
                </p>
                <p>
                  I am constantly exploring new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape, always striving for excellence in every project I undertake.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Education Hub */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-black text-white px-4 flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Database size={18} />
              </div>
              Academic Foundation
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="group relative">
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-white/5 rounded-full group-hover:bg-primary/30 transition-colors" />
                  <div className="card-glass p-6 ml-4 border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                          {edu.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{edu.school}</h4>
                          <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mt-1">{edu.degree}</p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-slate-400 uppercase tracking-tighter whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
