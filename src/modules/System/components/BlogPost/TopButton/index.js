import { ButtonContainer, CompaniesDoingCard, CompaniesDoingCardWrapper, CompaniesDoingContainer } from "./styles";
import { Button } from '../../../../../shared-components/UI/Button'
export const TopButton = () => {

    function goBack() {
        window.history.back();
    }
    return (
        <>
            <ButtonContainer>
                <Button variant='solid' text='< Voltar' onClick={goBack} />
            </ButtonContainer>
        </>
    );
};
