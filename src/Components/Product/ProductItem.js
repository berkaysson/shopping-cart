import styled from "styled-components";

export const ProductItem = ({ product, id, price, imgPath, description, name, onAddCartItem }) => {
  return (
    <ProductItemWrapper>
      <ProductItemImage src={imgPath} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>{price}$</ProductPrice>
      <ProductButton onClick={()=>onAddCartItem(product)}>Add to Cart</ProductButton>
    </ProductItemWrapper>
  );
};

const ProductItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding);
  margin: var(--margin);
  background-color: var(--light-color);
  border-radius: var(--border-radius);
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.1s ease-in-out;
  justify-content: space-between;
  width: 250px;
  height: 450px;
  text-align: center;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

const ProductItemImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: var(--border-radius);
  margin-bottom: var(--margin);
`;

const ProductName = styled.div`
  font-size: var(--font-md);
  font-weight: bold;
  margin-bottom: var(--margin);
`;

const ProductDescription = styled.div`
  font-size: var(--font-sl);
  margin-bottom: var(--margin);
`;

const ProductPrice = styled.div`
  font-size: var(--font-md);
  font-weight: bold;
  margin-bottom: var(--margin);
`;

const ProductButton = styled.button`
  padding: var(--btn-padding);
  background-color: var(--dark-color);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--dark-alt-color);
  }
`;
