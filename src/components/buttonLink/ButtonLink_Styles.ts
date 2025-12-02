import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

const Link = styled.a<{ outlined?: boolean }>`
  padding: 12px 20px;
  border-radius: 6px;
  font-weight: 500;
  display: inline-block;
  background: ${theme.colors.gradient};
  border: none;
  color: ${theme.colors.bg};
  transition: ${theme.animations.transition};

  &:hover {
    opacity: 0.85;
  }

  // outlined Style
  ${(props) =>
    props.outlined &&
    css<{ outlined?: boolean }>`
      background: transparent;
      color: ${theme.colors.accent};
      border: 2px solid ${theme.colors.accent};
      padding: 10px 20px;

      &:hover {
        opacity: 0.65;
      }
    `}
`;

export const S = {
  Link,
};
