import styled from "styled-components";

export const ContactUsContainer = styled.section`
  margin-top: 3em;

  display: grid;
  justify-content: center;
  text-align: center;
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
`;
