import PageLoadGate from "../components/PageLoadGate";
import Company from "../components/home/Company";
import Magazine from "../components/home/Magazine";
import Offer from "../components/home/Offer";
import Showcase from "../components/home/Showcase";
import VideoFrame from "../components/home/VideoFrame";

export default function Home() {
  return (
    <PageLoadGate className="w-full">
     <VideoFrame/>
      <Offer />
      <Magazine />
      <Company />
      <Showcase />
    </PageLoadGate>
  );
}
