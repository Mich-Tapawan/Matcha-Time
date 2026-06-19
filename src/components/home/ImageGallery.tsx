import { offerGalleryImages } from "../../data/offerGallery";
import { Stagger, StaggerItem } from "../motion/Stagger";

export default function ImageGallery() {
  return (
    <Stagger
      className="grid grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-10"
      stagger={0.1}
    >
      {offerGalleryImages.map(({ url, text }, index) => (
        <StaggerItem key={index} className="w-full">
          <div className="group relative w-full overflow-hidden rounded-xl shadow-sm aspect-[4/5] xl:aspect-auto xl:h-140 2xl:h-150">
            <div className="absolute inset-0 z-30 hidden items-center justify-center bg-black/20 p-4 group-hover:flex">
              <p className="text-center text-lg font-medium text-white">
                {text}
              </p>
            </div>

            <img
              src={url}
              alt={text}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-75"
            />
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
