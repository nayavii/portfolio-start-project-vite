import React from "react";
import { S } from "./ButtonLink_Styles";

type ButtonLinkPropsType = {
  link?: string;
  title: string;
  outlined?: boolean;
  download?: boolean;
  target?: string;
};
export const ButtonLink: React.FC<ButtonLinkPropsType> = ({ link, title, outlined, target}: ButtonLinkPropsType) => {
  return (
    <S.Link href={link} outlined={outlined} target={target}>
      {title}
    </S.Link>
  );
};
