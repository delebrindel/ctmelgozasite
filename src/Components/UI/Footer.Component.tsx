import React from "react";
import { SOCIAL } from "../../Global/Constants.Enum";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-term-bg border-t border-term-border mt-0">
      {/* Ensure footer content isn't overlapped by the fixed mobile nav */}
      <div className="max-w-7xl mx-auto px-6 py-6 pb-24 md:pb-4 flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:justify-between">
        {/* Mobile: stacked rows so center icons are always centered under copyright */}
        <div className="w-full md:w-auto">
          <div className="text-sm text-slate-400">© {year} Cristóbal Torres</div>
        </div>

        <div className="w-full md:w-auto">
          <div className="flex items-center justify-center gap-6">
            <a href="/cv.pdf" className="text-sm text-slate-300 hover:text-white">CV (PDF)</a>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <div className="flex items-center justify-center gap-4">
            {SOCIAL.slice(0,3).map((socialItem) => (
              <a
                key={socialItem.alt}
                href={socialItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 bg-term-card border border-term-border rounded-md hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(88,166,255,0.3)] transition-all duration-300 group"
              >
                <img
                  src={socialItem.icon}
                  alt={socialItem.alt}
                  className="w-5 h-5 transition-transform group-hover:scale-110 whiteImage"
                />
                <span className="sr-only">{socialItem.alt}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
