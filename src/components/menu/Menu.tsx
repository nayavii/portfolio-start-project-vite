import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = (props: {
  menuItems: Array<string>;
  justify?: string;
  gap?: string;
}) => {
  return (
    <StyledMenu justify={props.justify} gap={props.gap}>
      <ul>
        {props.menuItems.map((item, index) => (
          <ListItem key={index}>
            <Link href="#">{item}</Link>
          </ListItem>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav<{ justify?: string; gap?: string }>`
  width: 100%;
  margin-right: 32px;
  ul {
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify || "flex-start"};
    gap: ${(props) => props.gap || "0px"};
  }
`;

const ListItem = styled.li`
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
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

const Link = styled.a`
  color: ${theme.colors.accent};
  font-weight: 500;
`;
