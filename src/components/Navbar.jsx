import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-xl border-b border-white/5 shadow-2xl' : ''}`} style={{ backgroundColor: scrolled ? 'var(--header-bg)' : 'transparent' }}>
      <div className="container-max h-full">
        <div className="flex items-center justify-between h-full">
          {/* Column 1: Logo */}
          <div className="flex-1 flex justify-start">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
                <Code2 size={24} className="text-white" />
              </div>
              <span className="font-black text-xl tracking-tighter hover:text-primary transition-colors" style={{ color: 'var(--text-main)' }}>Saptarshi's<span className="text-primary"> Portfolio</span></span>
            </NavLink>
          </div>

          {/* Column 2: Navigation Links (Desktop) */}
          <div className="hidden lg:flex flex-[2] justify-center items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to} to={to} end={to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Column 3: Actions & Mobile Menu */}
          <div className="flex-1 flex justify-end items-center gap-5">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-11 h-11 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-slate-300 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Glass Overlay) */}
      <div className={`lg:hidden fixed inset-x-0 top-20 transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-max pb-8">
          <div className="card-glass border-t-0 rounded-t-none flex flex-col gap-4" style={{ backgroundColor: 'var(--bg-page)' }}>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to} to={to} end={to === '/'}
                className={({ isActive }) =>
                  `block text-xl font-bold py-2 transition-all duration-300 ${
                    isActive ? 'text-primary translate-x-2' : 'text-slate-400 hover:text-white hover:translate-x-2'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
