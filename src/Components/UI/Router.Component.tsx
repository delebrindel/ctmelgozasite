import { useAppStore } from "../../Global/App.Store";
import { ROUTES } from "../../Global/Constants.Enum";
import { About } from "../About/About.Component";
import { CV } from "../CV/CV.Component";

export const Router = () => {
  const { currentRoute } = useAppStore();
  return (
    <div className="my-15 ">
      {currentRoute === ROUTES.ABOUT && <About />}
      {currentRoute === ROUTES.PORTFOLIO && <CV />}
      {currentRoute === ROUTES.CV && <CV />}
    </div>
  );
};
