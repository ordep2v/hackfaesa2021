import { MakeDiffContainer, MakeDiffSliderWrapper } from "./styles";
import { SeparatorTitle } from "../../../../shared-components/UI/SeparatorTitle"
import { Paragraph } from "../../../../shared-components/UI/Paragraph"
import { VideoBox } from "../../../../shared-components/UI/VideoBox";
export const MakeDiff = () => {
    return (
        <>
            <SeparatorTitle text='Faça a diferença em poucos passos' />
            <MakeDiffContainer>
                <MakeDiffSliderWrapper>
                    <VideoBox text='Video1' />
                    <VideoBox text='Video2' />
                    <VideoBox text='Video3' />
                    <VideoBox text='Video1' />
                    <VideoBox text='Video2' />
                    <VideoBox text='Video3' />
                </MakeDiffSliderWrapper>
            </MakeDiffContainer>
        </>
    );
};
