import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_BASKET } from "../../features/basketSlice";
import "../CSS/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, description, rate, hideButton }) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch(REMOVE_FROM_BASKET(id));
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__description">{description}</p>
        <p className="checkoutProduct__price">
          <small>₹ </small>
          <strong>{rate}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))} */}
        </div>
        {!hideButton && (
          <Button className="basket_button" onClick={removeFromBasket}>Remove from Basket</Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
