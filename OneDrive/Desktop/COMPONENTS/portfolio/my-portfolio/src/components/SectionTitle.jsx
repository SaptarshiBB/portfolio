import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SectionTitle({ title, subtitle }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-primary rounded-full" />
        <span className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Showcase</span>
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-primary rounded-full" />
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
