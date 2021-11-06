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

export const StepsContainer = styled.section`
  margin-top: 5em;
  display: grid;

  .chakra-collapse {
    div {
      background: rgba(255, 255, 255, 0.75);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 1em;
    }
    margin-bottom: 2em;
  }

  button {
    margin-bottom: 1em;
    padding: 1em;
    background: rgba(255, 255, 255, 0.75);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    svg {
      color: #1a202c;
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
