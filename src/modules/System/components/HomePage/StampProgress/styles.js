import styled from "styled-components";

export const StampProgressContainer = styled.section`
  display: flex;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 1em;

  h2,
  p {
    text-align: left;
  }

  @media (min-width: 768px) {
    max-width: 500px;
    h2 {
      margin: 1em 0 0 0;
    }
    p {
      margin-top: 1rem;
      font-size: 1.6rem;
      color: #1a202c;
    }
  }
`;
