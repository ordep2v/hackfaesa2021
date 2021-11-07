import { useEffect, useState } from "react";

import { Badge } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { Button } from "../Button";

import {
  StampProgressArticle,
  StampProgressBar,
  StampProgressDescription,
  StampProgressImage,
  StampProgressImageDivision,
  StampProgressMainBox,
  StampProgressTextBox,
  StampProgressTitle,
} from "./styles";

export const Stamp = (props) => {
  const toast = useToast();

  const [collaborative, setCollaborative] = useState(true);

  const parseCollaborative = async (collaborative) => {
    await setCollaborative(!collaborative);

    toast({
      title: collaborative
        ? "Sua ação se tornou colaborativa!!"
        : "A ação está privada",
      description: collaborative
        ? "Isso significa que outras empresas terão acesso ao seu objetivo"
        : "Isso significa que outras empresas não terão acesso ao seu objetivo",
      status: collaborative ? "success" : "info",
      duration: 9000,
      isClosable: true,
    });
  };

  useEffect(() => {
    if (props.progressBar && props.progressBarLength) {
      document.getElementById(
        "progress-bar"
      ).style.width = `${props.progressBarLength}%`;
    }
  }, []);
  return (
    <>
      <StampProgressArticle>
        <StampProgressMainBox>
          <StampProgressImageDivision>
            <StampProgressImage src={props.imageSource} />
          </StampProgressImageDivision>
          <StampProgressTextBox>
            <StampProgressTitle>{props.title}</StampProgressTitle>
            <StampProgressDescription>
              {props.description}
            </StampProgressDescription>
          </StampProgressTextBox>
          {props.isBadge && (
            <Badge variant="solid" colorScheme={props.isBadgeColor}>
              {props.badgeText}
            </Badge>
          )}
        </StampProgressMainBox>
        {!!props.progressBar && props.progressBarLength && (
          <StampProgressBar id="progress-bar" />
        )}
        {props.share && (
          <Button
            variant={!collaborative ? "solid" : "outline"}
            onClick={() => parseCollaborative(collaborative)}
            text={props.shareText}
          />
        )}
      </StampProgressArticle>
    </>
  );
};
