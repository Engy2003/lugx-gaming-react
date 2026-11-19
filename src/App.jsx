import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import MostPlayed from "./components/MostPlayed";
import TopCategories from "./components/TopCategories";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrendingGames />
      <MostPlayed />
      <TopCategories />
      <CtaSection />
      <Footer />
    </main>
  );
}
