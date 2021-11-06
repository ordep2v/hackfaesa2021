import { CompaniesDoingCard,CompaniesDoingImage, CompaniesDoingImageBox, CompaniesDoingText, CompaniesDoingTextBox, CompaniesDoingTitle, CompaniesSeeMore} from "./styles";
export const Card = (props) => {
    return (
        <>

            <CompaniesDoingCard>
                <CompaniesDoingImageBox>
                    <CompaniesDoingImage src={props.imageSource} />
                </CompaniesDoingImageBox>
                <CompaniesDoingTextBox>
                    <CompaniesDoingTitle>{props.title}</CompaniesDoingTitle>
                    <CompaniesDoingText>{props.description}</CompaniesDoingText>
                    <CompaniesSeeMore href={props.href}>Ler mais</CompaniesSeeMore>
                </CompaniesDoingTextBox>
            </CompaniesDoingCard>

        </>
    );
};
