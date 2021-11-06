import { Video } from "reactjs-media";

import { Tooltip } from "@chakra-ui/react";

import { Heart, MessageCircle } from "react-feather";

import {
  IconsContainer,
  VideoBoxContainer,
  VideoBoxDescription,
  VideoContainer,
} from "./styles";

export const VideoBox = (props) => {
  return (
    <VideoContainer>
      <VideoBoxContainer>
        <Video src={props.videoSource} poster={props.imageSource} />
        <Tooltip label={props.text}>
          <VideoBoxDescription>{props.text}</VideoBoxDescription>
        </Tooltip>
      </VideoBoxContainer>
      <IconsContainer>
        <Heart />
        <MessageCircle />
      </IconsContainer>
    </VideoContainer>
  );
};
