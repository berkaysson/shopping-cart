import styled from "styled-components";

import CartItem from "./CartItem";

const CartContainer = styled.div`
  padding: var(--padding);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const CartContent = styled.div`
  padding: 1rem;
`;

export const Cart = ({ showCart, cartData, removeItem }) => {
  return (
    <CartContainer>
      <CloseButton onClick={showCart}>Close</CloseButton>
      <CartContent>
        {cartData.map((item) => (
          <CartItem key={item.id} item={item} removeItem={removeItem} />
        ))}
      </CartContent>
    </CartContainer>
  );
};
