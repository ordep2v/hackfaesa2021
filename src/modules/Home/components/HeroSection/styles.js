import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;

  button {
    display: grid;
    align-self: start;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;

  color: #1a202c;

  margin-bottom: 0.5em;
`;

export const HeroParagraph = styled.p`
  font-size: 1rem;
  font-weight: regular;

  color: #1a202c;

  margin-bottom: 1.5em;
`;

export const HeroImage = styled.img`
  display: grid;
  align-self: end;
  width: 50%;
`;
