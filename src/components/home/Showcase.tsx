import { recommendedItems } from "../../data/productItems";
import ArrowButtons from "./ArrowButtons";
import ProductList from "./ProductList";

export default function Showcase() {
  return (
    <section className="px-4 py-10 lg:px-10 xl:px-20 2xl:px-32 2xl:py-20">
      <div className="space-y-5">
        <div className="flex justify-between">
          <div className="flex items-center justify-center space-x-4">
            {/* Inline SVG Diamond */}
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 12l10 10 10-10L12 2z" />
            </svg>
            <p className="text-sm font-medium">We recommend trying</p>
          </div>

          <ArrowButtons />
        </div>
        <ProductList products={recommendedItems} />
      </div>
    </section>
  );
}
