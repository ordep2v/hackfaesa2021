import { MakeDiffContainer, MakeDiffSliderWrapper } from "./styles";
import { SeparatorTitle } from "../../../../../shared-components/UI/SeparatorTitle";

import { VideoBox } from "../../../../../shared-components/UI/VideoBox";

export const MakeDiff = () => {
  const videos = [
    {
      title: "Começando plantação de Microgreens",
      link: "https://res.cloudinary.com/dtqaoxaot/video/upload/v1636218764/Hack%20Faesa%202021/Adobestock_195963915-3_f0m5n1.mp4",
      image:
        "https://integrisok.com/-/media/blog/21-q3/oyh_microgreens.ashx?revision=7d364ff0-7c9a-4508-935d-6f49f4f7aa97",
    },
    {
      title: "A importância da Colaboração ",
      link: "https://res.cloudinary.com/dtqaoxaot/video/upload/v1636218759/Hack%20Faesa%202021/Adobestock_339214275-7_sftbwu.mp4",
      image:
        "https://cms-static.wehaacdn.com/documentmedia-com/images/collabecosystem_small.581.widea.0.png",
    },
    {
      title: "Ecologia sustentável",
      link: "https://res.cloudinary.com/dtqaoxaot/video/upload/v1636218755/Hack%20Faesa%202021/210819_06_Health_And_Expressions_4K_003-1_vwfwht.mp4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcjiHpgEDK94Bf4hyUGt95cOTjGnL6mEQiw&usqp=CAU",
    },
    {
      title: "Juntos somos mais fortes",
      link: "https://res.cloudinary.com/dtqaoxaot/video/upload/v1636218751/Hack%20Faesa%202021/Adobestock_166532722-2_jocbue.mp4",
      image:
        "https://previews.123rf.com/images/olegdudko/olegdudko1804/olegdudko180405679/100191946-fathers-and-sons-hands-holding-green-growing-plant-over-nature-background-new-life-spring-and-ecolog.jpg",
    },
    {
      title: "Criando uma cultura de consumo de orgânicos",
      link: "https://res.cloudinary.com/dtqaoxaot/video/upload/v1636218752/Hack%20Faesa%202021/Adobestock_312127358-5_oatjpn.mp4",
      image: "https://grist.org/wp-content/uploads/2015/11/organic.jpg",
    },
  ];

  return (
    <>
      <SeparatorTitle text="Faça a diferença em poucos passos" />
      <MakeDiffContainer>
        <MakeDiffSliderWrapper>
          {videos.map((video) => (
            <VideoBox
              text={video.title}
              videoSource={video.link}
              imageSource={video.image}
            />
          ))}
        </MakeDiffSliderWrapper>
      </MakeDiffContainer>
    </>
  );
};
