import PageLoadGate from "../components/PageLoadGate";
import PageMeta from "../components/PageMeta";
import Company from "../components/home/Company";
import Magazine from "../components/home/Magazine";
import Offer from "../components/home/Offer";
import Showcase from "../components/home/Showcase";
import VideoFrame from "../components/home/VideoFrame";
import { pageSeo } from "../data/seo";

export default function Home() {
  return (
    <PageLoadGate className="w-full">
      <PageMeta seo={pageSeo.home} />
      <VideoFrame />
      <Offer />
      <Magazine />
      <Company />
      <Showcase />
    </PageLoadGate>
  );
}
