import type { ProductType } from "../../types/product";

export default function ProductList({ products }: { products: ProductType[] }) {
  return (
    <ul className="grid grid-cols-2 gap-6 xl:grid-cols-4">
      {products.map(({ imageURL, name, price, description }, index) => (
        <li key={index} className="flex flex-col gap-3 ">
          <img
            src={imageURL}
            alt={name}
            className="h-50 object-cover rounded-lg shadow-lg transition duration-300 xl:h-80"
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
