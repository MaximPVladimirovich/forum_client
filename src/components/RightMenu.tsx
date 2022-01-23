import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export default function RightMenu() {
  const { width } = useWindowDimensions();
  let returned =
    width <= 768 ? null : <div className="rightmenu">Right Menu</div>;
  return returned;
}
