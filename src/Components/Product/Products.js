import productData from "../../Data/productData";
import { ProductItem } from "./ProductItem";

export const Products = () => {
  return (
    <div>
      {Object.values(productData).map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          price={product.price}
          imgPath={product.imgPath}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
};
