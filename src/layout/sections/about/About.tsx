import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./About_Styles";
import photo from "../../../assets/images/about_photo.png";
import React from "react";

const languages = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "B1" },
  { name: "Spanish", level: "B2" },
];

export const About: React.FC = () => {
  return (
    <S.About id="about">
      <Container>
        <FlexWrapper justify="space-between" gap="20px" align="center">
          <S.Photo src={photo}/>
          <S.ContentWrapper>
            <SectionTitle>About me</SectionTitle>
            <FlexWrapper gap="12px" wrap="wrap">
              {languages.map(({ name, level }, index) => (
                <S.Language key={index}>
                  {name} - {level}
                </S.Language>
              ))}
            </FlexWrapper>
            <S.Description>
              I’m Hanna Alesik, a web designer and frontend developer. I create
              minimalist, atmospheric interfaces where aesthetics meet precise,
              clean code. I love details, thoughtful typography, and solutions
              that feel alive. A honest visual style, a well-designed structure,
              and a sense of quiet depth are essential to me — the kind of
              impressions that stay with the user long after they interact with
              the product.
            </S.Description>
          </S.ContentWrapper>
        </FlexWrapper>
      </Container>
    </S.About>
  );
};
