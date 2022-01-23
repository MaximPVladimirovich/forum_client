import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import Category from "../models/Category";
import { getCategories } from "../services/DataService";

export default function LeftMenu() {
  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(function () {
    try {
      getCategories().then(function (categories: Array<Category>) {
        const cats = categories.map(function (cat) {
          return <li key={cat.id}>{cat.name}</li>;
        });
        setCategories(<ul className="category">{cats}</ul>);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  let returned =
    width <= 768 ? null : <div className="leftmenu">{categories}</div>;
  return returned;
}
