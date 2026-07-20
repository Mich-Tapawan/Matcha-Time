import VideoFrame from "../components/about/VideoFrame";
import OriginContainer from "../components/about/OriginContainer";
import WhiskRitualContainer from "../components/about/WhishRitualContainer";
import MeaningContainer from "../components/about/MeaningContainer";

export default function About() {
  return (
    <div className="w-full">
      <VideoFrame />
      <OriginContainer />
      <WhiskRitualContainer />
      <MeaningContainer />
    </div>
  );
}

