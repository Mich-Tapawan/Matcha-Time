export default function OrderNowBtn() {
  return (
    <button
      type="button"
      className="flex h-10 bg-accent text-sm py-1 px-6 place-content-center place-self-center cursor-pointer hover:brightness-125 transition duration-300"
    >
      <p className="text-center text-black font-medium place-self-center .brand-font">
        Order Now
      </p>
    </button>
  );
}
