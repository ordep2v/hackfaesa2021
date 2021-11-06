import styled from "styled-components";

export const StampProgressImageDivision = styled.div``;

export const StampProgressMainBox = styled.div`
  display: flex;
  padding: 1rem;
`;

export const StampProgressImage = styled.img`
  max-width: 4rem;
  margin-right: 0.5em;
`;

export const StampProgressTextBox = styled.div`
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
`;

export const StampProgressTitle = styled.span`
  font-size: 1.2rem;
  margin-bottom: 0.5em;
  font-weight: 600;
`;
export const StampProgressDescription = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #48bb78;
`;

export const StampProgressBar = styled.div`
  background-color: #48bb78;
  height: 10px;
  border-radius: 1rem;
  width: 0;
`;

export const StampProgressArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;

  color: black;

  max-width: 100%;
  border-radius: 0.5rem;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
`;
