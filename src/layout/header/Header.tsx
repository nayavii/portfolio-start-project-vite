import { ButtonLink } from "../../components/buttonLink/ButtonLink";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import React from "react";
import { S } from "./Header_Styles";
import { Link } from "react-scroll";

const menuItems = [
  { title: "Home", link: "home" },
  { title: "Projects", link: "projects" },
];

export const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Menu menuItems={menuItems} justify="space-between" />
          <Link to="contacts" smooth={true}>
            <ButtonLink link="" title="Contact" />
          </Link>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
