export default function Footer() {
  return (
    <footer className="bg-primary text-white w-full min-h-100 px-4 py-12 lg:px-12 xl:px-20 2xl:px-32">
      <div className="grid place-content-center text-center gap-10 xl:grid-cols-4 xl:text-start">
        <div>
          <p className="text-white font-bold" style={{ fontSize: "1.2rem" }}>
            Matcha Time
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <ul>
            <li className="font-medium">Get in touch</li>
            <li className="">matchatime@gmail.com</li>
            <li className="">555-0199</li>
            <li className="">+1 212-555-0143</li>
          </ul>

          <ul>
            <li className="font-medium">Company</li>
            <li className="">Terms & Conditions</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>

        <ul>
          <li className="font-medium">Pages</li>
          <li className="">Home</li>
          <li className="">Menu</li>
          <li className="">About</li>
          <li className="">Contact</li>
        </ul>

        <div className="flex flex-col space-y-3 items-center xl:items-start">
          <h4 className="font-semibold text-2xl">
            Tune in to our <br /> NEWSLETTER
          </h4>
          <input
            type="email"
            className="bg-white text-primary text-xs py-3 px-4 rounded-full w-full"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-accent text-primary w-30 text-xs font-semibold py-3 px-4 rounded-full cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-10">
        <span className="block h-0.5 w-full bg-white mb-6"></span>
        <p
          style={{ fontSize: "0.8rem" }}
          className=" text-center text-[#acb9ab]"
        >
          @ 2026 Matcha Time. All rights reserved
        </p>
      </div>
    </footer>
  );
}
