import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";
import AddToCart from "./AddToCart";

function SpecialDishes() {
  //
  const allMenus = useContext(AllMenuContext);

  let [currentDish, setCurrentDish] = useState("");
  let [dishImage, setDishImage] = useState("");
  let [showPopup, setShowPopup] = useState(false);
  let [addToCartItem, setAddToCartItem] = useState(""); //[{}]
  function showPopupHandler(dishName, dishImage) {
    // return <Popup />;
    setDishImage(dishImage);
    setCurrentDish(dishName);
    setShowPopup(true);
  }
  function closePopupHandler() {
    setShowPopup(false);
  }
  function addToCartHandler(addToCartImg, addToCartTitle) {
    setAddToCartItem([
      ...addToCartItem,
      { img: addToCartImg, title: addToCartTitle },
    ]);
  }

  let maxSpecialDishes = 8;

  let specialMenus = allMenus.map((menuItem, index) => {
    if (index < maxSpecialDishes) {
      return (
        <CardDish menuItem={menuItem} showPopupHandler={showPopupHandler} />
      );
    }
  });
  return (
    <section className="special-dishes">
      {showPopup && (
        <Popup
          addToCartHandler={addToCartHandler}
          closePopupHandler={closePopupHandler}
          currentDish={currentDish}
        />
      )}
      <div className="container">
        {addToCartItem && <AddToCart addToCartItem={addToCartItem} />}
        <div className="special-dishes-content">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            dolorem non consequatur sequi aliquid voluptas, voluptatibus, dolor
            quaerat temporibus voluptates voluptatum nobis magnam aspernatur
            explicabo.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
