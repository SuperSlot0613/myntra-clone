import React from "react";
import "../CSS/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useHistory} from 'react-router-dom'
import { getBasketTotal, selectBasket } from "../../features/basketSlice";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";

function Subtotal() {

  const history=useHistory();
  const basket = useSelector(selectBasket)

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              Your order qualifies for FREE Delivery! Select this option at
              checkout.
              <br></br>
              <input type="checkbox" />
              This is a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <Button className="proceedbutton" onClick={e=>history.push('/payment')}>Procced To checkOut</Button>
    </div>
  );
}

export default Subtotal;
