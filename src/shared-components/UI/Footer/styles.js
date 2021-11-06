import styled from "styled-components";
import media from "styled-media-query";

export const FooterContainer = styled.footer`
  margin-top: 2em;
  padding-bottom: 3em;
  display: grid;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  gap: 1em;

  img {
    justify-self: center;
  }
  ${media.greaterThan("large")`
  margin-top: 5em;
  img{
    width: 250px;
  }
  p {
    font-size: 1rem;
  }
    `}
`;
