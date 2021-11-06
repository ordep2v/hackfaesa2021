import styled from "styled-components";
import media from "styled-media-query";

export const OurProductContainer = styled.section`
  margin-top: 3em;

  display: grid;
  justify-content: center;
  text-align: center;
  ${media.greaterThan('large')`
  h2 {
    font-size: 1.8rem;
  }`}
`;

export const OurProductImage = styled.img`
  margin-top: 2em;
  width: 100%;
`;
