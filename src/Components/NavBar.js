import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding);
  background-color: var(--dark-color);
  color: var(--light-color);
`;

const Logo = styled(NavLink)`
  font-size: var(--font-xlg);
  font-weight: bold;
  color: var(--light-color);
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkItem = styled(NavLink)`
  margin-left: var(--margin);
  font-size: var(--font-lg);
  color: var(--light-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active{
    color: var(--light-alt-color);
    text-decoration: underline;
  }
`;

const CartButton = styled.button`
  font-size: var(--font-lg);
  padding: var(--btn-padding);
  margin-left: var(--margin);
  cursor: pointer;
  background-color: var(--theme-color);
  color: var(--light-color);
  border: none;
  border-radius: var(--border-radius);
  text-decoration: none;

  &:hover {
    background-color: var(--dark-alt-color);
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo to="/">Logo-Biome</Logo>
      <NavLinks>
        <NavLinkItem to="/" activeClassName="active" >Home</NavLinkItem>
        <NavLinkItem to="/products" activeClassName="active">Products</NavLinkItem>
        <NavLinkItem to="/contact" activeClassName="active">Contact</NavLinkItem>
        <CartButton>Cart</CartButton>
      </NavLinks>
    </NavBarContainer>
  );
};

export default NavBar;