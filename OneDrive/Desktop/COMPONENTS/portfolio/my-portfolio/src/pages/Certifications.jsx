import SectionTitle from '../components/SectionTitle';
import CertificationCard from '../components/CertificationCard';
import certifications from '../data/certifications';

export default function Certifications() {
  return (
    <div className="min-h-screen mesh-bg section-padding pt-32">
      <div className="container-max">
        <SectionTitle
          title="Global Accreditations"
          subtitle="A collection of professional certifications validating my expertise in computer science and modern software engineering."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.id} cert={cert} delay={i * 100} />
          ))}
        </div>

        {/* Stats Overlay */}
        <div className="card-glass !p-12 text-center animate-fade-up border-primary/20 bg-primary/5">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 text-primary text-4xl font-black mb-6 border border-primary/30 shadow-neon">
            {certifications.length}
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Certifications Earned</h3>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            I am dedicated to continuous growth, consistently validating my skills through industry-recognized programs from leading institutions and platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
