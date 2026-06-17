type OrderNowBtnProps = {
  variant?: "nav" | "hero";
  className?: string;
};

const variantStyles = {
  nav: "h-10 text-sm py-2 px-6",
  hero: "h-12 text-base py-3 px-10 w-full max-w-xs",
};

export default function OrderNowBtn({
  variant = "nav",
  className = "",
}: OrderNowBtnProps) {
  return (
    <button
      type="button"
      className={`flex bg-accent place-content-center cursor-pointer hover:brightness-125 transition duration-300 ${variantStyles[variant]} ${className}`}
    >
      <p className="text-center text-black font-medium brand-font">Order Now</p>
    </button>
  );
}
