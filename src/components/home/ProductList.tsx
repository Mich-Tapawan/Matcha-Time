import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ProductType } from "../../types/product";
import { carouselSlide } from "../motion/variants";

type ProductListProps = {
  products: ProductType[];
  listKey: number;
};

export default function ProductList({ products, listKey }: ProductListProps) {
  const reduceMotion = useReducedMotion();

  const list = (
    <ul className="grid grid-cols-2 gap-6 xl:grid-cols-4">
      {products.map(({ imageURL, name, price, description }) => (
        <li key={name} className="flex flex-col gap-3">
          <img
            src={imageURL}
            alt={name}
            className="h-50 object-cover rounded-lg shadow-lg transition duration-300 xl:h-80"
          />
          <div className="flex font-bold text-black justify-between">
            <h4>{name}</h4>
            <p>${price}</p>
          </div>
          <p style={{ fontSize: "0.8rem" }}>{description}</p>
        </li>
      ))}
    </ul>
  );

  if (reduceMotion) {
    return list;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        key={listKey}
        className="grid grid-cols-2 gap-6 xl:grid-cols-4"
        variants={carouselSlide}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {products.map(({ imageURL, name, price, description }) => (
          <li key={name} className="flex flex-col gap-3">
            <img
              src={imageURL}
              alt={name}
              className="h-50 object-cover rounded-lg shadow-lg transition duration-300 xl:h-80"
            />
            <div className="flex font-bold text-black justify-between">
              <h4>{name}</h4>
              <p>${price}</p>
            </div>
            <p style={{ fontSize: "0.8rem" }}>{description}</p>
          </li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
