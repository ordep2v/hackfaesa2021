import styled from "styled-components";
import { CompaniesDoingCard } from "../../../../../shared-components/UI/Card/styles";

export const CompaniesDoingContainer = styled.section`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  h2 {
    justify-self: flex-start;
    max-width: 350px;
  }
`;
export const CompaniesDoingCardWrapper = styled.div`
  ${CompaniesDoingCard}:nth-child(2) img {
    width: 4rem;
  }
`;
