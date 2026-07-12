import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Research } from "./components/Research";
import { Universe } from "./components/Universe";
import { LiveSignals } from "./components/LiveSignals";
import { Screenshots } from "./components/Screenshots";
import { TechStack } from "./components/TechStack";
import { PrivacyNotice } from "./components/PrivacyNotice";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <HowItWorks />
        <Research />
        <Universe />
        <LiveSignals />
        <Screenshots />
        <TechStack />
        <PrivacyNotice />
      </main>
      <Footer />
    </>
  );
}
