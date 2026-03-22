import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import skills from '../data/skills';

const categories = [
  { key: 'languages', label: '💻 Languages', data: skills.languages },
  { key: 'frameworks', label: '🌐 Frameworks', data: skills.frameworks },
  { key: 'tools', label: '🛠️ Tools', data: skills.tools },
  { key: 'coreSubjects', label: '📚 Core Theory', data: skills.coreSubjects },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const filteredCategories = activeTab === 'all' ? categories : categories.filter(c => c.key === activeTab);

  return (
    <div className="min-h-screen mesh-bg section-padding pt-32">
      <div className="container-max">
        <SectionTitle title="Technical Expertise" subtitle="A comprehensive overview of my technical stack and core competencies developed through rigorous academic and personal projects." />

        {/* Dynamic Filter Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-primary text-white shadow-neon'
                : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            ✨ All Expertise
          </button>
          {categories.map(c => (
            <button
              key={c.key}
              onClick={() => setActiveTab(c.key)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeTab === c.key
                  ? 'bg-primary text-white shadow-neon'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="space-y-20">
          {filteredCategories.map((category) => (
            <div key={category.key} className="animate-fade-up">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-black text-white">{category.label}</h3>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/30 to-transparent" />
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">{category.data.length} concepts</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.data.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 50} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
