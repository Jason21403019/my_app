import Navbar from "@/components/Navbar";
import Text from "../components/Text";
import { HeroParallax } from "@/components/ui/hero-parallax";
export default function Home() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
      <main className="container">
        <section className="home__container"></section>
        {/* <Text /> */}
        <HeroParallax />
      </main>
    </>
  );
}
