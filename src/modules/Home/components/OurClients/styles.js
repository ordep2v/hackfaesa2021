import styled from "styled-components";
import media from "styled-media-query";

export const OurClientsContainer = styled.section`
  margin-top: 5em;
  display: grid;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 8em;
    width: 100%;
    p {
      font-size: 1.5rem;
    }
  }
`;

export const OurClientsImage = styled.img`
  margin: 2em;
  width: 100%;
  display: grid;
  justify-self: center;

  ${media.greaterThan("large")`
  margin: 4em;
 width: 50rem;`}
`;
