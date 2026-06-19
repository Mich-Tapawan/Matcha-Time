import { useState } from "react";
import { popularItems, recommendedItems } from "../../data/productItems";
import ArrowButtons from "./ArrowButtons";
import ProductList from "./ProductList";
import { useIsMobile } from "../../hooks/useIsMobile";
import type { ProductType } from "../../types/product";

function sliceFormula(
  items: ProductType[],
  visibleCount: number,
  startIndex: number,
): ProductType[] {
  const slicedList = items.slice(startIndex, startIndex + visibleCount);
  return slicedList;
}

export default function Showcase() {
  const [recommendedStartIndex, setRecommendedStartIndex] = useState<number>(0);
  const [popularStartIndex, setPopularStartIndex] = useState<number>(0);
  const isMobile = useIsMobile();

  const visibleCount = isMobile ? 2 : 4;

  // Arrow Button Toggling

  const handleNext = (
    currentIndex: number,
    setStartIndex: React.Dispatch<React.SetStateAction<number>>,
    totalItems: number,
  ): void => {
    if (currentIndex + visibleCount >= totalItems) return;
    setStartIndex(currentIndex + visibleCount);
  };

  const handlePrev = (
    currentIndex: number,
    setStartIndex: React.Dispatch<React.SetStateAction<number>>,
  ): void => {
    if (currentIndex - visibleCount < 0) return;
    setStartIndex(currentIndex - visibleCount);
  };

  return (
    <section className="px-4 py-10 space-y-10 lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      {/* Recommended Items */}
      <div className="space-y-5">
        <div className="flex justify-between">
          <div className="flex items-center justify-center space-x-4">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
            <p className="text-sm font-medium">We recommend trying</p>
          </div>

          <ArrowButtons
            onNext={() =>
              handleNext(
                recommendedStartIndex,
                setRecommendedStartIndex,
                recommendedItems.length,
              )
            }
            onPrev={() =>
              handlePrev(recommendedStartIndex, setRecommendedStartIndex)
            }
            isLeftDisabled={recommendedStartIndex === 0}
            isRightDisabled={
              recommendedStartIndex + visibleCount >= recommendedItems.length
            }
          />
        </div>
        <ProductList
          products={sliceFormula(
            recommendedItems,
            visibleCount,
            recommendedStartIndex,
          )}
        />
      </div>

      {/* Popular Items */}
      <div className="space-y-5">
        <div className="flex justify-between">
          <div className="flex items-center justify-center space-x-4">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
            <p className="text-sm font-medium">Our most popular items</p>
          </div>

          <ArrowButtons
            onNext={() =>
              handleNext(
                popularStartIndex,
                setPopularStartIndex,
                popularItems.length,
              )
            }
            onPrev={() => handlePrev(popularStartIndex, setPopularStartIndex)}
            isLeftDisabled={popularStartIndex === 0}
            isRightDisabled={
              popularStartIndex + visibleCount >= popularItems.length
            }
          />
        </div>
        <ProductList
          products={sliceFormula(popularItems, visibleCount, popularStartIndex)}
        />
      </div>
    </section>
  );
}
