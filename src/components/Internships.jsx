import { internshipsList } from '../data/portfolioData';

// Subcomponent: InternshipCard
export const InternshipCard = ({ intern, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration and Mini Badge */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <span className="font-mono text-white/40 uppercase text-xs tracking-wider">
            {intern.duration}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] uppercase font-bold tracking-widest">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-4 tracking-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-bold tracking-wider mt-1">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        <div className="mt-6">
          <span className="text-xs uppercase tracking-widest text-white/50 font-bold block mb-3">
            Skills Gained:
          </span>
          <ul className="space-y-2 text-sm text-white/80">
            {intern.skills.map((skill, sIdx) => (
              <li key={sIdx} className="flex items-start">
                <span className="text-white/40 mr-2 select-none">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies: Row of Mono Pills */}
      <div className="mt-8 pt-4 border-t border-white/10">
        <span className="text-xs uppercase tracking-widest text-white/50 font-bold block mb-3">
          Technologies:
        </span>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t, tIdx) => (
            <span
              key={tIdx}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component: Internships
const Internships = () => {
  if (!internshipsList || internshipsList.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-Paper SVG divider along the top edge */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180 -translate-y-[1px] pointer-events-none"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Decorative Pulsing Black Star (bottom-left at 20% opacity) */}
      <svg
        className="absolute bottom-8 left-8 w-10 h-10 fill-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 text-base md:text-lg">
          Hands-on technical internships and industry experience solving real-world development challenges.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {internshipsList.map((intern, index) => (
          <InternshipCard key={index} intern={intern} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Internships;
