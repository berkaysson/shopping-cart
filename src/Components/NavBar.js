import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--padding);
  background-color: transparent;
  color: var(--dark-color);
  backdrop-filter: blur(33px);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: var(--border-radius);
`;

const Logo = styled(NavLink)`
  font-size: var(--font-xlg);
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkItem = styled(NavLink)`
  margin-left: var(--margin);
  font-size: var(--font-lg);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.active{
    text-decoration: underline;
  }
`;

const CartButton = styled.button`
  font-size: var(--font-lg);
  padding: var(--btn-padding);
  margin-left: var(--margin);
  cursor: pointer;
  background-color: var(--theme-color);
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  text-decoration: none;

  &:hover {
    background-color: transparent;
    border: 1px solid var(--dark-color);
  }
`;

const NavBar = ({showCart}) => {
  return (
    <NavBarContainer>
      <Logo to="/">Biome</Logo>
      <NavLinks>
        <NavLinkItem to="/" activeClassName="active" >Home</NavLinkItem>
        <NavLinkItem to="/products" activeClassName="active">Products</NavLinkItem>
        <NavLinkItem to="/contact" activeClassName="active">Contact</NavLinkItem>
        <CartButton onClick={showCart}>Cart</CartButton>
      </NavLinks>
    </NavBarContainer>
  );
};

export default NavBar;