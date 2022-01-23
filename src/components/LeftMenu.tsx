import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export default function LeftMenu() {
  const { width } = useWindowDimensions();

  let returned =
    width <= 768 ? null : <div className="leftmenu">Left Menu</div>;
  return returned;
}
