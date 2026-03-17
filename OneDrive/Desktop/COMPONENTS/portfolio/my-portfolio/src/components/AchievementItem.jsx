import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AchievementItem({ achievement, index, isLast }) {
  const { ref, isVisible } = useScrollAnimation();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-between w-full mb-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Spacer for Desktop Grid */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
        <div className="w-6 h-6 rounded-full bg-slate-950 border-4 border-primary shadow-neon animate-pulse" />
      </div>

      {/* Content Card */}
      <div className="w-full md:w-5/12">
        <div className={`card-glass !p-8 relative group ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          {/* Decorative Corner Icon */}
          <div className={`absolute top-4 ${isEven ? 'left-4' : 'right-4'} opacity-0 group-hover:opacity-20 transition-opacity text-primary`}>
            <div className="text-4xl">{achievement.icon}</div>
          </div>

          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <span className="text-3xl">{achievement.icon}</span>
            <div className="h-px flex-1 bg-white/5" />
            <div className="flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-lg text-primary text-[10px] font-mono tracking-widest font-bold">
              <Calendar size={12} />
              {achievement.date}
            </div>
          </div>

          <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary transition-colors">
            {achievement.title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {achievement.description}
          </p>

          <div className={`flex flex-wrap gap-2 pt-6 border-t border-white/5 ${isEven ? 'md:justify-end' : ''}`}>
            {achievement.badges.map((badge) => (
              <span key={badge} className="tag-neon backdrop-blur-md bg-white/5 border-white/10 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
