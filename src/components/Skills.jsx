import skills from '../data/skills.js';

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[var(--color-bg-secondary)] transition-colors duration-300"
      aria-label="Skills section"
    >
      <div className="section-container">
        <h2 className="section-title">Skills &amp; Technologies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category} className="card">
              <h3 className="text-lg font-semibold text-accent mb-4">{category}</h3>
              <ul className="flex flex-wrap gap-2" role="list">
                {items.map(({ name, icon }) => (
                  <li key={name}>
                    <span className="inline-flex items-center gap-1.5 bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium px-3 py-1.5 rounded-full hover:border-accent hover:text-accent transition-colors duration-200">
                      <span aria-hidden="true">{icon}</span>
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
