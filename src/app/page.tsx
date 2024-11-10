import Features from "../components/Features";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Download from "../components/Download";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Blog />
      <Download />
      <Contact />
    </div>
  );
}
