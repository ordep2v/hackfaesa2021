import styled from "styled-components";

export const VideoContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;
export const VideoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 18ch;
  height: 20ch;

  border-radius: 0.5rem;

  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .video-cover,
  .video-component,
  video,
  .poster-.video-cover,
  .postericon {
    display: flex;
  }
  .posterimage {
    width: 100%;
  }
  .picon {
    text-align: center;
    font-size: 1.2rem;
    padding: 0.8rem 0.8rem 0.8rem 0.9rem;
    border-radius: 10em;
    transform: translateY(20px);
    background-color: black;
    opacity: 0.45;
  }
`;
export const VideoBoxDescription = styled.div`
  margin-top: 1em;
  text-align: left;
  font-size: 1rem;
  color: black;
  padding: 1em;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
export const IconsContainer = styled.div`
  font-size: 0.85rem;
  margin-top: 1.5em;
  display: flex;
  svg:first-child {
    color: red;
  }
  svg:nth-child(2) {
    margin-left: 0.4rem;
    color: green;
  }
`;
