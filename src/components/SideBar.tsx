import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

export default function SideBar() {
  const { width } = useWindowDimensions();

  let returned = width <= 768 ? null : <div className="sidebar">Sidebar</div>;
  return returned;
}
