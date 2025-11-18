import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialIconList>
        <SocialItem>
          <SocialLink>
            <Icon
              iconId="gmailSvg"
              width="38px"
              height="38px"
              viewBox="0 0 38 38"
            />
          </SocialLink>
          <SocialTitleLink >gmail</SocialTitleLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon
              iconId="linkedinSvg"
              width="38px"
              height="38px"
              viewBox="0 0 38 38"
            />
          </SocialLink>
          <SocialTitleLink>linkedIn</SocialTitleLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon
              iconId="githubSvg"
              width="38px"
              height="38px"
              viewBox="0 0 38 38"
            />
          </SocialLink>
          <SocialTitleLink href="https://github.com/nayavii" target="_blank">github</SocialTitleLink>
        </SocialItem>
      </SocialIconList>
      <Menu menuItems={["Projects", "Contact"]} justify="center" gap="48px" />
      <Copyright>© 2025 Hanna Alesik. All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding-bottom: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

const SocialIconList = styled.ul`
  display: flex;
  gap: 76px;
  justify-content: center;
  align-items: center;
`;

const SocialItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SocialLink = styled.a``;

const SocialTitleLink = styled.a`
  font-size: 12px;
  line-height: 11.11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
`;

const Copyright = styled.small`
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.1em;
`;
