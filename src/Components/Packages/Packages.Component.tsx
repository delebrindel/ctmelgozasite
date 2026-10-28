import { lazy, Suspense, useEffect, useState, type FC, type ReactElement } from "react";
import { isSpanishPath } from "../../lib/locale";
import { loadLocaleStrings } from "../../lib/useLocale";

const ProjectChatWidget = lazy(() => import("../Widgets/ProjectChat.Widget"));

interface PackageTierContent {
  name: string;
  time: string;
  desc: string;
  bullets?: string[];
}

interface PackagesContent {
  packages?: {
    title?: string;
    intro?: string;
    tiers?: PackageTierContent[];
  };
}

interface TierProps {
  title: string;
  time: string;
  desc: string;
  bullets: string[];
  cta?: string;
  containerClass?: string;
  dark?: boolean;
  onCta?: () => void;
}

const Tier: FC<TierProps> = ({
  title,
  time,
  desc,
  bullets,
  cta,
  containerClass,
  dark = false,
  onCta,
}) => {
  const baseClasses = containerClass
    ? `${containerClass} max-w-sm p-6 rounded-xl flex flex-col justify-between h-full min-h-[360px]`
    : "max-w-sm p-6 rounded-xl border border-slate-700 flex flex-col justify-between h-full min-h-[360px]";

  return (
    <div className={baseClasses}>
      <h3 className="text-xl font-semibold mt-3">
        <div className="leading-tight text-current">{title}</div>
        <div className="text-sm font-medium mt-1 text-current/70">{time}</div>
      </h3>
      <p className="mt-2 text-current/80">{desc}</p>
      <ul className="mt-3 space-y-2 flex-1 text-current/80">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <div className="mt-4">
        {onCta ? (
          dark ? (
            <button onClick={onCta} className="inline-block px-4 py-2 rounded-lg bg-white text-indigo-900 font-medium">{cta}</button>
          ) : (
            <button onClick={onCta} className="inline-block px-4 py-2 rounded-lg bg-indigo-900 text-white font-medium">{cta}</button>
          )
        ) : (
          dark ? (
            <a className="inline-block px-4 py-2 rounded-lg bg-white text-indigo-900 font-medium" href="#contact">{cta}</a>
          ) : (
            <a className="inline-block px-4 py-2 rounded-lg bg-indigo-900 text-white font-medium" href="#contact">{cta}</a>
          )
        )}
      </div>
    </div>
  );
};

export default function Packages(): ReactElement {
  const isEs = isSpanishPath();
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [content, setContent] = useState<PackagesContent["packages"] | null>(null);
  const [statsRevealed, setStatsRevealed] = useState(false);

  useEffect(() => {
    let toastTimer: number | undefined;
    const handler = () => {
      setToast(isSpanishPath() ? "Lead enviado — ¡gracias!" : "Lead sent — thank you!");
      setOpen(false);
      clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => setToast(null), 2400);
    };
    window.addEventListener("projectChat:sent", handler);
    return () => {
      window.removeEventListener("projectChat:sent", handler);
      clearTimeout(toastTimer);
    };
  }, []);

  useEffect(() => {
    let active = true;
    loadLocaleStrings<PackagesContent>("packages")
      .then((data) => {
        if (active && data?.packages) setContent(data.packages);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  // reveal stats with a small delay after mount to allow CSS transition (simple load-time reveal)
  useEffect(() => {
    const t = setTimeout(() => setStatsRevealed(true), 250);
    return () => clearTimeout(t);
  }, []);

  if (!content) {
    // Render neutral placeholder to avoid flash of default English text
    return (
      <section className="bg-white mx-auto py-16 my-8" id="packages">
        <div className="max-w-7xl mx-auto text-center px-8 sm:px-0">
          <div style={{ height: 160 }} aria-hidden></div>
        </div>
      </section>
    );
  }

  const tiers: TierProps[] = (content.tiers ?? []).map((t) => ({
    title: t.name,
    time: t.time,
    desc: t.desc,
    bullets: t.bullets ?? [],
  }));
  const ctaLabel = isEs ? "Cuéntame más" : "Tell me more";

  const stats = [
    { label: isEs ? "años de experiencia" : "years of experience", value: "15+" },
    { label: isEs ? "de proyectos entregados" : "of projects delivered", value: isEs ? "Decenas" : "Dozens" },
    {
      label: isEs ? "Experiencia liderando equipos y arquitectura de software" : "Experience leading teams & software architecture",
      value: isEs ? "Liderazgo" : "Leadership",
    },
  ];

  return (
    <section className="bg-white mx-auto py-16 mt-8" id="packages">
      <div className="max-w-7xl mx-auto text-center px-8 sm:px-0">
        <h2 className="text-3xl text-indigo-950 font-semibold">
          {content.title ?? "Outcome tiers — choose the pace and scope"}
        </h2>
        <p className="text-slate-700 mt-2">
          {content.intro ??
            "Transparent scopes to help you self‑select the right engagement model."}
        </p>
        <div className="flex flex-wrap justify-between mt-6 gap-3">
          {tiers.map((t, i) => {
            // Use a colored column background pattern: purple, white, purple
            const isDark = i % 2 === 0;
            const isMiddle = i === 1;
            const bgClass = isDark ? "bg-indigo-900 text-white" : "bg-white text-slate-900";
            const borderClass = isMiddle ? "border border-slate-200" : "border-0";
            return (
              <Tier
                key={i}
                {...t}
                cta={ctaLabel}
                containerClass={`${borderClass} ${bgClass}`}
                dark={isDark}
                onCta={() => setOpen(true)}
              />
            );
          })}
        </div>
        {open && (
          <div className="modal-backdrop">
            <div className="modal">
              <button className="modal-close" onClick={() => setOpen(false)}>×</button>
              <Suspense fallback={null}>
                <ProjectChatWidget />
              </Suspense>
            </div>
          </div>
        )}
        {toast && (
          <div className="fixed left-1/2 transform -translate-x-1/2 bottom-8 bg-black text-white px-4 py-2 rounded shadow">
            {toast}
          </div>
        )}
      </div>
      {/* Small stats row under packages */}
      <div className="max-w-7xl mx-auto mt-8 px-8 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {stats.map((item, i) => (
            <div key={i} className="py-4">
              <div
                className={`transform transition-all duration-500 ${statsRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="text-2xl font-bold text-violet-800">{item.value}</div>
                <div className="text-sm text-slate-700">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
