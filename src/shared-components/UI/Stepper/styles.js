import styled from "styled-components";
import media from "styled-media-query";

export const SectionHoverStep = styled.article`
  
  padding: 0.5rem 0rem 0.5rem 0.5rem;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
  align-content: center;
  justify-content: flex-start;
  margin: 1em 0;

  color: #1a202c;
  ${media.greaterThan('large')`
  width: 30rem;
  `}
`;

export const SectionHoverIcon = styled.div`
  padding-top: 0.4rem;
  display: flex;
  align-items: flex-start;
  color: #1a202c;
  ${media.greaterThan('large')`
  font-size: 1.2rem;`}
`;

export const SectionHoverText = styled.p`
  margin-left: 0.4rem;
  color: #1a202c;
`;

export const SectionHoverStepNumber = styled.p`
${media.greaterThan('large')`
  font-size: 1.6rem;`}`;

export const SectionHoverStepTitle = styled.p`
  font-weight: bolder;
  ${media.greaterThan('large')`
  font-size: 1.6rem;`}
 
`;

export const SectionHoverStepDescription = styled.p`
 ${media.greaterThan('large')`
  font-size: 1.6rem;`}
`;
