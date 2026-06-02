import {
  Disclosure,
} from "@headlessui/react";
import { getCookie, setCookie } from "../../lib/cookies";
import {
  BriefcaseIcon,
  ClipboardIcon,
  UserIcon
} from "@heroicons/react/24/outline";
import { useAppStore } from "../../Global/App.Store";
import { ROUTES } from "../../Global/Constants.Enum";

export const NAVIGATION = [
  { name: "About Me", route: ROUTES.ABOUT, icon: <UserIcon height={24} /> },
  {
    name: "Portfolio",
    route: ROUTES.PORTFOLIO,
    icon: <BriefcaseIcon height={24} />,
  },
  { name: "Curriculum", route: ROUTES.CV, icon: <ClipboardIcon height={24} /> },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const { currentRoute, changeRoute } = useAppStore();

  const switchLang = (lang: 'en' | 'es') => {
    setCookie('site_lang', lang);
    if (lang === 'es' && !window.location.pathname.startsWith('/es')) {
      window.location.pathname = '/es' + window.location.pathname;
    }
    if (lang === 'en' && window.location.pathname.startsWith('/es')) {
      window.location.pathname = window.location.pathname.replace(/^\/es/, '') || '/';
    }
  }

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-term-bg/80 border-b border-term-border">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center font-mono font-bold text-lg tracking-tight text-white">
              <span className="text-neon-purple mr-2">&lt;</span>
              Cristóbal Torres
              <span className="text-neon-purple ml-2">/&gt;</span>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {NAVIGATION.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => changeRoute(item.route)}
                    className={classNames(
                      currentRoute === item.route
                        ? "text-neon-cyan border-b-2 border-neon-cyan bg-term-card/50"
                        : "text-gray-400 hover:text-neon-pink hover:bg-term-card/30",
                      "rounded-t-md px-3 py-2 text-sm font-mono font-medium transition-all duration-200 ease-in-out"
                    )}
                  >
                    <span className="mr-1 opacity-50 text-xs">0{NAVIGATION.indexOf(item) + 1}.</span>
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center sm:gap-2">
              <button onClick={() => switchLang('en')} className={getCookie('site_lang') === 'en' || !window.location.pathname.startsWith('/es') ? 'px-2 py-1 rounded bg-term-card/60 text-white text-sm' : 'px-2 py-1 rounded text-gray-400 text-sm cursor-pointer'}>EN</button>
              <button onClick={() => switchLang('es')} className={window.location.pathname.startsWith('/es') || getCookie('site_lang') === 'es' ? 'px-2 py-1 rounded bg-term-card/60 text-white text-sm' : 'px-2 py-1 rounded text-gray-400 text-sm cursor-pointer'}>ES</button>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
