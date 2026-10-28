import { useEffect, useState } from "react";
import { loadLocaleStrings } from "../../lib/useLocale";
import { currentLocale, isSpanishPath, type Locale } from "../../lib/locale";
import { SOCIAL } from "../../Global/Constants.Enum";

// Fallback typewriter phrase when the localized content has no hero roles
const DEFAULT_ROLES: Record<Locale, string> = {
  es: "Ayudo a empresas a construir y escalar productos digitales.",
  en: "I help companies build and scale digital products.",
};

interface AboutContent {
  about?: {
    heading?: string;
    intro?: string;
    roles?: string[];
  };
  hero?: {
    roles?: string[];
  };
}

interface HomeContent {
  hero?: {
    sub?: string;
  };
}

const Typewriter = ({ phrase }: { phrase: string }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const tick = () => {
      const updatedText = isDeleting
        ? phrase.substring(0, text.length - 1)
        : phrase.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(30); // Faster deletion
      }

      if (!isDeleting && updatedText === phrase) {
        setIsDeleting(true);
        setDelta(1000); // Pause at end
      } else if (isDeleting && updatedText === "") {
        // single-phrase behavior: restart typing the same phrase (no cycle)
        setIsDeleting(false);
        setDelta(200); // Pause before typing again
      }
    };

    const ticker = setTimeout(tick, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, delta, phrase]);

  return (
    <span className="border-r-4 border-neon-pink pr-1 animate-pulse text-neon-cyan">
      {text}
    </span>
  );
};

export function About() {
  const [content, setContent] = useState<{ about: AboutContent | null; home: HomeContent | null } | null>(null);

  useEffect(() => {
    let mounted = true;
    // load about and home strings so this view can act as the site hero
    Promise.all([
      loadLocaleStrings<AboutContent>("about").catch(() => null),
      loadLocaleStrings<HomeContent>("home").catch(() => null),
    ]).then(([about, home]) => {
      if (mounted) setContent({ about, home });
    });
    return () => {
      mounted = false;
    };
  }, []);

  const isEs = isSpanishPath();
  const heading = content?.about?.about?.heading;
  const intro = content?.about?.about?.intro;
  // Prefer localized hero roles, fall back to about.roles if present
  const roles = content?.about?.hero?.roles ?? content?.about?.about?.roles;
  const homeSub = content?.home?.hero?.sub;
  const phrase = roles?.[0] ?? DEFAULT_ROLES[currentLocale()];

  return (
    <main className="flex items-start justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* Left Column: Text & Intro */}
        <div className="flex flex-col gap-4 lg:gap-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-1 lg:space-y-2">
            <p className="font-mono text-neon-green text-xs sm:text-sm tracking-widest">
              &gt; HELLO_WORLD
            </p>
            {content ? (
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                <span dangerouslySetInnerHTML={{ __html: heading ?? `I'm <span class="text-gray-300">Cristóbal Torres</span>` }} />
              </h1>
            ) : (
              <div style={{ height: 48 }} aria-hidden></div>
            )}
            <h2 className="text-lg sm:text-lg lg:text-xl font-mono text-gray-400 sm:h-10 lg:h-12">
              {content && <Typewriter phrase={phrase} />}
            </h2>
          </div>

          <div className="bg-term-card border border-term-border rounded-lg p-4 lg:p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple/50 group-hover:bg-neon-purple transition-colors"></div>
            {content ? (
              <p className="font-sans text-gray-300 leading-relaxed text-base lg:text-lg">
                {homeSub ? <span>{homeSub}</span> : (intro ? <span dangerouslySetInnerHTML={{ __html: intro }} /> : (
                  <>I provide <span className="text-neon-pink font-semibold">bespoke solutions</span> tailored to company needs. Specializing in crafting reusable, component-centric frameworks and architecting robust back-office systems. Based in <span className="text-white font-mono">México</span>.</>
                ))}
              </p>
            ) : (
              <div style={{ height: 72 }} aria-hidden></div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 lg:gap-4 justify-center lg:justify-start mt-3 lg:mt-5">
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
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 group">
            {/* Decorative back layers */}
            <div className="absolute inset-0 bg-neon-cyan/20 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
            <div className="absolute inset-0 bg-neon-pink/20 rounded-2xl transform -rotate-6 transition-transform group-hover:-rotate-12"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-term-border shadow-2xl bg-term-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-term-bg/80 to-transparent z-10"></div>
              <img
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                src="/assets/img/mascot.png"
                alt="Cristóbal Torres"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-3 -right-3 bg-term-bg border border-neon-green px-3 py-1 rounded-full shadow-lg z-20">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                <span className="text-xs font-mono text-neon-green">{isEs ? "Disponible" : "Available"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
