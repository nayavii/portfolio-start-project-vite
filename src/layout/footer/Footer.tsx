import React from "react";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import { S } from "./Footer_Styles";

const socialLinks = [
  { id: "gmailSvg", title: "gmail", href: "#" },
  {
    id: "linkedinSvg",
    title: "linkedIn",
    href: "https://www.linkedin.com/in/alesikhanna",
  },
  { id: "githubSvg", title: "github", href: "https://github.com/nayavii" },
];

const menuItems = [
  { title: "Home", link: "home" },
  { title: "Projects", link: "projects" },
];


export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.SocialIconList>
        {socialLinks.map(({ id, title, href }, index) => {
          return (
            <S.SocialItem key={index}>
              <S.SocialLink href={href} target="_blank">
                <Icon
                  iconId={id}
                  width="38px"
                  height="38px"
                  viewBox="0 0 38 38"
                />
              </S.SocialLink>
              <S.SocialTitleLink>{title}</S.SocialTitleLink>
            </S.SocialItem>
          );
        })}
      </S.SocialIconList>
      <Menu menuItems={menuItems} justify="center" gap="48px" />
      <S.Copyright>© 2025 Hanna Alesik. All Rights Reserved.</S.Copyright>
    </S.Footer>
  );
};
