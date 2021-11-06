import styled from "styled-components";

export const OurStepsContainer = styled.section`
  margin-top: 5em;
  max-width: 900px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    h2 {
      font-size: 1.8rem;
      max-width: 600px;
      margin: 0 auto;
    }
  }
`;

export const OurStepsButtons = styled.div`
  cursor: default;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2em;
`;
