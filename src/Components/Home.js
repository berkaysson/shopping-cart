import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--dark-color);
  padding: var(--padding-lg);
`;

const HomeTitle = styled.div`
  font-size: var(--font-xlg);
  font-weight: bold;
  text-align: center;
  margin-bottom: var(--gap);
`;

const HomeSubtitle = styled.div`
  font-size: var(--font-lg);
  text-align: center;
  margin-bottom: var(--padding);
`;

const ShopButton = styled(Link)`
  font-size: var(--font-lg);
  padding: var(--btn-padding);
  margin-top: var(--gap);
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

const HomeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding);
  border-radius: var(--border-radius);
  backdrop-filter: blur(5px);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`

const Home = () => {
  return (
    <HomeContainer>
      <HomeContentWrapper>
      <HomeTitle>
        Welcome to Biome - your one-stop-shop for sustainable and eco-friendly
        living.
      </HomeTitle>
      <HomeSubtitle>
        Shop sustainably and make a difference with Biome - your destination for
        eco-friendly living.
      </HomeSubtitle>
      <ShopButton to="/products">Shop Now</ShopButton>
      </HomeContentWrapper>
    </HomeContainer>
  );
};

export default Home;
