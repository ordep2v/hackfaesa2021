import styled from "styled-components";
import media from "styled-media-query";

export const OurClientsContainer = styled.section`
  margin-top: 3em;
  display: grid;
  justify-content: center;
  text-align: center;
  ${media.greaterThan('large')`
  margin-top: 6em;
  width: 100%;
  p {
    font-size: 1.8rem;
  }
  `}
`;

export const OurClientsImage = styled.img`
  margin: 2em;
  width: 100%;
  display: grid;
  justify-self: center;

  ${media.greaterThan('large')`
  margin: 4em;
 width: 50rem;`}
`;
