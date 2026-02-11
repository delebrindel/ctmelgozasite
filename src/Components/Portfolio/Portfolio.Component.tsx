import { PORTFOLIO_DATA } from "../../Global/Data";
import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export const Portfolio = () => {
  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-mono font-bold text-white mb-4">
          <span className="text-neon-pink">ls</span> <span className="text-neon-cyan">-la</span> <span className="text-neon-purple">./projects</span>
        </h2>
        <p className="text-gray-400">
          Selected works and contributions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.map((project) => (
          <div 
            key={project.id} 
            className="group bg-term-card border border-term-border rounded-lg overflow-hidden flex flex-col hover:border-neon-cyan transition-all duration-300 hover:shadow-[0_0_15px_rgba(88,166,255,0.15)] relative"
          >
            {/* Window Title Bar */}
            <div className="bg-term-bg border-b border-term-border px-4 py-2 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-xs font-mono text-gray-500 truncate max-w-[150px]">
                {project.id}.tsx
              </span>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                {project.status === 'in-progress' && (
                  <span className="text-[10px] font-mono border border-neon-pink/50 text-neon-pink px-2 py-0.5 rounded">
                    WIP
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-mono text-neon-purple">
                    #{tech}
                  </span>
                ))}
              </div>

              {/* Actions Footer */}
              <div className="flex gap-4 pt-4 border-t border-term-border">
                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span className="font-mono text-xs">Source</span>
                  </a>
                ) : (
                   <span className="flex items-center gap-2 text-sm text-gray-600 cursor-not-allowed" title="Private Repository">
                    <CodeBracketIcon className="w-5 h-5" />
                    <span className="font-mono text-xs">Private</span>
                  </span>
                )}
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon-green transition-colors"
                  >
                    <GlobeAltIcon className="w-5 h-5" />
                    <span className="font-mono text-xs">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
            
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>
    </main>
  );
};
