import matchaBg from "../../assets/matcha-bg.png";

export default function Hero() {
  return (
    <div
      className="w-full min-h-192 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${matchaBg})` }}
    >
      <h1 className="text-[5rem] text-center">WE ARE MATCHA TIME</h1>
    </div>
  );
}
