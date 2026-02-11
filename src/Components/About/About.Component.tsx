import { useEffect, useState } from "react";
import { SOCIAL } from "../../Global/Constants.Enum";

const ROLES = [
  "Senior Full Stack Developer",
  "Frontend Architect",
  "Technical Lead",
  "Creative Technologist",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const tick = () => {
      const fullText = ROLES[roleIndex];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(30); // Faster deletion
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(1000); // Pause at end
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setDelta(200); // Pause before typing new role
      }
    };

    const ticker = setTimeout(tick, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, roleIndex, delta]);

  return (
    <span className="border-r-4 border-neon-pink pr-1 animate-pulse text-neon-cyan">
      {text}
    </span>
  );
};

export function About() {
  return (
    <main className="min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & Intro */}
        <div className="flex flex-col gap-4 lg:gap-6 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-1 lg:space-y-2">
            <p className="font-mono text-neon-green text-xs sm:text-sm tracking-widest">
              &gt; HELLO_WORLD
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              I'm <span className="text-gray-300">Cristóbal Torres</span>
            </h1>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-mono text-gray-400 h-8">
              <Typewriter />
            </h2>
          </div>

          <div className="bg-term-card border border-term-border rounded-lg p-4 lg:p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple/50 group-hover:bg-neon-purple transition-colors"></div>
            <p className="font-sans text-gray-300 leading-relaxed text-base lg:text-lg">
              I provide <span className="text-neon-pink font-semibold">bespoke solutions</span> tailored to company needs.
              Specializing in crafting reusable, component-centric frameworks and architecting robust back-office systems.
              Based in <span className="text-white font-mono">México</span>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start mt-2 lg:mt-4">
            {SOCIAL.map((socialItem) => (
              <a
                key={socialItem.alt}
                href={socialItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 bg-term-card border border-term-border rounded-md hover:border-neon-cyan hover:shadow-[0_0_10px_rgba(88,166,255,0.3)] transition-all duration-300 group"
              >
                <img
                  src={socialItem.icon}
                  alt={socialItem.alt}
                  className="w-5 h-5 transition-transform group-hover:scale-110 whiteImage"
                />
                <span className="font-mono text-sm text-gray-400 group-hover:text-white">
                  {socialItem.alt}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            {/* Decorative back layers */}
            <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
            <div className="absolute inset-0 bg-neon-pink/20 rounded-2xl transform -rotate-6 transition-transform group-hover:-rotate-12"></div>
            
            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-term-border shadow-2xl bg-term-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-term-bg/80 to-transparent z-10"></div>
              <img
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                src="/profile.jpg"
                alt="Cristóbal Torres"
              />
            </div>
            
            {/* Floating Badge */}
             <div className="absolute -bottom-4 -right-4 bg-term-bg border border-neon-green px-4 py-1 rounded-full shadow-lg z-20">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                    <span className="text-xs font-mono text-neon-green">OPEN_TO_WORK</span>
                </span>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
