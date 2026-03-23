import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, Github, Linkedin, Send, MapPin, ExternalLink, Sparkles } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'saptarshineymar88@gmail.com', href: 'mailto:saptarshineymar88@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91-6289672941', href: 'tel:+916289672941' },
  { icon: MapPin, label: 'Location', value: 'Punjab, India', href: 'https://www.google.com/maps/search/West+Bengal,+India' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/SaptarshiBB' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/saptarshibb/' },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData();
    formData.append("access_key", "774c0313-e118-4407-aedc-7cd421a1b9d5");
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);
    formData.append("subject", `New Message from ${formState.name} (Portfolio)`);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully! ✨');
        setFormState({ name: '', email: '', message: '' });
      } else {
        console.log("Error", data);
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.log("Error", error);
      setStatus('An error occurred. Please try again later.');
    }
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
                 <h3 className="text-3xl font-black mb-4" style={{ color: 'var(--text-main)' }}>Contact Detail</h3>
                 <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
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
                         <span className="font-bold group-hover:text-primary transition-colors" style={{ color: 'var(--text-main)' }}>{info.value}</span>
                       </div>
                     </a>
                   ))}
                 </div>
               </div>

               <div>
                 <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-main)' }}>Social Footprint</h3>
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
                      placeholder=".."
                      className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all"
                      style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder=".."
                      className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all"
                      style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
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
                    placeholder=".."
                    className="w-full border rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all resize-none"
                    style={{ backgroundColor: 'var(--bg-page)', color: 'var(--text-main)', borderColor: 'var(--border-main)' }}
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
