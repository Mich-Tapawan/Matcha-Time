import companyImg from "../../assets/offer/matcha-powder-spread.png";

export default function Company() {
  return (
    <section className="w-full h-full flex justify-center items-center bg-linear-to-b from-[#6E7644] to-primary text-white px-4 py-10 lg:px-10 xl:h-150 xl:px-20 2xl:px-32 2xl:py-20">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-12 xl:gap-16">
        <div className="flex flex-col space-y-6 lg:flex-1 xl:space-y-10">
          <h2 className="text-white text-center xl:text-start">Our Company</h2>
          <p
            className="max-w-xl text-secondary text-center xl:text-start"
            style={{ lineHeight: "2rem" }}
          >
            Rooted in timeless Japanese traditions, Matcha Time brings the
            authentic teahouse experience into your daily rhythm. We carefully
            source our ceremonial-grade matcha to bring you a clean, focused
            energy wrapped in rich, earthy tranquility.
          </p>
          <button
            type="button"
            className="w-fit bg-secondary text-primary px-10 py-4 cursor-pointer font-medium brand-font place-self-center hover:bg-primary hover:text-white hover:outline transition duration-300 xl:place-self-start"
          >
            Learn More
          </button>
        </div>

        <div className="w-full lg:flex-1 xl:max-w-115">
          <img
            src={companyImg}
            alt="Ceremonial matcha powder with bamboo whisk"
            className="w-full rounded-2xl object-cover aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
