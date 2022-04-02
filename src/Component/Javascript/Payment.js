import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "../CSS/Payment.css";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import {
  getBasketTotal,
  selectBasket,
  EMPTY_BASKET,
} from "../../features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectMobile,
  selectUser,
  selectUserUid,
} from "../../features/detailSlice";
import { db } from "../../firebase";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import axios from "axios";

function Payment() {
  const basket = useSelector(selectBasket);
  const user = useSelector(selectUser);
  const useruid = useSelector(selectUserUid);
  const mobile = useSelector(selectMobile);

  // const [allInfo, setallInfo] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [pamount, setPamount] = useState(getBasketTotal(basket));

  navigator.geolocation.getCurrentPosition(function (position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    // console.log("Latitude is :", position.coords.latitude);
    // console.log("Longitude is :", position.coords.longitude);
  });

  const makePayment = (token, address) => {
    const body = {
      token,
      pamount,
      address,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8888/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        // const { status } = response;
        db.collection("users")
          .doc(useruid)
          .collection("orders")
          .doc()
          .set({
            name: address?.billing_name,
            // emailid_user:user?.email,
            mobile: mobile,
            city: address?.billing_address_city,
            address: address?.billing_address_line1,
            zipCode: address?.billing_address_zip,
            state: address?.billing_address_state,
            basket: basket,
            amount: getBasketTotal(basket),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });

        const custmorsInfo = {
          user,
          mobile,
          pamount,
          address,
          basket,
        };

        axios
          .post("http://localhost:8888/orderInfo", custmorsInfo)
          .then(function (response) {
            console.log(response);
          });

        dispatch(EMPTY_BASKET());
        history.push("/order");
        // console.log("address", address);
        // console.log("STATUS ", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/Checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>
              <strong>Latitude :</strong> {latitude}
            </p>
            <p>
              <strong>Longitude :</strong> {longitude}
            </p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item and Delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                rate={item.rate}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form>
              <div className="payment__priceContainer">
                <div className="payment__priceContainer">
                  <StripeCheckout
                    className="stripe_checkout"
                    stripeKey="pk_test_51J1XdTSDeAiXyTkgBNUMtGq6tvOz0yxAUMjoYKr0CXfSmzZjrUm1eA77irtXUpldQcor1V6k39PCVcj0hMJdU2IJ00mmMY9knC"
                    token={makePayment}
                    name="Buy Product"
                    amount={getBasketTotal(basket) * 100}
                    currency="INR"
                    shippingAddress
                    billingAddress
                    //allowRememberMe
                    // bitcoin={true}
                  >
                    <Button
                      className="payment_btn"
                      style={{
                        color: "white",
                        background: "crimson",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      Buy Product ₹{getBasketTotal(basket)}.00
                    </Button>
                  </StripeCheckout>
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total : {value}.00</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
