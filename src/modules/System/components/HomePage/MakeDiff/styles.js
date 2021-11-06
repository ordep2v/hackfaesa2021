import styled from "styled-components";
import { VideoBoxContainer } from "../../../../../shared-components/UI/VideoBox/styles";

export const MakeDiffContainer = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const MakeDiffSliderWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  overflow-x: auto;

  ${VideoBoxContainer} {
  }
`;
