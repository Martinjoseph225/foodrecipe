import React, { useState, useEffect } from "react";
import FilteredDishes from "./FilteredDishes";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import { AllMenus } from "./AllMenuContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Header from "./Header";

function Menus() {
  return (
    <div>
      <Router>
        {" "}
        <Hero />
        {/* <AllMenus>
          <SpecialDishes />
          <FilteredDishes />
        </AllMenus> */}
        <Switch>
          <Route exact path="/">
            <AllMenus>
              <SpecialDishes />
              <FilteredDishes />
            </AllMenus>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Menus;
