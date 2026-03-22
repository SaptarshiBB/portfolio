import SectionTitle from '../components/SectionTitle';
import experience from '../data/experience';

export default function Experience() {
  return (
    <div className="min-h-screen mesh-bg section-padding pt-32">
      <div className="container-max">
        <SectionTitle 
          title="Professional Journey" 
          subtitle="A chronicle of my professional growth, technical contributions, and career milestones." 
        />

        <div className="max-w-7xl mx-auto space-y-32">
          {experience.map((exp, idx) => (
            <div key={exp.id} className="animate-fade-up text-center" style={{ animationDelay: `${idx * 200}ms` }}>
              <div className="mb-10">
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tighter italic uppercase leading-tight mb-4">{exp.role}</h3>
                <p className="text-primary font-bold text-lg sm:text-xl tracking-[0.2em] uppercase opacity-80">{exp.company}</p>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center space-y-6">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-400 text-lg sm:text-xl leading-relaxed font-medium italic opacity-90 text-center">
                      <span className="text-primary text-2xl">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center animate-fade-in">
          <p className="text-slate-500 font-mono text-sm mb-8">Ready to build something amazing together?</p>
          <a href="/contact" className="btn-primary inline-flex">
            Let's Connect & Collaborate
          </a>
        </div>
      </div>
    </div>
  );
}
