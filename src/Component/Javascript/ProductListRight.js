import React, { useState } from "react";
import "../CSS/ProductListRight.css";
import Tilt from "react-vanilla-tilt";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { productLoader } from "../../features/detailSlice";
import { useHistory } from "react-router-dom";
import { ADD_TO_BASKET } from "../../features/basketSlice";
import { ADD_TO_WISHLIST } from "../../features/wishlistSlice";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function ProductListRight({ id, image, title, description, rate }) {
  const [wish, setWish] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const Imagedispatcher = () => {
    dispatch(productLoader({ id, image, title, description, rate }));
    history.push("/productdetail");
  };

  const addToWishlist = () => {
    dispatch(ADD_TO_WISHLIST({ id, image, title, description, rate }));
    toast.success(`Item is Successfylly Added to Wishlist`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  const addToBasket = () => {
    dispatch(ADD_TO_BASKET({ id, image, title, description, rate }));
    toast.success("Item is Successfylly Added to Basket", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="productright" onMouseLeave={() => setWish(false)}>
      <Tilt
        style={{ margin: "0px", padding: "0px" }}
        options={{ scale: 2, glare: true, "max-glare": 1, max: 25 }}
      >
        <div className="product_containers">
          <div className="product_cards">
            <div className="product_contents">
              <img
                src={image}
                alt=""
                onClick={Imagedispatcher}
                onMouseEnter={() => setWish(true)}
              />
              {wish && (
                <Button className="wishlist_button" onClick={addToWishlist}>
                  <FavoriteBorderIcon /> Wishlist
                </Button>
              )}
            </div>
            <div className="product_text ">
              <h4>{title}</h4>
              <p>{description}</p>
              <span>₹{rate}</span>
            </div>
            <div className={`product_button `}>
              <Button className="button" onClick={addToBasket}>
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default ProductListRight;
