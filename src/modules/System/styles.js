import styled from "styled-components";
import { StampProgressArticle, StampProgressDescription, StampProgressTitle } from "../../shared-components/UI/Stamp/styles";

export const SystemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1em;
  ${StampProgressArticle}:nth-child(3) {
    ${StampProgressTitle} {
      font-size: 1.2rem;
      font-weight: 400;
    }
    ${StampProgressDescription} {
      font-size: 1.8rem;
      font-weight: bold;
      color: green;
    }
  }
`;
