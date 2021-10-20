import React, { useState, useEffect } from "react";
import "../CSS/Order.css";
import { db } from "../../firebase";
import Order from "./Order";
import { useSelector } from "react-redux";
import { selectBasket } from "../../features/basketSlice";
import {
  selectMobile,
  selectUser,
  selectUserUid,
} from "../../features/detailSlice";
import axios from "axios";

function Orders() {
  const user = useSelector(selectUser);
  const useruid = useSelector(selectUserUid);
  // console.log(useruid)

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(useruid)
        .collection("orders")
        // .orderBy("timestamp", "desc")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });

      axios.get("http://localhost:8888/orders").then(function (response) {
        // console.log(response);
      });
    } else {
      setOrders([]);
    }
  }, []);
  // console.log(orders)
  return (
    <div className="orders">
      <h1>Your Oders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
