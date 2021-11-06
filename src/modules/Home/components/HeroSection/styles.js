import styled from "styled-components";
import media from "styled-media-query";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  button {
    display: grid;
    align-content: center;
    align-self: start;
    z-index: 2;
  ${media.greaterThan('large')`
  font-size: 1.5rem;
  padding: 1.5em 2em;`}
  }
  ${media.greaterThan('large')`
  flex-direction: row;
  `}
  `;

export const HeroContent = styled.div`
display: flex;
flex-direction: column;
${media.greaterThan('large')`
  justify-content: center;
  max-width: 50%;`}
`
export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a202c;
  margin-bottom: 0.5em;

  ${media.greaterThan('large')`
  font-size: 3.2rem;
  max-width: 600px;`}
`;

export const HeroParagraph = styled.p`
  z-index: 2;
  font-size: 1rem;
  font-weight: regular;
  color: #1a202c;
  margin-bottom: 1.5em;

  ${media.greaterThan('large')`
  font-size: 1.8rem;
  max-width: 680px;`}
`;
export const HeroImageDivision = styled.div`
  z-index: 1;
  transform: translateY(-90px);
  display: grid;
  align-self: end;
  ${media.greaterThan('large')`
  transform: translateY(0);
  max-width: 40rem;`}
`
export const HeroImage = styled.img`
  width: 100%;
  ${media.greaterThan('large')`
  width: 40rem;`}
`;
