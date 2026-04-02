import { ExternalLink, Github, Globe } from 'lucide-react';

const PLATFORM_COLORS = {
  'Web Platform': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Android': 'bg-green-500/10 text-green-400 border-green-500/30',
  'Web + Android': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'AI Platform': 'bg-orange-500/10 text-orange-400 border-orange-500/30',
};

export default function ProjectCard({ project }) {
  const { title, description, platform, thumbnail, techStack, liveUrl, repoUrl } = project;
  const platformClass = PLATFORM_COLORS[platform] || 'bg-accent/10 text-accent border-accent/30';

  return (
    <article className="card flex flex-col h-full hover:shadow-lg hover:border-accent/40 transition-all duration-300 group">
      {/* Thumbnail */}
      <div className="relative w-full h-44 rounded-lg overflow-hidden mb-4 bg-[var(--color-bg-secondary)]">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={`${title} project screenshot`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" aria-hidden="true">
            <Globe size={48} className="text-[var(--color-border)]" />
          </div>
        )}
      </div>

      {/* Platform tag */}
      <span
        className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-3 ${platformClass}`}
      >
        {platform}
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {/* Tech stack */}
      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {techStack.map(tech => (
            <span
              key={tech}
              className="text-xs bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] px-2 py-0.5 rounded border border-[var(--color-border)]"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 mt-auto pt-2 border-t border-[var(--color-border)]">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-primary-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded min-h-[44px] px-1"
            aria-label={`View live demo of ${title}`}
          >
            <ExternalLink size={15} aria-hidden="true" />
            Live Demo
          </a>
        )}
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded min-h-[44px] px-1"
            aria-label={`View source code of ${title} on GitHub`}
          >
            <Github size={15} aria-hidden="true" />
            Source Code
          </a>
        )}
        {!liveUrl && !repoUrl && (
          <span className="text-sm text-[var(--color-text-secondary)] italic">Private project</span>
        )}
      </div>
    </article>
  );
}
