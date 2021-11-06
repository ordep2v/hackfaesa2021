import { PostBlock } from "./PostBlock";
import { BlogPostContainer } from "./styles";
import { TalkingAbout } from "./TalkingAbout";
import { TopButton } from "./TopButton";

export const BlogPost = () => {
  return (
    <BlogPostContainer>
    <TopButton/>
    <PostBlock/>
    <TalkingAbout/>
    </BlogPostContainer>
  );
};
