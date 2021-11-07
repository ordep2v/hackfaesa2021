import { Button } from '../../../../shared-components/UI/Button';
import { Input } from '../../../../shared-components/UI/Input';
import { SeparatorTitle } from '../../../../shared-components/UI/SeparatorTitle'
import { ContactUsForm } from '../../../Home/components/ContactUs/styles';
import { TopButton } from '../BlogPost/TopButton';
import { PostCommentContainer } from './styles';
export const PostComment = () => {
    return (
        <PostCommentContainer>
            <TopButton/>
            <SeparatorTitle text='Divulge a sua ação' />
            <ContactUsForm>
                <Input placeholder={'Título'} size='lg' variant='solid'></Input>
                <Input placeholder={'Texto'} size='lg' variant='solid'></Input>
                <Button text="Enviar" type="submit" />
            </ContactUsForm>
        </PostCommentContainer>
    );
};
