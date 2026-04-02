import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] transition-colors duration-300"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <p className="text-[var(--color-text-secondary)] text-sm">
            &copy; {year} Yeabsera Getachew. Made with{' '}
            <Heart size={13} className="inline text-red-500" aria-label="love" />{' '}
            in Addis Abeba.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/yabuti"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
              className="p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-accent hover:bg-accent/10 transition-colors focus:outline-none focus:ring-2 focus:ring-accent min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
