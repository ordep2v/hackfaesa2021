import styled from "styled-components";
import media from "styled-media-query";

export const ContactUsContainer = styled.section`
  margin-top: 3em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${media.greaterThan('large')`
  width: 100%;
  padding: 0 20rem 0 20rem;
  h2 {
    font-size: 2rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
  `}
`;

export const ContactUsForm = styled.form`
  margin-top: 1em;
  display: grid;
  gap: 0.5em;

  input {
    font-size: 0.9rem;
    color: #1a202c;
    background: #ededed;

    ::placeholder {
      color: #1a202c;
    }
  }
  ${media.greaterThan('large')`
  gap: 1rem;
  input{
    font-size: 1.6rem;
      color: #1a202c;
      background: #ededed;
  }
  button {
    font-size: 1.8rem;
    height: 4rem;
  }
  `}
`;
