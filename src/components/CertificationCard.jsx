import { ExternalLink, Calendar, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function CertificationCard({ cert, delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`card-glass flex flex-col transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
          <Award size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold leading-tight" style={{ color: 'var(--text-main)' }}>{cert.title}</h3>
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-wider">{cert.issuer}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          <Calendar size={14} className="text-slate-600" />
          <span>{cert.date}</span>
        </div>
        <p className="text-slate-500 text-xs font-mono">ID: {cert.credentialId}</p>
      </div>

      {cert.link && cert.link !== '#' && (
        <div className="mt-8 pt-6 border-t border-white/5">
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !py-3 !px-6 !text-xs justify-center flex items-center gap-2"
          >
            Verify Credential <ExternalLink size={14} />
          </a>
        </div>
      )}
    </div>
  );
}
