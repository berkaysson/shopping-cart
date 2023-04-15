import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--padding-lg);
  background-color: transparent;
  border-radius: var(--border-radius);
  backdrop-filter: blur(5px);
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  h2 {
    font-size: var(--font-xlg);
    margin-bottom: 2rem;
    text-align: center;
  }

  p {
    font-size: var(--font-md);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  div {
    margin-bottom: 1.5rem;

    h3 {
      font-size: var(--font-lg);
      margin-bottom: 1rem;
    }

    p {
      font-size: var(--font-md);
      line-height: 1.5;
      margin-bottom: 0.5rem;
    }

    ul {
      display: flex;
      list-style: none;
      padding: 0;

      li {
        margin-right: 1rem;

        a {
          color: var(--dark-color);

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;


export const Contact = () => {
  return (
    <ContactContainer>
      <p>
        If you have any questions or comments, please feel free to get in touch
        with us. You can contact us through the form below or email us directly
        at support@ecofriendlyshoppingco.com. Our customer service team will
        respond to your inquiry within 24-48 hours.
      </p>
      <div>
        <h3>Mailing Address:</h3>
        <p>
          Eco-Friendly Shopping Co. <br />
          1234 Green Street <br />
          New York, NY 10001 <br />
          USA
        </p>
      </div>
      <div>
        <h3>Phone:</h3>
        <p>1-800-ECO-1234</p>
      </div>
      <div>
        <h3>Email:</h3>
        <p>support@ecofriendlyshoppingco.com</p>
      </div>
      <div>
        <h3>Follow Us:</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/ecofriendlyshoppingco">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ecofriendlyshoppingco">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitter.com/ecofriendlyshop">Twitter</a>
          </li>
        </ul>
      </div>
    </ContactContainer>
  );
};

