import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Menu from "./components/Menu";
import MegaDeal from "./components/MegaDeal";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Menu />
        <MegaDeal />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
