import { IconsContainer, VideoBoxContainer, VideoBoxDescription, VideoContainer } from "./styles";
import { Video } from 'reactjs-media'
import { Heart, MessageCircle } from "react-feather";

export const VideoBox = (props) => {
    return (
        <VideoContainer>
            <VideoBoxContainer>
                <Video src={props.videoSource} poster={props.imageSource} />
                <VideoBoxDescription>{props.text}</VideoBoxDescription>
            </VideoBoxContainer>
            <IconsContainer>
                <Heart />
                <MessageCircle />
            </IconsContainer>
        </VideoContainer>
    );
};
