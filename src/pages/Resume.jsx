import SectionTitle from '../components/SectionTitle';
import { Download, ExternalLink, FileText, ChevronRight } from 'lucide-react';

export default function Resume() {
  return (
    <div className="min-h-screen mesh-bg section-padding pt-32">
      <div className="container-max">
        <SectionTitle 
          title="The Blueprint" 
          subtitle="A summary of my engineering background, technical expertise, and academic journey at LPU." 
        />

        {/* Action Bar */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="/resume.pdf" download="Saptarshi_Banerjee_Resume.pdf" className="btn-primary group">
            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" /> 
            Download PDF
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <ExternalLink size={20} /> Preview in Tab
          </a>
        </div>

        {/* Realistic PDF Viewer / Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card-glass !p-0 overflow-hidden shadow-2xl relative">
            <div className="bg-white/5 border-b border-white/10 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold leading-none mb-1" style={{ color: 'var(--text-main)' }}>Saptarshi_Banerjee_Resume.pdf</h3>
                  <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">application/pdf (31 KB)</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
                <div className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
            </div>
            
            <div className="relative w-full aspect-[1/1.4] bg-slate-900 flex items-center justify-center group">
              <iframe
                src="/resume.pdf"
                className="w-full h-full opacity-90 transition-opacity hover:opacity-100"
                title="Saptarshi Banerjee Resume"
              />
              
              {/* Overlay for better aesthetic when loading */}
              <div className="absolute inset-0 pointer-events-none border-4 border-primary/5 rounded-b-2xl" />
            </div>

            {/* Resume Hint */}
            <div className="backdrop-blur-md px-8 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4" style={{ backgroundColor: 'var(--header-bg)' }}>
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                <ChevronRight size={16} className="text-primary" />
                <span>Need a tailored version? Just reach out!</span>
              </div>
              <div className="flex gap-6">
                 <div className="flex flex-col items-center">
                    <span className="font-black text-xl" style={{ color: 'var(--text-main)' }}>100%</span>
                    <span className="text-[8px] text-slate-500 font-mono uppercase tracking-widest leading-none">Job Ready</span>
                 </div>
                 <div className="w-px h-8 bg-white/5" />
                 <div className="flex flex-col items-center">
                    <span className="font-black text-xl" style={{ color: 'var(--text-main)' }}>MERN</span>
                    <span className="text-[8px] text-slate-500 font-mono uppercase tracking-widest leading-none">Stack Focus</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
