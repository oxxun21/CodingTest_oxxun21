import React from "react";
import { Menu } from "./model/dataListType";

interface OwnProps extends Omit<Menu, "price"> {
  showBestMenu(name: string): string;
}

// type OwnProps = Menu & {
//   showBestMenu(name: string): string;
// }

export const BestMenu: React.FC<OwnProps> = ({ name, category, showBestMenu }) => {
  return <div>{name}</div>;
};
