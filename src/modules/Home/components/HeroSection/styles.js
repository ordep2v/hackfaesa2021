import styled from "styled-components";
import media from "styled-media-query";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: 1.5em;
    max-width: 900px;
    flex-direction: row;
  }

  button {
    display: grid;
    align-content: center;
    align-self: start;
    z-index: 2;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      padding: 1em 1.5em;
    }
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;
export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: #1a202c;
  margin-bottom: 0.5em;

  ${media.greaterThan("large")`
  font-size: 2.8rem;
  max-width: 600px;`}
`;

export const HeroParagraph = styled.p`
  z-index: 2;
  font-size: 1rem;
  font-weight: regular;
  color: #1a202c;
  margin-bottom: 1.5em;

  ${media.greaterThan("large")`
  font-size: 1.5rem;
  max-width: 680px;`}
`;

export const HeroImageDivision = styled.div`
  z-index: 1;
  transform: translateY(-90px);
  display: grid;
  align-self: end;

  @media (min-width: 768px) {
    transform: translateY(0);
    width: 50%;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  ${media.greaterThan("large")`
  width: 40rem;`}
`;
