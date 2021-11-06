import { useEffect } from "react";
import { StampProgressArticle, StampProgressBar, StampProgressDescription, StampProgressImage, StampProgressImageDivision, StampProgressMainBox, StampProgressTextBox, StampProgressTitle } from "./styles";

export const Stamp = (props) => {

    useEffect(() => {
        if (props.progressBar && props.progressBarLength) {
            document.getElementById('progress-bar').style.width = (`${props.progressBarLength}%`);
        }
    }, [])
    return (
        <>
            <StampProgressArticle>
                <StampProgressMainBox>
                    <StampProgressImageDivision>
                        <StampProgressImage src={props.imageSource} />
                    </StampProgressImageDivision>
                    <StampProgressTextBox>
                        <StampProgressTitle>
                            {props.title}
                        </StampProgressTitle>
                        <StampProgressDescription>
                            {props.description}
                        </StampProgressDescription>
                    </StampProgressTextBox>
                </StampProgressMainBox>
                {!!props.progressBar && props.progressBarLength && (
                    <StampProgressBar id='progress-bar' />
                )}
            </StampProgressArticle>
        </>
    );
};
