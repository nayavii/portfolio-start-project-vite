import React from "react";
import { S } from "./Menu_Styles";

type TabItemType = {
  title: string;
  status: string;
};

type MenuItemType = {
  title: string;
  link: string;
};

type MenuPropsType = {
  menuItems?: MenuItemType[];
  tabsItems?: TabItemType[];
  justify?: string;
  gap?: string;
  handleFilterChange?: (status: string) => void;
  currentFilterStatus?: string;
};

type MenuUnionItem = MenuItemType | TabItemType;

export const Menu: React.FC<MenuPropsType> = ({
  menuItems,
  tabsItems,
  justify,
  gap,
  handleFilterChange,
  currentFilterStatus,
}) => {
  const items: MenuUnionItem[] = menuItems ?? tabsItems ?? [];

  return (
    <S.Menu justify={justify} gap={gap}>
      <ul>
        {items.map((item, index) => {
          const isTabItem =
            typeof item === "object" && item !== null && "status" in item;
          const isActive = isTabItem && item.status === currentFilterStatus;

          return (
            <S.ListItem active={isActive} key={index}>
              {isTabItem ? (
                <S.TabLink
                  active={isActive}
                  as="button"
                  onClick={() =>
                    handleFilterChange && handleFilterChange(item.status)
                  }
                >
                  {item.title}
                </S.TabLink>
              ) : (
                <S.NavLink to={item.link} smooth={true}>
                  {item.title}
                </S.NavLink>
              )}
            </S.ListItem>
          );
        })}
      </ul>
    </S.Menu>
  );
};
