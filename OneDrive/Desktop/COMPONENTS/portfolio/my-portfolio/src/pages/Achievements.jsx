import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import AchievementItem from '../components/AchievementItem';
import achievements from '../data/achievements';

const categories = ['All', 'Coding', 'Training', 'Academic'];

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? achievements : achievements.filter(a => a.category === activeFilter);

  return (
    <div className="min-h-screen mesh-bg section-padding pt-32">
      <div className="container-max">
        <SectionTitle
          title="Mileposts of Excellence"
          subtitle="Tracing my journey through competitive programming, specialized training, and academic milestones."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-24">
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
            </button>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/5 via-primary to-primary/5 opacity-20 hidden md:block" />
          
          <div className="space-y-12">
            {filtered.map((achievement, i) => (
              <AchievementItem 
                key={i} 
                achievement={achievement} 
                index={i} 
                isLast={i === filtered.length - 1} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
