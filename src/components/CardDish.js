import React from "react";
import Popup from "./Popup";

function CardDish(props) {
  return (
    <li>
      <a
        href="javaScript:;"
        onClick={() =>
          props.showPopupHandler(
            props.menuItem.strMeal,
            props.menuItem.strMealThumb
          )
        }
      >
        <img src={props.menuItem.strMealThumb} className="br" alt="" />
        <h4>{props.menuItem.strMeal}</h4>
      </a>
    </li>
  );
}

export default CardDish;
