import { About } from "~/Components/About/About.Component";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cristobal Torres, Developer" },
    {
      name: "description",
      content:
        "Cristobal Torres, developer portfolio. A place where I showcase my work and coding style.",
    },
  ];
}

export default function Home() {
  return <About />;
}
