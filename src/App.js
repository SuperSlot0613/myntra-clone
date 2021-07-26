import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Component/Javascript/Header";
import Home from "./Component/Javascript/Home";
import Footer from "./Component/Javascript/Footer";
import ProductDetail from "./Component/Javascript/ProductDetail";
import DiscountTag from "./Component/Javascript/DiscountTag";
import ProductList from "./Component/Javascript/ProductList";
import LoginForm from "./Component/Javascript/LoginForm";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { SET_USER } from "./features/detailSlice";
import WishList from "./Component/Javascript/WishList";
import Basket from "./Component/Javascript/Basket";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The use is", authUser);

      if (authUser) {
        dispatch(SET_USER(authUser?.email));
        console.log(authUser?.email)
      } else {
        dispatch(SET_USER(null));
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <DiscountTag />
        <Switch>
          <Route exact path="/productdetail">
            <ProductDetail />
            <Footer />
          </Route>
          <Route exact path="/productpage">
            <ProductList />
            <Footer />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/wishlist">
            <WishList/>
            <Footer />
          </Route>
          <Route exact path="/basket">
            <Basket/>
            {/* <Footer /> */}
          </Route>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
