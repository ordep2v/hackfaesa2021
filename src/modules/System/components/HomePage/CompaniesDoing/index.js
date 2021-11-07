import { companies } from "../../../../../shared-components/companies";
import { Card } from "../../../../../shared-components/UI/Card";
import { SeparatorTitle } from "../../../../../shared-components/UI/SeparatorTitle";
import { CompaniesDoingCardWrapper, CompaniesDoingContainer } from "./styles";

export const CompaniesDoing = () => {
    return (
        <>
            <CompaniesDoingContainer>
                <SeparatorTitle text='O que as empresas estão fazendo' />
                <CompaniesDoingCardWrapper>
                    {companies.map((company) => (
                        <Card id={company.id}
                            postId={company.id}
                            imageSource={company.imgUrl}
                            title={`Por: ${company.name}`}
                            description={company.text} />
                    ))}
                </CompaniesDoingCardWrapper>
            </CompaniesDoingContainer>
        </>
    );
};
