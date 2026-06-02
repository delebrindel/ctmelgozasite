import { AboutView } from "../../Containers/About.View";
import { useAppStore } from "../../Global/App.Store";
import { ROUTES } from "../../Global/Constants.Enum";
import { CV } from "../CV/CV.Component";
import { Portfolio } from "../Portfolio/Portfolio.Component";

export const Router = () => {
  const { currentRoute } = useAppStore();
  return (
    <div className="mt-15 ">
      {currentRoute === ROUTES.ABOUT && (
        <AboutView />
      )}
      {currentRoute === ROUTES.PORTFOLIO && <Portfolio />}
      {currentRoute === ROUTES.CV && <CV />}
    </div>
  );
};
