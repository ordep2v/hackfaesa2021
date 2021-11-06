import { StampProgressContainer} from "./styles";
import { Stamp } from "../../../../shared-components/UI/Stamp";
import {SeparatorTitle} from "../../../../shared-components/UI/SeparatorTitle"
import {Paragraph} from "../../../../shared-components/UI/Paragraph"
export const StampProgress = ({ formContent }) => {
    return (
        <>
            <StampProgressContainer>
                <Stamp
                    imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636224313/Hack%20Faesa%202021/leafly_qjbn10.svg'
                    title='Infly'
                    description='Selo Green Company'
                     />
                     <SeparatorTitle text='Parabéns'/>
                     <Stamp
                    imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636224313/Hack%20Faesa%202021/selo_nzjy4v.svg'
                    title='Selo'
                    description='Green 01'
                    progressBar
                    progressBarLength={60} />
                    <Paragraph text='40% para Green 02'/>
            </StampProgressContainer>
        </>
    );
};
