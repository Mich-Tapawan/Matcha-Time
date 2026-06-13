import matchaBg from "../../assets/matcha-bg.png";
import DualText from "./DualText";

export default function Hero() {
  return (
    <div
      className="w-full min-h-192 bg-cover bg-center bg-no-repeat text-white place-content-center px-4 lg:place-content-end lg:px-20 lg:pb-10"
      style={{ backgroundImage: `url(${matchaBg})` }}
    >
      <p className="text-center">
        Japanese aesthetics of taste and tranquility
      </p>
      <h1 className="text-center">WE ARE MATCHA TIME</h1>
      <div className="flex w-full justify-between">
        <DualText text1="naturally" text2="healthy" />
        <DualText text1="culture" text2="aesthetic" />
      </div>
    </div>
  );
}
