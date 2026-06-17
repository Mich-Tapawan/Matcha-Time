import type { ProductType } from "../../types/product";

export default function ProductList({ products }: { products: ProductType[] }) {
  return (
    <ul className="grid grid-cols-4 gap-6">
      {products.map(({ imageURL, name, price, description }, index) => (
        <li key={index} className="flex flex-col gap-3">
          <img
            src={imageURL}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="flex font-bold text-black justify-between">
            <h4>{name}</h4> <p>${price}</p>
          </div>
          <p style={{ fontSize: "0.8rem" }}>{description}</p>
        </li>
      ))}
    </ul>
  );
}
