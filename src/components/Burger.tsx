type BurgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function Burger({ isOpen, onClick }: BurgerProps) {
  return (
    <div
      className={`flex flex-col space-y-1 place-self-center cursor-pointer lg:hidden`}
      onClick={onClick}
    >
      <span className="w-6 h-0.5 bg-white"></span>
      <span className="w-6 h-0.5 bg-white"></span>
      <span className="w-6 h-0.5 bg-white"></span>
    </div>
  );
}
