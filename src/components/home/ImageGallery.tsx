import { offerGalleryImages } from "../../data/offerGallery";

export default function ImageGallery() {
  return (
    <div className="grid gap-3 grid-cols-2 xl:grid-cols-4 xl:gap-10">
      {offerGalleryImages.map(({ url, text }, index) => (
        <div
          key={index}
          className="relative w-full rounded overflow-hidden group shadow-sm xl:min-h-140 2xl:max-w-90"
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
