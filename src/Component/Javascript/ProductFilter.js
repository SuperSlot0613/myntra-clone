import React, { useState } from "react";
import "../CSS/ProductFilter.css";
import SearchIcon from "@material-ui/icons/Search";
import CheckboxItem from "./CheckboxItem";
import CloseIcon from "@material-ui/icons/Close";

function ProductFilter() {
  const [categorie, setCategorie] = useState(false);
  const [brand, setBrand] = useState(false)
  const [price, setPrice] = useState(false)
  const [color, setColor] = useState(false)
  const [discount, setDiscount] = useState(false)

  function Showhidden(str) {
    if (str === "categories") {
      if (categorie === true) {
        setCategorie(false);
      } else {
        setCategorie(true);
      }
    }else if(str==="brand"){
      if (brand === true) {
        setBrand(false);
      } else {
        setBrand(true);
      }
    }else if(str==="price"){
      if (price === true) {
        setPrice(false);
      } else {
        setPrice(true);
      }
    }else if(str==="color"){
      if (color === true) {
        setColor(false);
      } else {
        setColor(true);
      }
    }else{
      if (discount === true) {
        setDiscount(false);
      } else {
        setDiscount(true);
      }
    }
  }

  return (
    <div className="productfilter">
      <div className="filter">
        <h4>FILTER</h4>
        <span>CLEAR ALL</span>
      </div>
      <div className="box_left">
        <div className="categories">
          {!categorie && (
            <div className="search">
              <h4>CATEGORIES</h4>
              <SearchIcon
                className="search_icon"
                onClick={()=>Showhidden("categories")}
              />
            </div>
          )}
          {categorie && (
            <div className="search_brand">
              <input type="text" placeholder="Search...." />
              <CloseIcon className="close" onClick={() => Showhidden("categories")} />
            </div>
          )}
          <CheckboxItem item="Dresses" value="443" checkbox={true} />
          <CheckboxItem item="Tops" value="643" checkbox={true} />
          <CheckboxItem item="Jackets" value="239" checkbox={true} />
          <CheckboxItem item="Jeans" value="843" checkbox={true} />
          <CheckboxItem item="SweatShirts" value="743" checkbox={true} />
          <CheckboxItem item="Trousers" value="943" checkbox={true} />
          <CheckboxItem item="Tracks Pants" value="743" checkbox={true} />
          <CheckboxItem item="Shirts" value="543" checkbox={true} />
          <p>+10 More</p>
        </div>
        <div className="brand">
          {!brand && (
            <div className="search">
              <h4>BRAND</h4>
              <SearchIcon
                className="search_icon"
                onClick={() => Showhidden("brand")}
              />
            </div>
          )}
          {brand && (
            <div className="search_brand">
              <input type="text" placeholder="Search...." />
              <CloseIcon className="close" onClick={() => Showhidden("brand")} />
            </div>
          )}
          <CheckboxItem item="Roadster" value="3443" checkbox={true} />
          <CheckboxItem item="Vero Moda" value="2443" checkbox={true} />
          <CheckboxItem item="DressBerry" value="2204" checkbox={true} />
          <CheckboxItem item="HERE&NOW" value="2003" checkbox={true} />
          <CheckboxItem item="ONLY" value="1644" checkbox={true} />
          <CheckboxItem item="Mast & Harbour" value="1621" checkbox={true} />
          <CheckboxItem item="Tokyo Talkies" value="1563" checkbox={true} />
          <CheckboxItem item="Oxolloxo" value="1513" checkbox={true} />
          <p>+64 More</p>
        </div>
        <div className="price">
          {!price && (
            <div className="search">
              <h4>PRICE</h4>
              <SearchIcon
                className="search_icon"
                onClick={() => Showhidden("price")}
              />
            </div>
          )}
          {price && (
            <div className="search_brand">
              <input type="text" placeholder="Search...." />
              <CloseIcon className="close" onClick={() => Showhidden("price")} />
            </div>
          )}
          <CheckboxItem
            item="Rs. 230 to Rs. 998"
            value="1455"
            checkbox={true}
          />
          <CheckboxItem
            item="Rs. 998 to Rs. 1766"
            value="310"
            checkbox={true}
          />
          <CheckboxItem item="Rs. 1766 to Rs. 2534" value="3" checkbox={true} />
          <CheckboxItem item="Rs. 2534 to Rs. 3302" value="3" checkbox={true} />
        </div>
        <div className="color">
          {!color && (
            <div className="search">
              <h4>COLOR</h4>
              <SearchIcon
                className="search_icon"
                onClick={() => Showhidden("color")}
              />
            </div>
          )}
          {color && (
            <div className="search_brand">
              <input type="text" placeholder="Search...." />
              <CloseIcon className="close" onClick={() => Showhidden("color")} />
            </div>
          )}
          <CheckboxItem
            color="black"
            item="Black"
            value="1455"
            check={true}
            checkbox={true}
          />
          <CheckboxItem
            color="blue"
            item="Blue"
            value="238"
            check={true}
            checkbox={true}
          />
          <CheckboxItem
            color="navy blue"
            item="Navy Blue"
            value="170"
            check={true}
            checkbox={true}
          />
          <CheckboxItem
            color="green"
            item="Green"
            value="126"
            check={true}
            checkbox={true}
          />
          <CheckboxItem
            color="pink"
            item="Pink"
            value="104"
            check={true}
            checkbox={true}
          />
          <CheckboxItem
            color="white"
            item="White"
            value="101"
            check={true}
            checkbox={true}
          />
          <CheckboxItem
            color="gray"
            item="Gray"
            value="73"
            check={true}
            checkbox={true}
          />
          <p>+32 MORE</p>
        </div>
        <div className="discount_range">
          {!discount && (
            <div className="search">
              <h4>DISCOUNT RANGE</h4>
              <SearchIcon
                className="search_icon"
                onClick={() => Showhidden("discount")}
              />
            </div>
          )}
          {discount && (
            <div className="search_brand">
              <input type="text" placeholder="Search...." />
              <CloseIcon className="close" onClick={() => Showhidden("discount")} />
            </div>
          )}
          <CheckboxItem item="10% and Above " radio={true} radioid="radio1" />
          <CheckboxItem item="20% and Above" radio={true} radioid="radio2" />
          <CheckboxItem item="30% and Above" radio={true} radioid="radio3" />
          <CheckboxItem item="40% and Above" radio={true} radioid="radio4" />
          <CheckboxItem item="50% and Above" radio={true} radioid="radio5" />
          <CheckboxItem item="60% and Above" radio={true} radioid="radio6" />
          <CheckboxItem item="70% and Above" radio={true} radioid="radio7" />
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
