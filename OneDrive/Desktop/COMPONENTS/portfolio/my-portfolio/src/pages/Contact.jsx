import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, Github, Linkedin, Send, MapPin, ExternalLink, Sparkles } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'saptarshineymar88@gmail.com', href: 'mailto:saptarshineymar88@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-6289672941', href: 'tel:+916289672941' },
  { icon: MapPin, label: 'Location', value: 'West Bengal, India', href: '#' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/SaptarshiBB' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/saptarshibb/' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully! ✨');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen mesh-bg section-padding pt-32">
      <div className="container-max">
        <SectionTitle
          title="Let’s Collaborate"
          subtitle="I’m always open to discussing full-stack development roles, internships, or open-source collaborations."
        />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 max-w-6xl mx-auto">
          {/* Left Side: Contact Info */}
          <div className="space-y-8 animate-fade-in">
             <div className="card-glass !p-10 space-y-12">
               <div>
                 <h3 className="text-3xl font-black text-white mb-4">Contact Detail</h3>
                 <p className="text-slate-500 text-sm leading-relaxed mb-8">
                   Reach out via the form, directly through email, or connect with me on social platforms. I usually respond within 24 hours.
                 </p>
                 
                 <div className="space-y-6">
                   {contactInfo.map((info) => (
                     <a 
                       key={info.label} 
                       href={info.href} 
                       className="flex items-center gap-5 group"
                     >
                       <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                         <info.icon size={20} />
                       </div>
                       <div>
                         <span className="block text-[10px] text-slate-500 font-mono uppercase tracking-widest mb-1">{info.label}</span>
                         <span className="text-white font-bold group-hover:text-primary transition-colors">{info.value}</span>
                       </div>
                     </a>
                   ))}
                 </div>
               </div>

               <div>
                 <h3 className="text-xl font-bold text-white mb-6">Social Footprint</h3>
                 <div className="flex gap-4">
                   {socialLinks.map((social) => (
                     <a 
                       key={social.label} 
                       href={social.href} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="btn-outline !px-4 !py-4"
                     >
                       <social.icon size={20} />
                     </a>
                   ))}
                 </div>
               </div>
             </div>
             
             {/* Decorative Banner */}
             <div className="card-glass !p-8 bg-gradient-to-br from-primary/20 to-transparent border-primary/20 relative overflow-hidden group">
               <Sparkles size={40} className="absolute -top-4 -right-4 text-primary/20 group-hover:rotate-12 transition-transform" />
               <h4 className="text-white font-black text-xl mb-2">Available for Internships!</h4>
               <p className="text-slate-400 text-xs">Ready to contribute to your tech stack in 2025.</p>
             </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="animate-fade-up">
            <div className="card-glass !p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full bg-slate-950 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] font-bold">Message Brief</label>
                  <textarea
                    required
                    rows="5"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-950 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col items-center gap-6">
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center group"
                  >
                    Transmit Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  
                  {status && (
                    <div className="text-secondary font-bold text-sm animate-fade-in flex items-center gap-2">
                       <Sparkles size={16} /> {status}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
