import styled from "styled-components";
import media from "styled-media-query";

export const Nav = styled.nav`
  display: flex;

  justify-content: space-between;

  margin-bottom: 1.5em;
  ${media.greaterThan('large')`
padding: 0 20rem 0 20rem;`}
`;
