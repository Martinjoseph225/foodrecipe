import React, { useContext, useState, useEffect } from "react";
import CardDish from "./CardDish";
import Pagination from "./Pagination";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes(props) {
  let [menuCategory, setMenuCategory] = useState([]);

  let [singleDish, setSingleDish] = useState([]);
  let allMenus = useContext(AllMenuContext);

  let [filteredDishes, setFilteredDishes] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;
  let maxItem = 4;
  let showTheDishesNow = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );
  let singleDishItems = singleDish.map((item, index) => {
    if (index < maxItem) {
      return (
        <li>
          <img src={item.strMealThumb} className="br" alt="" />
          <h5>{item.strMeal}</h5>
        </li>
      );
    }
  });

  async function getALLTheCategories() {
    const API_URL = "https:www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategory(categoryData.categories);
    // console.log("catergory", categoryData.categories);
  }
  async function getOnlyDish() {
    const API_URL = "https:www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
    // console.log("catergory", categoryData.categories);
    console.log("single", singleDish);
  }

  useEffect(() => {
    getALLTheCategories();
    getOnlyDish();
  }, []);

  function showFilteredDishesHandler(category) {
    setSingleDish([]);
    setActiveDish(category);
    let filterdDishesAre = allMenus
      .filter((item) => {
        return item.strCategory === category;
      })
      .map((menuItem) => {
        return <CardDish menuItem={menuItem} />;
      });
    setFilteredDishes(filterdDishesAre);
  }

  let allCategories = menuCategory.map((item) => {
    return (
      <li
        className={item.strCategory === activeDish ? "active" : ""}
        onClick={() => {
          showFilteredDishesHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });
  return (
    <div className="filtered-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            molestias at, dignissimos reprehenderit excepturi consequatur libero
            laborum minus temporibus placeat quidem! Earum doloremque distinctio
            iure debitis, rerum minima excepturi architecto?
          </p>
        </div>
        <div className="filtered-dishes">
          <ul>{allCategories}</ul>
        </div>
        <div className="filtered-dishes-results">
          <ul className="filtered-dishes-1">
            {singleDishItems}
            {singleDishItems !== 0 || filteredDishes.length > 0 ? (
              showTheDishesNow
            ) : (
              <div className="alert">
                <h3>Sorry No items found</h3>
                <h4>Please choose another dish</h4>
              </div>
            )}
          </ul>
        </div>
        <Pagination
          filteredDishes={filteredDishes}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default FilteredDishes;
