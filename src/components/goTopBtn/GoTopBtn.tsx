import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsShowBtn(true);
      } else {
        setIsShowBtn(false);
      }
    });
  }, []);

  return (
    isShowBtn && (
      <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
        <Icon
          iconId={"arrowScroll"}
          width="20px"
          height="20px"
          viewBox="0 0 32 32"
        />
      </StyledGoTopBtn>
    )
  );
};

const StyledGoTopBtn = styled.button`
  padding: 10px;
  border: none;
  background: ${theme.colors.cardBg};
  cursor: pointer;
  border-radius: 50%;

  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 1000;

  transform: scale(1, -1);
`;
