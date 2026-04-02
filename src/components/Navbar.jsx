import { useState } from 'react';
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact'];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] transition-colors duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => handleNavClick(e, '#home')}
            className="text-xl font-bold text-accent hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
          >
            YG
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={e => handleNavClick(e, href)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                      isActive
                        ? 'text-accent bg-accent/10'
                        : 'text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <a
              href="https://github.com/yabuti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Linkedin size={20} />
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger (mobile) */}
            <button
              className="md:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3"
        >
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={e => handleNavClick(e, href)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] flex items-center ${
                      isActive
                        ? 'text-accent bg-accent/10'
                        : 'text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
