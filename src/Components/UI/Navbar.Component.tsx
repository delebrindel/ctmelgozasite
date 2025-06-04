import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAppStore } from "../../Global/App.Store";
import { ROUTES } from "../../Global/Constants.Enum";

const initialNavigation = [
  { name: "About Me", route: ROUTES.ABOUT },
  { name: "Portfolio", route: ROUTES.PORTFOLIO },
  { name: "Curriculum", route: ROUTES.CV },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const { currentRoute, changeRoute } = useAppStore();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              Cristóbal Torres | Web Dev
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {initialNavigation.map((item) => (
                  <span
                    key={item.name}
                    onClick={() => changeRoute(item.route)}
                    className={classNames(
                      currentRoute === item.route
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {initialNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              className={classNames(
                currentRoute === item.route
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              onClick={() => changeRoute(item.route)}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
