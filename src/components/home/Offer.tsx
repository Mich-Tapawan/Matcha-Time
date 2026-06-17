import ImageGallery from "./ImageGallery";

export default function Offer() {
  return (
    <section className="w-full space-y-8 px-4 py-10 lg:px-10 xl:px-20 2xl:px-32 2xl:py-20 2xl:space-y-16">
      <div className="text-[#4A502C] text-shadow-lg">
        <div className="flex items-center justify-center space-x-4">
          {/* Inline SVG Diamond */}
          <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
            <path d="M12 2L2 12l10 10 10-10L12 2z" />
          </svg>
          <p className="text-sm font-medium">What we offer</p>
        </div>
        <h2 className="text-3xl font-medium text-center mt-2">
          A place where time slows and <br />
          memories are made
        </h2>
      </div>
      <ImageGallery />
    </section>
  );
}
