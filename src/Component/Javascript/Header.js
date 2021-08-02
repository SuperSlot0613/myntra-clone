import React from "react";
import "../CSS/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_BASKET, selectBasket } from "../../features/basketSlice";
import { selectUser } from "../../features/detailSlice";
import { EMPTY_WISHLIST, selectWishlist } from "../../features/wishlistSlice";
import { auth } from "../../firebase";
import EventIcon from "@material-ui/icons/Event";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const basket = useSelector(selectBasket);

  const user = useSelector(selectUser);
  console.log(user);

  const wishlist = useSelector(selectWishlist);

  const handleLogin = () => {
    if (user) {
      auth.signOut();
      dispatch(EMPTY_BASKET());
      dispatch(EMPTY_WISHLIST());
      history.push("/");
    }else{
      history.push("/login")
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header_left">
          <img
            src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon.png"
            alt=""
            className="header_img"
          />
        </div>
      </Link>
      <div className="header_middle">
        <p className="header_home">HOME</p>

        <p className="header_women">WOMEN</p>

        <p className="header_Kids">KIDS</p>

        <p className="header_Living">HOEM & LIVING</p>
      </div>
      <div className="header_right">
        <SearchIcon className="header_search" />
        <input placeholder="Search for Products, and much more" type="text" />
      </div>
      <div className="header_righttitle">
        <div className="profile" onClick={handleLogin}>
          {/* <IconButton> */}
          <PersonOutlineIcon className="profile_icon" />
          {/* </IconButton> */}
          <span className="header__optionLineTwo">
            {user ? user : "Profile"}
          </span>
        </div>
        <Link to="/wishlist">
          <div className="wishlist">
            {/* <IconButton> */}
            <FavoriteBorderIcon className="wishlist_icon" />
            {/* </IconButton> */}
            <span className="header__optionLineTwo">
              Wishlist <span>{user ? wishlist?.length : 0}</span>
            </span>
          </div>
        </Link>
        <Link to="/basket">
          <div className="cart">
            <AddShoppingCartIcon className="basket_icon" />
            <span className="header__optionLineTwo">
              Cart <span> {user ? basket?.length : 0}</span>
            </span>
          </div>
        </Link>
        <Link to="/order">
          <div className="cart">
            <EventIcon className="basket_icon" />
            <span className="header__optionLineTwo">Order Items</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
