import React from "react";
import { useSelector } from "react-redux";
import { selectWishlist } from "../../features/wishlistSlice";
import "../CSS/WishList.css";
import WishListProduct from "./WishListProduct";

function WishList() {
  const wishlist = useSelector(selectWishlist);
  return (
    <div className="wishlistcart">
      <div className="wishlist_upper">
        <h1>
          My WishList <span>items {wishlist?.length}</span>
        </h1>
      </div>
      <div className="wishlist_cart">
        {wishlist.map((item) => (
          <WishListProduct
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
}

export default WishList;
