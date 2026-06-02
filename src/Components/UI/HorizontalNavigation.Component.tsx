import React from "react";
import { getCookie, setCookie } from "../../lib/cookies";
import { useAppStore } from "../../Global/App.Store";
import { NAVIGATION } from "./Navbar.Component";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const HorizontalNavigation: React.FC = () => {
  const { changeRoute, currentRoute } = useAppStore();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 block md:hidden backdrop-blur-md bg-term-bg/90 border-t border-term-border">
      <ul className="flex justify-around items-center h-16 m-0 px-2">
        {NAVIGATION.map((link) => {
          const isActive = currentRoute === link.route;
          return (
            <li
              key={link.route}
              className={classNames(
                isActive
                  ? "text-neon-cyan"
                  : "text-gray-500 hover:text-gray-300",
                "flex-1 flex flex-col items-center justify-center h-full transition-colors duration-200 cursor-pointer active:scale-95"
              )}
              onClick={() => changeRoute(link.route)}
            >
              <figure className={`w-6 h-6 mb-1 ${isActive ? "drop-shadow-[0_0_8px_rgba(88,166,255,0.6)]" : ""}`}>
                {link.icon}
              </figure>
              <p className="text-[10px] font-mono tracking-wider uppercase">
                {link.name}
              </p>
              
              {/* Active Indicator Dot */}
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-neon-cyan shadow-[0_0_5px_#58a6ff]"></span>
              )}
            </li>
          );
        })}
        {/* Mobile language switcher */}
        <li className="flex items-center gap-2">
          <button
            onClick={() => {
              setCookie('site_lang','en');
              if (window.location.pathname.startsWith('/es')) {
                window.location.pathname = window.location.pathname.replace(/^\/es/, '') || '/';
              } else {
                // refresh to apply
                window.location.reload();
              }
            }}
            className={getCookie('site_lang') === 'en' || !window.location.pathname.startsWith('/es') ? 'px-2 py-1 rounded bg-term-card/60 text-white text-sm' : 'px-2 py-1 rounded text-gray-400 text-sm cursor-pointer'}
          >EN</button>
          <button
            onClick={() => {
              setCookie('site_lang','es');
              if (!window.location.pathname.startsWith('/es')) {
                window.location.pathname = '/es' + window.location.pathname;
              } else {
                window.location.reload();
              }
            }}
            className={window.location.pathname.startsWith('/es') || getCookie('site_lang') === 'es' ? 'px-2 py-1 rounded bg-term-card/60 text-white text-sm' : 'px-2 py-1 rounded text-gray-400 text-sm cursor-pointer'}
          >ES</button>
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalNavigation;
