const AddToCart = ({ addToCartItem }) => {
  let addToCartResults = addToCartItem.map((item) => {
    return (
      <div>
        <img src={item.img} alt="" />
        <h6>{item.title}</h6>
      </div>
    );
  });
  return (
    <>
      <div className="add-to-cart-wrapper">
        <div>Your Cart</div>
        <div>
          <div className="add-to-cart-item">{addToCartResults}</div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
