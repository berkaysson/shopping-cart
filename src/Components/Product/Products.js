import styled from "styled-components";
import productData from "../../Data/productData";
import { ProductItem } from "./ProductItem";

export const Products = ({onAddCartItem}) => {
  return (
    <ProductsWrapper>
      {Object.values(productData).map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          id={product.id}
          price={product.price}
          imgPath={product.imgPath}
          name={product.name}
          description={product.description}
          onAddCartItem={onAddCartItem}
        />
      ))}
    </ProductsWrapper>
  );
};

const ProductsWrapper = styled.div`
  display: grid;
  align-items: flex-start;
  justify-content: center;
  justify-items: center;
  min-width: 100%;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: var(--gap-lg);
  padding: var(--padding);
  margin-top: 5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    margin-top: 2rem;
  }
`