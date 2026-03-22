import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { Search } from 'lucide-react';

const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen mesh-bg section-padding pt-32">
      <div className="container-max">
        <SectionTitle
          title="Creative Works"
          subtitle="Engineered with precision and scalability. Exploring the intersection of design and robust architecture."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-neon'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
              <span className="ml-2 opacity-40 text-[10px] font-mono">
                {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 100} />
            ))}
          </div>
        ) : (
          <div className="card-glass text-center py-32 flex flex-col items-center gap-6 animate-fade-up">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Search size={32} className="text-slate-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">No matches found</h3>
              <p className="text-slate-500 max-w-sm mx-auto">I'm constantly working on new projects. Check back soon for more architecture examples!</p>
            </div>
            <button onClick={() => setActiveFilter('All')} className="btn-outline">Reset Filter</button>
          </div>
        )}
      </div>
    </div>
  );
}
