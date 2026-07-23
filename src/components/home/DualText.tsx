type DualTextProps = {
  text1: string;
  text2: string;
};

export default function DualText({ text1, text2 }: DualTextProps) {
  return (
    <div className="flex items-center justify-center gap-2 font-extralight md:gap-3">
      <p className="text-center text-sm md:text-base">{text1}</p>
      <span className="h-0.5 min-w-8 bg-white md:min-w-20"></span>
      <p className="text-center text-sm md:text-base">{text2}</p>
    </div>
  );
}
