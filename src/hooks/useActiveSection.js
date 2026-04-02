import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0,
    };

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds]);

  return activeSection;
}
