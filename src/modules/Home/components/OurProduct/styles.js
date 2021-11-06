import styled from "styled-components";

export const OurProductContainer = styled.section`
  margin-top: 3em;

  display: grid;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    h2 {
      font-size: 1.8rem;
      max-width: 600px;
    }
  }
`;

export const OurProductImage = styled.img`
  margin-top: 2em;
  width: 100%;
`;
