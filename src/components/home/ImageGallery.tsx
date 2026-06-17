type OfferImageType = {
  url: string;
  text: string;
};

const imageModules = import.meta.glob(
  "/src/assets/offer/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const imageURLs = Object.values(imageModules) as string[];

const textCaptions = ["Hewwo", "wazzuppp", "Third Caption", "yeah"];

const images: OfferImageType[] = textCaptions.map((caption, index) => ({
  url: imageURLs[index] || "",
  text: caption,
}));

export default function ImageGallery() {
  return (
    <div className="grid gap-3 grid-cols-2 xl:grid-cols-4 xl:gap-10">
      {images.map(({ url, text }, index) => (
        <div
          key={index}
          className="relative w-full rounded overflow-hidden group xl:min-h-140 2xl:max-w-90"
        >
          {/* Absolute Center Text Overlay */}
          <div className="absolute inset-0 z-30 hidden items-center justify-center p-4 group-hover:flex">
            <p className="text-center text-white font-medium text-lg">{text}</p>
          </div>

          {/* Smooth Zoom Image */}
          <img
            src={url}
            alt={`Gallery item ${index}`}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.1] group-hover:brightness-50"
          />
        </div>
      ))}
    </div>
  );
}
