import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ButtonLink } from "../../../../components/buttonLink/ButtonLink";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  imageSrc?: string;
  title?: string;
  tags?: string[];
  description?: string;
  demoLink?: string;
  codeLink?: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <Image src={props.imageSrc} alt="" />
      <ContentWrapper>
        <Title>{props.title}</Title>
        <FlexWrapper gap="12px">
          {props.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </FlexWrapper>
        <Description>{props.description}</Description>
        <FlexWrapper gap="15px">
          <ButtonLink link="#" title="Demo" />
          <ButtonLink link="#" title="Code" outlined />
        </FlexWrapper>
      </ContentWrapper>
    </StyledProject>
  );
};

const StyledProject = styled.div`
  width: 520px;
  height: 100%;
  background-color: ${theme.colors.cardBg};
`;

const ContentWrapper = styled.div`
  padding: 25px 25px 35px;
`;

const Image = styled.img`
  width: 100%;
  height: 390px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Tag = styled.span`
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 12%;
  text-transform: uppercase;
  padding: 8px 16px;
  border: 1px solid ${theme.colors.accent};
  color: ${theme.colors.accent};
  border-radius: 4px;
  margin: 15px 0 20px;
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 4%;
  margin-bottom: 20px;
`;
