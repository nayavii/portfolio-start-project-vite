import styled from "styled-components";
import { ButtonLink } from "../../components/buttonLink/ButtonLink";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const menuItems = ["Home", "Projects"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Menu menuItems={menuItems} justify="space-between" />
          <ButtonLink link="#" title="Contact"/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 28px 0;
`;
