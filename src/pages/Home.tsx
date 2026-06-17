import Company from "../components/home/Company";
import Hero from "../components/home/Hero";
import Offer from "../components/home/Offer";
import Showcase from "../components/home/Showcase";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <Offer />
      <Company />
      <Showcase />
    </div>
  );
}
