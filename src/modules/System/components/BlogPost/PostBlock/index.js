import { useLayoutEffect, useState } from "react";
import { Heart } from "react-feather";
import { companies } from "../../../../../shared-components/companies";
import { Card } from "../../../../../shared-components/UI/Card";
import { PostContainer, PostLargeCard, PostLargeCardText } from "./styles";

export const PostBlock = (props) => {
  const [url, setUrl] = useState("");

  const [company, setCompany] = useState({});

  function searchCompany() {
    var id = Number(url.substring(url.lastIndexOf("/")).replace("/", ""));

    var company = companies.find((company) => Number(company.id) === id);

    setCompany(company);
  }

  useLayoutEffect(() => {
    setUrl(window.location.href);
    searchCompany();
  });

  return (
    <>
      <PostContainer>
        <Card
          imageSource={company && company.imgUrl}
          title={`Por ${company && company.name}`}
          description={company && company.text}
        />
        <PostLargeCard>
          <PostLargeCardText>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </PostLargeCardText>
          <Heart />
        </PostLargeCard>
      </PostContainer>
    </>
  );
};
