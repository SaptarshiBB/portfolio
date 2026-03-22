import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SkillCard({ skill, delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`card-glass !p-6 flex items-center gap-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform overflow-hidden p-2">
        {skill.icon.startsWith('http') ? (
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-full h-full object-contain transition-all duration-300" 
          />
        ) : (
          <span>{skill.icon}</span>
        )}
      </div>
      <div>
        <span className="block text-white font-bold leading-none">{skill.name}</span>
      </div>
    </div>
  );
}
