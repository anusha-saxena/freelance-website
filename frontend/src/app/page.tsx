import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Capabilties from "../components/Capabilities";
import Toggle from "../components/toggle";
import Connect from "../components/connect";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Toggle/>
      <Capabilties />
      <Connect />
    </div>
  );
}
//commit