import { MapPin, Code2, Smartphone, Layers } from 'lucide-react';
import profilePhoto from '../assets/photo_5904759161130519710_y.jpg';

const highlights = [
  { icon: Code2, label: 'Full Stack Web Development' },
  { icon: Smartphone, label: 'Android & Mobile Apps' },
  { icon: Layers, label: '3D Development & Modeling' },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg-secondary)] transition-colors duration-300"
      aria-label="About section"
    >
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-primary blur-lg opacity-30 scale-105"
                aria-hidden="true"
              />
              <img
                src={profilePhoto}
                alt="Yeabsera Getachew — Full Stack, Android, and 3D Developer based in Addis Abeba"
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover border-2 border-accent/40 shadow-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium mb-5">
              <MapPin size={14} aria-hidden="true" />
              <span>Addis Abeba, Ethiopia</span>
            </div>

            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-5">
              I'm <strong className="text-[var(--color-text)]">Yeabsera Getachew</strong>, a passionate
              Full Stack Developer with hands-on experience building web applications, Android apps,
              and 3D experiences. I love turning complex problems into clean, intuitive solutions.
            </p>

            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
              From AI-powered platforms that assist medical professionals, to fleet management systems
              and car dealership apps, I bring a versatile skill set and a drive for continuous
              learning to every project I take on.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="card flex items-center gap-3 p-4"
                >
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <Icon size={20} className="text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text)]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
