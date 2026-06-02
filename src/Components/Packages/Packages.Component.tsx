import React, { useEffect, useState } from "react";
import { loadLocaleStrings } from "../../lib/useLocale";

type TierProps = {
  title: string;
  time: string;
  desc: string;
  bullets: string[];
  featured?: boolean;
  cta?: string;
  containerClass?: string;
  dark?: boolean;
};

const Tier: React.FC<TierProps> = ({
  title,
  time,
  desc,
  bullets,
  featured = false,
  cta,
  containerClass,
  dark = false,
}) => {
  // keep featured for API compatibility; incorporate it into class when no containerClass is provided
  const baseClasses = containerClass
    ? `${containerClass} max-w-sm p-6 rounded-xl flex flex-col justify-between h-full min-h-[360px]`
    : `max-w-sm p-6 rounded-xl border flex flex-col justify-between h-full min-h-[360px] ${featured ? 'border-indigo-700' : 'border-slate-700'}`;

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
        {dark ? (
          <a className="inline-block px-4 py-2 rounded-lg bg-white text-indigo-900 font-medium" href="#contact">{cta}</a>
        ) : (
          <a className="inline-block px-4 py-2 rounded-lg bg-indigo-900 text-white font-medium" href="#contact">{cta}</a>
        )}
      </div>
    </div>
  );
};

export default function Packages(): React.ReactElement {
  const [page, setPage] = useState<{
    title?: string;
    intro?: string;
    tiers?: TierProps[];
    cta?: string;
  } | null>(null);
  const [tiersState, setTiersState] = useState<TierProps[] | null>(null);
  const [localeLoaded, setLocaleLoaded] = useState(false);
  const [statsRevealed, setStatsRevealed] = useState(false);

  useEffect(() => {
    loadLocaleStrings("packages")
      .then((data) => {
        if (data && data.packages) {
          const p = data.packages;
          // map tiers if present
          const mappedTiers = (p.tiers || []).map((t: any) => ({
            title: t.name,
            time: t.time,
            desc: t.desc,
            bullets: t.bullets || [],
          }));
          setPage({
            title: p.title,
            intro: p.intro,
            tiers: mappedTiers,
            cta: p.cta,
          });
          setTiersState(mappedTiers);

          // loaded
          setLocaleLoaded(true);
        }
      })
      .catch(() => {});
    // also load about to get global CTA fallback
    loadLocaleStrings("about")
      .then((a) => {
        if (a && a.about && a.about.primaryCta) {
          // if page-level CTA not set, this will be used via page?.cta fallback
          setPage((prev) => ({
            ...(prev || {}),
            cta: prev?.cta ?? a.about.primaryCta,
          }));
        }
      })
      .catch(() => {});
  }, []);

  // reveal stats with a small delay after mount to allow CSS transition (simple load-time reveal)
  useEffect(() => {
    const t = setTimeout(() => setStatsRevealed(true), 250);
    return () => clearTimeout(t);
  }, []);

  const tiers: TierProps[] = tiersState ?? [
    {
      title: "Prototype",
      time: "4–8 weeks",
      desc: "Validate product/feature quickly with a scoped MVP.",
      bullets: [
        "MVP scope & backlog",
        "Working prototype + tests",
        "Handoff docs",
      ],
    },
    {
      title: "Growth",
      time: "3–6 months",
      desc: "Deliver product improvements and increase conversions.",
      bullets: [
        "Feature sprints",
        "Conversion experiments",
        "Monitoring & CI/CD",
      ],
      featured: true,
    },
    {
      title: "Scale",
      time: "6+ months",
      desc: "Platform architecture, reliability, and ops.",
      bullets: [
        "Platform architecture",
        "Operational runbook",
        "Performance & security",
      ],
    },
  ];

  if (!localeLoaded) {
    // Render neutral placeholder to avoid flash of default English text
    return (
      <section className="bg-white mx-auto py-16 my-8" id="packages">
        <div className="max-w-7xl mx-auto text-center px-8 sm:px-0">
          <div style={{ height: 160 }} aria-hidden></div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white mx-auto py-16 mt-8" id="packages">
      <div className="max-w-7xl mx-auto text-center px-8 sm:px-0">
        <h2 className="text-3xl text-indigo-950 font-semibold">
          {page?.title ?? "Outcome tiers — choose the pace and scope"}
        </h2>
        <p className="text-slate-700 mt-2">
          {page?.intro ??
            "Transparent scopes to help you self‑select the right engagement model."}
        </p>
        <div className="flex flex-wrap justify-between mt-6 gap-3">
          {tiers.map((t, i) => {
            // Use a colored column background pattern: purple, white, purple
            const isEs =
              typeof window !== "undefined" &&
              window.location.pathname.startsWith("/es");
            const ctaLabel = isEs ? "Cuéntame más" : "Tell me more";
            // choose a background class based on index
            const isDark = i % 2 === 0;
            const isMiddle = i === 1; // middle item
            const bgClass = isDark ? 'bg-indigo-900 text-white' : 'bg-white text-slate-900';
            const borderClass = isMiddle ? 'border border-slate-200' : 'border-0';
            return <Tier key={i} {...t} cta={ctaLabel} containerClass={`${borderClass} ${bgClass}`} dark={isDark} />;
          })}
        </div>
      </div>
      {/* Small stats row under packages */}
      <div className="max-w-7xl mx-auto mt-8 px-8 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {(() => {
            const isEs = typeof window !== 'undefined' && window.location.pathname.startsWith('/es');
            return [
              {
                label: isEs ? 'años de experiencia' : 'years of experience',
                value: '15+',
              },
              {
                label: isEs ? 'de proyectos entregados' : 'of projects delivered',
                value: isEs ? 'Decenas' : 'Dozens',
              },
              {
                label: isEs ? 'Experiencia liderando equipos y arquitectura de software' : 'Experience leading teams & software architecture',
                value: isEs ? 'Liderazgo' : 'Leadership',
              },
            ].map((item, i) => (
              <div key={i} className="py-4">
                <div
                  className={`transform transition-all duration-500 ${statsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="text-2xl font-bold text-violet-800">{item.value}</div>
                  <div className="text-sm text-slate-700">{item.label}</div>
                </div>
              </div>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}
