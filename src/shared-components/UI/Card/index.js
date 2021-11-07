import { Link } from "react-router-dom";
import { CompaniesDoingCard,CompaniesDoingImage, CompaniesDoingImageBox, CompaniesDoingText, CompaniesDoingTextBox, CompaniesDoingTitle, CompaniesSeeMore} from "./styles";
export const Card = (props) => {
    return (
        <>

            <CompaniesDoingCard key={props.key}>
                <CompaniesDoingImageBox>
                    <CompaniesDoingImage src={props.imageSource} />
                </CompaniesDoingImageBox>
                <CompaniesDoingTextBox>
                    <CompaniesDoingTitle>{props.title}</CompaniesDoingTitle>
                    <CompaniesDoingText>{props.description}</CompaniesDoingText>
                    <CompaniesSeeMore><Link to={`/blog/${props.postId}`}>Ler mais</Link></CompaniesSeeMore>
                </CompaniesDoingTextBox>
            </CompaniesDoingCard>

        </>
    );
};
