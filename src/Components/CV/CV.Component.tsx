import { EXPERIENCE_DATA, CORE_SKILLS } from "../../Global/Data";

export function CV() {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-3xl font-mono font-bold text-white mb-4">
          <span className="text-neon-pink">const</span> <span className="text-neon-cyan">experience</span> = <span className="text-neon-purple">['History']</span>;
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Senior Full Stack Web Developer with 10+ years of experience building, scaling, and maintaining production web applications for remote-first teams.
        </p>
      </div>

      {/* Skills "Terminal" Block */}
      <div className="mb-20 bg-term-card border border-term-border rounded-lg p-6 font-mono text-sm shadow-xl">
        <div className="flex gap-2 mb-4 border-b border-term-border pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-2 text-gray-500 text-xs">skills.json</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CORE_SKILLS.map((skill) => (
            <div key={skill} className="flex items-center gap-2 group cursor-default">
              <span className="text-neon-purple opacity-50 group-hover:opacity-100">"</span>
              <span className="text-neon-green group-hover:text-white transition-colors">{skill}</span>
              <span className="text-neon-purple opacity-50 group-hover:opacity-100">"</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-term-border ml-3 md:ml-6 space-y-16">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={job.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-term-bg ${index === 0 ? 'bg-neon-green animate-pulse' : 'bg-term-border group-hover:bg-neon-cyan'} transition-colors duration-300`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                {job.role}
              </h3>
              <span className="text-neon-pink font-mono text-sm">@ {job.company}</span>
            </div>
            
            <p className="font-mono text-xs text-gray-500 mb-4 bg-term-card/50 inline-block px-2 py-1 rounded">
              {job.period}
            </p>

            <ul className="space-y-2 mb-4">
              {job.description.map((desc, i) => (
                <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-neon-purple mt-1.5 text-xs">➜</span>
                  {desc}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.stack.map((tech) => (
                <span key={tech} className="px-2 py-1 text-xs font-mono border border-term-border rounded text-gray-400 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
