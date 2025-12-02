import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";

const Menu = styled.nav<{ justify?: string; gap?: string }>`
  width: 100%;
  margin-right: 32px;
  ul {
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify || "flex-start"};
    gap: ${(props) => props.gap || "0px"};
  }
`;

const ListItem = styled.li<{ active?: boolean }>`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 0%;
    left: 0;
    bottom: -3px;
    height: 2px;
    background: ${theme.colors.gradient};
    transition: ${theme.animations.transition};

    ${(props) =>
      props.active &&
      css<{ active?: boolean }>`
        width: 100%;
      `}
  }

  &:hover::before {
    width: 100%;
  }
`;

const TabLink = styled.a<{ active?: boolean }>`
  color: ${theme.colors.text};
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;

  ${(props) =>
    props.active &&
    css<{ active?: boolean }>`
      color: ${theme.colors.accent};
    `}
`;

const NavLink = styled(Link)`
  color: ${theme.colors.accent};
  font-weight: 500;
  cursor: pointer;
`;

export const S = {
  Menu,
  ListItem,
  NavLink,
  TabLink,
};
