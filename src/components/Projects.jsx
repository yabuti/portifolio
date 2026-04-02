import projects from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--color-bg)] transition-colors duration-300"
      aria-label="Projects section"
    >
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-2xl">
          A selection of projects spanning AI, web, and mobile platforms — each solving real-world problems.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
