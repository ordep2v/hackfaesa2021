import styled from "styled-components";
import media from "styled-media-query";

export const SectionHoverStep = styled.article`
  border-radius: 0.2rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  text-align: left;
  align-content: center;
  flex-wrap: wrap;

  margin: 1em;
  padding: 1em;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  color: #1a202c;
  ${media.greaterThan("large")`
  width: 30ch;
  min-height: 15ch;
  `}
`;

export const SectionHoverIcon = styled.div`
  padding-top: 0.4rem;
  display: flex;
  align-items: flex-start;
  color: #1a202c;
  ${media.greaterThan("large")`
  font-size: 1.2rem;`}
`;

export const SectionHoverText = styled.p`
  margin-left: 0.4rem;
  color: #1a202c;
`;

export const SectionHoverStepNumber = styled.p`
  ${media.greaterThan("large")`
  font-size: 1.6rem;`}
`;

export const SectionHoverStepTitle = styled.p`
  font-weight: bolder;
  ${media.greaterThan("large")`
  font-size: 1.6rem;`}
`;

export const SectionHoverStepDescription = styled.p`
  ${media.greaterThan("large")`
  font-size: 1.6rem;`}
`;
