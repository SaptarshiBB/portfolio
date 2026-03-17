import { Github, ExternalLink, Code2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProjectCard({ project, delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`card-glass group flex flex-col overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Dynamic Image Container */}
      <div className="relative -mx-8 -mt-8 mb-8 h-64 overflow-hidden rounded-t-2xl border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        <div className="absolute bottom-4 left-6 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="tag-neon backdrop-blur-md bg-primary/20">{tech}</span>
          ))}
          {project.techStack.length > 3 && (
            <span className="tag-neon backdrop-blur-md bg-white/5 border-white/10 text-slate-300">+{project.techStack.length - 3} more</span>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors leading-tight">
            {project.title}
          </h3>
          <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">{project.category}</span>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">
          {project.description}
        </p>

        <div className="flex gap-4 pt-6 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 text-slate-300 text-xs font-bold hover:bg-white/10 hover:text-white transition-all duration-300"
          >
            <Github size={16} /> Codebase
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white text-xs font-bold hover:shadow-neon hover:scale-[1.02] transition-all duration-300"
          >
            <ExternalLink size={16} /> Live View
          </a>
        </div>
      </div>
    </div>
  );
}
