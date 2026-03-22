import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/SaptarshiBB', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/saptarshibb/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:saptarshineymar88@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden" style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container-max py-16 md:py-24 flex flex-col items-center">
        {/* Branding Logo */}
        <div className="flex items-center gap-3 mb-10 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Code2 size={24} className="text-primary group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-white font-black text-2xl tracking-tighter">Saptarshi's<span className="text-primary"> Portfolio</span></span>
        </div>

        {/* Dynamic Socials */}
        <div className="flex gap-8 mb-12">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary/20 hover:border-primary/40 hover:shadow-neon transition-all duration-300 transform hover:-translate-y-2"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>
        
        {/* Minimal Bottom Info */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} Saptarshi's Portfolio. All rights architected.
          </p>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] text-slate-600 font-mono uppercase tracking-[0.2em]">
            <span>Crafted with</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
            <span>in West Bengal, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
