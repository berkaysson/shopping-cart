import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Products } from "./Components/Product/Products";
import NavBar from "./Components/NavBar";
import { Cart } from "./Components/Cart";
import { Contact } from "./Components/Contact";

import styled from "styled-components";
import { useState } from "react";

import bgImage from "./Data/images/pexels-karolina-grabowska-4210311.jpg";

const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 var(--padding-lg);
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-color: var(--dark-color);
  padding: var(--padding) var(--padding-lg);
  position: relative;
`;

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  background-color: var(--light-alt-color);
  transition: all 0.3s ease-in-out;
  z-index: 2;
`;

function App() {
  const [showCart, setShowCart] = useState(false);
  const [itemsOnCart, setItemsOnCart] = useState([]);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const handleAddToCart = (product) => {
    const existingCartItem = itemsOnCart.find((item) => item.id === product.id);
    if (existingCartItem) {
      setItemsOnCart(
        itemsOnCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setItemsOnCart([...itemsOnCart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    setItemsOnCart(itemsOnCart.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <Router>
      <AppWrapper>
        <NavBar showCart={handleToggleCart} />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products onAddCartItem={handleAddToCart} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentWrapper>
        <CartWrapper showCart={showCart}>
          <Cart
            showCart={handleToggleCart}
            cartData={itemsOnCart}
            removeItem={handleRemoveItem}
          />
        </CartWrapper>
      </AppWrapper>
    </Router>
  );
}

export default App;
