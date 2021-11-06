import { Card } from "../../../../shared-components/UI/Card";
import { SeparatorTitle } from "../../../../shared-components/UI/SeparatorTitle"
import { CompaniesDoingCard, CompaniesDoingCardWrapper, CompaniesDoingContainer } from "./styles";
export const CompaniesDoing = () => {
    return (
        <>
            <CompaniesDoingContainer>
                <SeparatorTitle text='O que as empresas estão fazendo' />
                <CompaniesDoingCardWrapper>
                    <Card imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636233493/Hack%20Faesa%202021/Group_57_btgvm8.svg'
                        title='Por: Volkswagner'
                        description='Como reduzimos a produção de lixo em nossa empresa' />
                    <Card imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636233498/Hack%20Faesa%202021/Group_42_gane1v.svg'
                        title='Por: Juparana'
                        description='Produzindo o seu próprio alimento. Em casa.' />
                </CompaniesDoingCardWrapper>
            </CompaniesDoingContainer>
        </>
    );
};
