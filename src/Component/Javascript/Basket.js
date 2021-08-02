import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../../features/basketSlice";
import { selectUser } from "../../features/detailSlice";
import "../CSS/Basket.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Basket() {
  const user = useSelector(selectUser);
  const basket = useSelector(selectBasket);

  return (
    <div className="basket">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              rate={item.rate}
            />
          ))}
          Basket Item
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Basket;
