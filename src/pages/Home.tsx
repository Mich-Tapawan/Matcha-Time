import Company from "../components/home/Company";
import Hero from "../components/home/Hero";
import Magazine from "../components/home/Magazine";
import Offer from "../components/home/Offer";
import Showcase from "../components/home/Showcase";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <Offer />
      <Magazine />
      <Company />
      <Showcase />
    </div>
  );
}
