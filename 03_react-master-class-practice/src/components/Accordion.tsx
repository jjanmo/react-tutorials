import { useState } from 'react';
import { Link } from '@tanstack/react-router';

interface Section {
  id: string;
  title: string;
  links?: {
    label: string;
    href: string;
  }[];
}

interface Props {
  title: string;
  sections: Section[];
}

const Accordion = ({ title, sections }: Props) => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="min-w-0 flex-1">
      <h2 className="mb-4 text-lg font-semibold text-slate-700 border-b border-slate-200 pb-2">{title}</h2>
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
        {sections.map((section) => {
          const isOpen = openSections.has(section.id);

          return (
            <div key={section.id} className="border-b border-slate-100 last:border-b-0">
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className={`flex w-full items-center justify-between px-4 py-3 text-left text-slate-800 transition-colors border-l-2 ${
                  isOpen ? 'bg-sky-50 border-sky-400' : 'border-transparent hover:bg-slate-50'
                }`}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{section.title}</span>
                <span className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden>
                  ▼
                </span>
              </button>
              {isOpen && (
                <div
                  className="border-t border-slate-100 bg-slate-50/50 px-4 py-3"
                  role="region"
                  aria-label={`${section.title} 내용`}
                >
                  <div className="text-sm text-slate-500">
                    <ul className="space-y-1">
                      {section.links &&
                        section.links.length > 0 &&
                        section.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              to={link.href}
                              className="inline-flex w-full items-center rounded-md px-3 py-2 text-left text-slate-600 hover:text-sky-700 hover:bg-sky-50 hover:underline decoration-sky-400 underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-1 transition-colors"
                            >
                              <span className="font-medium">{link.label}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
