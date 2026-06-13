type DualTextProps = {
  text1: string;
  text2: string;
};

export default function DualText({ text1, text2 }: DualTextProps) {
  return (
    <div className="flex justify-center items-center gap-3">
      <p className="text-center">{text1}</p>
      <span className="min-w-20 h-0.5 bg-white"></span>
      <p className="text-center">{text2}</p>
    </div>
  );
}
