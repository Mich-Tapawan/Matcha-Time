import PageLoadGate from "../components/PageLoadGate";
import OriginContainer from "../components/about/OriginContainer";
import WhiskRitualContainer from "../components/about/WhishRitualContainer";
import MeaningContainer from "../components/about/MeaningContainer";
import TeamContainer from "../components/about/TeamContainer";
import Hero from "../components/about/Hero";

export default function About() {
  return (
    <PageLoadGate className="w-full">
      <Hero/>
      <OriginContainer />
      <WhiskRitualContainer />
      <MeaningContainer />
      <TeamContainer />
    </PageLoadGate>
  );
}
