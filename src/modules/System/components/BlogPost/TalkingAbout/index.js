import { Card } from '../../../../../shared-components/UI/Card';
import { SeparatorTitle } from '../../../../../shared-components/UI/SeparatorTitle'
import { TalkingAboutContainer } from './styles';
export const TalkingAbout = () => {

    return (
        <TalkingAboutContainer>
            <SeparatorTitle text='O que estão falando' />
            <Card imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636233498/Hack%20Faesa%202021/Group_42_gane1v.svg'
                title='Leafly'
                description='Como reduzimos a produção de lixo em nossa empresa' />
            <Card imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636233498/Hack%20Faesa%202021/Group_42_gane1v.svg'
                title='Leafly'
                description='Como reduzimos a produção de lixo em nossa empresa' />
            <Card imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636233498/Hack%20Faesa%202021/Group_42_gane1v.svg'
                title='Leafly'
                description='Como reduzimos a produção de lixo em nossa empresa' />
        </TalkingAboutContainer>
    );
};
