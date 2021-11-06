import styled from "styled-components";
import media from "styled-media-query";

export const StampProgressContainer = styled.section`
  display: flex;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 1em;
  h2,p {
    text-align: left;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    h2 {
      font-size: 2rem;
    }
    p {
      margin-top: 1rem;
      font-size: 1.6rem;
    }
  }
`;

