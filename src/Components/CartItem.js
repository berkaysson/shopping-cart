import React from "react";
import styled from "styled-components";

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px var(--light-color) solid;
  border-radius: var(--border-radius);
  padding: 3px;
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
  border-radius: var(--border-radius);
`;

const ItemTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const ItemPrice = styled.p`
  font-size: 0.8rem;
  color: var(--light-color);
`;

const RemoveButton = styled.button`
  font-size: 0.8rem;
  color: var(--primary-color);
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-right: 5px;
  
  &:hover{
    color: black;
  }
`;

const CartItem = ({ item, removeItem }) => {
  return (
    <CartItemWrapper>
      <ItemInfoWrapper>
        <ItemImage src={item.imgPath} alt={item.title} />
        <div>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>${item.price}x{item.quantity}</ItemPrice>
        </div>
      </ItemInfoWrapper>
      <RemoveButton onClick={() => removeItem(item.id)}>Remove</RemoveButton>
    </CartItemWrapper>
  );
};

export default CartItem;
