import HorizontalNavigation from "./Components/UI/HorizontalNavigation.Component";
import { Navbar } from "./Components/UI/Navbar.Component";
import { Router } from "./Components/UI/Router.Component";
import Footer from "./Components/UI/Footer.Component";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <HorizontalNavigation />
      <Footer />
    </>
  );
}

export default App;
