import PageLoadGate from "../components/PageLoadGate";
import PageMeta from "../components/PageMeta";
import OriginContainer from "../components/about/OriginContainer";
import WhiskRitualContainer from "../components/about/WhishRitualContainer";
import MeaningContainer from "../components/about/MeaningContainer";
import TeamContainer from "../components/about/TeamContainer";
import Hero from "../components/about/Hero";
import { pageSeo } from "../data/seo";

export default function About() {
  return (
    <PageLoadGate className="w-full">
      <PageMeta seo={pageSeo.about} />
      <Hero />
      <OriginContainer />
      <WhiskRitualContainer />
      <MeaningContainer />
      <TeamContainer />
    </PageLoadGate>
  );
}
