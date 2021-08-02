import React from "react";
import "../CSS/WishList.css";
import Tilt from "react-vanilla-tilt";
import { Button } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import { ADD_TO_BASKET } from "../../features/basketSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { REMOVE_FROM_WISHLIST } from "../../features/wishlistSlice";

function WishListProduct({id, image, title, description, rate }) {

    const dispatch = useDispatch();

    const removeToWishList=() =>{
        dispatch(REMOVE_FROM_WISHLIST(id))
        toast.success("Item is Remove From WishList", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
    }

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
        dispatch(REMOVE_FROM_WISHLIST(id))
      };

  return (
    <div className="wishList_product">
      <Tilt
        style={{ margin: "0px", padding: "0px" }}
        options={{ scale: 2, glare: true, "max-glare": 1, max: 25 }}
      >
        <div className="wishlist_containers">
          <div className="wishlist_cards">
            <div className="wishlist_contents">
              <img
                src={image}
                alt=""
              />
              <CancelIcon className="closecart_Icon" onClick={removeToWishList} />
            </div>
            <div className="wishlist_text ">
              <h4>{title}</h4>
              <p>{description}</p>
              <span>₹{rate}</span>
            </div>
            <div className="wishlistcart_button">
              <Button className="button" onClick={addToBasket} >ADD TO CART</Button>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default WishListProduct;
