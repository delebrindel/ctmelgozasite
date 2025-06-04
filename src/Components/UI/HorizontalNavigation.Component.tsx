import React from "react";
import { useAppStore } from "../../Global/App.Store";
import { NAVIGATION } from "./Navbar.Component";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const HorizontalNavigation: React.FC = () => {
  const { changeRoute, currentRoute } = useAppStore();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-blue-950 shadow-md z-50 block md:hidden">
      <ul className="flex justify-center gap-3 items-center py-3 m-0">
        {NAVIGATION.map((link) => (
          <li
            key={link.route}
            className={classNames(
              currentRoute === link.route
                ? "font-bold"
                : "font-light",
              "text-gray-200 flex-col items-center content-center text-base w-1/3 display-flex"
            )}
            onClick={() => changeRoute(link.route)}
          >
            <figure className="w-full flex justify-center">{link.icon}</figure>
            <p className="w-full text-center">{link.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HorizontalNavigation;
