import { BriefcaseIcon, ClipboardIcon, UserIcon } from "@heroicons/react/24/outline";
import { ROUTES } from "./Constants.Enum";

export const NAVIGATION = [
  { name: "About Me", route: ROUTES.ABOUT, icon: <UserIcon height={24} /> },
  {
    name: "Portfolio",
    route: ROUTES.PORTFOLIO,
    icon: <BriefcaseIcon height={24} />,
  },
  { name: "Curriculum", route: ROUTES.CV, icon: <ClipboardIcon height={24} /> },
];
