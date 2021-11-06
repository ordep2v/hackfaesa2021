import styled from "styled-components";
import media from "styled-media-query";

export const FooterContainer = styled.footer`
  margin-top: 2em;
  display: grid;
  justify-content: center;
  align-items: center;

  gap: 1em;

  img {
    justify-self: center;
  }
  ${media.greaterThan('large')`
  margin-top: 5em;
  img{
    width: 20rem;
  }
  p {
    font-size: 1.4rem;
  }
    `}
`;
