import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import profilePhoto from '../assets/photo_5904759161130519710_y.jpg';

const ROLES = [
  'Full Stack Developer',
  'Android Developer',
  '3D Developer',
  'Problem Solver',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(prev => prev.slice(0, -1));
        }, 45);
      } else {
        setRoleIndex(prev => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--color-bg)] pt-16"
      aria-label="Hero section"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-accent font-semibold text-lg mb-2 tracking-wide">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] mb-4 leading-tight">
            Yeabsera Getachew
          </h1>

          {/* Typing animation */}
          <div className="h-10 mb-6 flex items-center justify-center md:justify-start">
            <span className="text-xl sm:text-2xl font-semibold text-accent">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-[var(--color-text-secondary)] text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Passionate developer crafting elegant solutions across web, mobile, and 3D platforms.
            Based in Addis Abeba, Ethiopia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="btn-primary text-center min-h-[44px] flex items-center justify-center"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary text-center min-h-[44px] flex items-center justify-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative">
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-primary blur-xl opacity-40 scale-110"
              aria-hidden="true"
            />
            <img
              src={profilePhoto}
              alt="Yeabsera Getachew — Full Stack Developer"
              className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-accent shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)] hover:text-accent transition-colors animate-bounce focus:outline-none focus:ring-2 focus:ring-accent rounded"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
