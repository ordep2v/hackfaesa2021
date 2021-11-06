import styled from "styled-components";
import media from "styled-media-query";

export const OurStepsContainer = styled.section`
  margin-top: 3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${media.greaterThan('large')`
  `}
`;

export const OurStepsButtons = styled.div`
cursor: default;
${media.greaterThan('large')`
margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;`}
`
