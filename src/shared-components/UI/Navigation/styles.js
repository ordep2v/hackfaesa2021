import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 5;

  margin-bottom: 2em;
  padding: 0.5em 1em;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`
