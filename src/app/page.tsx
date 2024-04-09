import CardSection from "@/components/home/cards-section";
import Header from "@/components/_layout/header";
import HeroClients from "@/components/home/hero-clients";
import HeroSection from "@/components/home/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CardSection />
      <HeroClients />
    </main>
  );
}
