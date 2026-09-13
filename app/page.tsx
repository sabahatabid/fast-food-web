import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import Ticker from "./components/home/Ticker";
import FeaturedCategories from "./components/home/FeaturedCategories";
import BestSellers from "./components/home/BestSellers";
import PopularDeals from "./components/home/PopularDeals";
import WhyChoose from "./components/home/WhyChoose";
import Reviews from "./components/home/Reviews";
import Locations from "./components/home/Locations";
import GalleryPreview from "./components/home/GalleryPreview";

export default function Home() {
  return (
    <div className="page-enter">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <FeaturedCategories />
        <BestSellers />
        <PopularDeals />
        <WhyChoose />
        <Reviews />
        <Locations />
        <GalleryPreview />
      </main>
      <Footer />
    </div>
  );
}
