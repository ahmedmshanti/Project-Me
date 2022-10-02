import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Section from "./Component/Details";
import "./resources/style.css"
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
    </>
  );
};
export default MainLayout;
