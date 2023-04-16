import styled from "styled-components";

import CartItem from "./CartItem";

const CartContainer = styled.div`
  padding: var(--padding) var(--padding-sl);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  padding: var(--padding-sl);
  background-color: var(--primary-color);
  color: var(--light-color);
  border: none;
  cursor: pointer;
  font-weight: bold;
  border: 1px var(--light-color) solid;
  border-radius: var(--border-radius);
`;

const CartContent = styled.div`
  padding: 1rem;
  width: 100%;
  margin-top: 2rem;
`;

const CheckoutButton = styled.button`
  font-size: var(--font-md);
  padding: var(--btn-padding);
  margin-top: var(--margin);
  cursor: pointer;
  background-color: var(--theme-color);
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  color: var(--light-color);
  text-decoration: none;
  width: 80%;
  position: absolute;
  bottom: 5%;

  &:hover {
    background-color: transparent;
    border: 1px solid var(--dark-color);
  }
`;


export const Cart = ({ showCart, cartData, removeItem }) => {
  return (
    <CartContainer>
      <CloseButton onClick={showCart}>Close X</CloseButton>
      <CartContent>
        {cartData.map((item) => (
          <CartItem key={item.id} item={item} removeItem={()=>removeItem(item)} />
        ))}
      </CartContent>
      <CheckoutButton>CHECKOUT</CheckoutButton>
    </CartContainer>
  );
};
