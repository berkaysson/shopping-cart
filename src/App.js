import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Products } from "./Components/Product/Products";
import NavBar from "./Components/NavBar";
import { Cart } from "./Components/Cart";
import { Contact } from "./Components/Contact";

import styled from "styled-components";

const ContentWrapper = styled.div`
  padding: var(--padding);
`;

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContentWrapper>
      </div>
    </Router>
  );
}

export default App;
