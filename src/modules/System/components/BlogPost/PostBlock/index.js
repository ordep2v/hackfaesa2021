import { Heart } from "react-feather";
import { Card } from "../../../../../shared-components/UI/Card";
import { PostContainer, PostLargeCard, PostLargeCardText } from "./styles";
export const PostBlock = () => {
    return (
        <>
            <PostContainer>
                <Card imageSource='https://res.cloudinary.com/dtqaoxaot/image/upload/v1636233493/Hack%20Faesa%202021/Group_57_btgvm8.svg'
                    title='Por: Volkswagner'
                    description='Como reduzimos a produção de lixo em nossa empresa' />
                <PostLargeCard>
                    <PostLargeCardText>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </PostLargeCardText>
                    <Heart />
                </PostLargeCard>
            </PostContainer>
        </>
    );
};
