import PageLoadGate from "../components/PageLoadGate";
import VideoFrame from "../components/about/VideoFrame";
import OriginContainer from "../components/about/OriginContainer";
import WhiskRitualContainer from "../components/about/WhishRitualContainer";
import MeaningContainer from "../components/about/MeaningContainer";
import TeamContainer from "../components/about/TeamContainer";

export default function About() {
  return (
    <PageLoadGate className="w-full">
      <VideoFrame />
      <OriginContainer />
      <WhiskRitualContainer />
      <MeaningContainer />
      <TeamContainer />
    </PageLoadGate>
  );
}
