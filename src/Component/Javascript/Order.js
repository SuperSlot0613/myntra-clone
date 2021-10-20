import React, { useState, useEffect } from "react";
import "../CSS/Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectBasket } from "../../features/basketSlice";
import { selectMobile, selectUser } from "../../features/detailSlice";

function Order({ order }) {
  const user = useSelector(selectUser);
  const mobile = useSelector(selectMobile);
  const [employee, setEmployee] = useState([]);

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [deliverytime, setDeliveryTime] = useState();

  var today = new Date();
  const time =today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  navigator.geolocation.getCurrentPosition(function (position) {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    // console.log("Latitude is :", position.coords.latitude);
    // console.log("Longitude is :", position.coords.longitude);
  });

  // useEffect(() => {
  //   db.collection("Deliveryboy").onSnapshot((snapshot) => {
  //     setEmployee(
  //       snapshot.docs.map((doc) => ({
  //         // id=doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  // }, []);

  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.timestamp).format("MMMM Do YYYY , h:mma")}</p>
      <p>
        <strong>Delivery Boy:</strong>Saurabh
      </p>
      <p>
        <strong>Name :</strong>
        {order.data.name}
      </p>
      <p>
        <strong>Street :</strong>
        {order.data.address}
      </p>
      <p>
        <strong>City :</strong> {order.data.city}
      </p>
      <p>
        <strong>Zip Code :</strong>
        {order.data.zipCode}
      </p>
      <p>
        <strong>Mobile :</strong>
        {order.data.mobile}
      </p>

      <p className="order__id">
        <small>
          <strong>ID :</strong>
          {order.id}
        </small>
        <br></br>
        <strong>Email : {user}</strong>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          rate={item.rate}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        // decimalScale={2}
        value={order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
