import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div>
        <Link to="/" className="homead">
          Home
        </Link>
      </div>
      <div>
        <Link to="/checkout" className="checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Header;
