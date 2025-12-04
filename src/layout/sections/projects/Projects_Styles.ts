import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Projects = styled.section``;

const MenuWrapper = styled.div`
  margin-bottom: 25px;

  ul li a {
    color: ${theme.colors.text};
    font-weight: 400;
  }
`;

// Project styles

const ProjectWrapper = styled.div`
  padding-right: 30px;
  width: 100%;
  max-width: 540px;

  @media ${theme.media.mobile} {
   padding: 0 5px;
  }
`;

const Project = styled.div`
  width: 100%;
  background-color: ${theme.colors.cardBg};
  height: 100%;
`;

const ContentWrapper = styled.div`
  padding: 25px 25px 35px;

  @media ${theme.media.mobile} {
    padding: 16px 16px 30px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 340px;
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
  width: 100%;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 4%;
  margin-bottom: 20px;
`;

export const S = {
  Projects,
  MenuWrapper,
  Project,
  ContentWrapper,
  Image,
  Title,
  Tag,
  Description,
  ProjectWrapper,
};
