import { Button } from "@material-ui/core";
import React from "react";
import "../CSS/ProductList.css";
import ProductFilter from "./ProductFilter";
import ProductListMen from "./ProductListMen";
import ProductListRight from "./ProductListRight";


function ProductList() {
  return (
    <div className="productlist">
      <div className="productlistleft">
        <ProductFilter />
      </div>
      <div className="productlistright">
        <div className="right_upper">
          <div className="optionList">
            <li>
              Bundles<span>v</span>
            </li>
            <li>
              Character<span>v</span>
            </li>
            <li>
              Collar<span>v</span>
            </li>
            <li>
              Country Of origin<span>v</span>
            </li>
            <li>
              Fabric<span>v</span>
            </li>
            <li>
              Fabric2<span>v</span>
            </li>
            <select placeholder="Sort by">
              <option className="option" value="Sort By">
                Sort By:
              </option>
              <option className="option" value="Popularity">
                Popularity
              </option>
              <option className="option" value="Better Discount">
                Better Discount
              </option>
              <option className="option" value="Price:High to Low">
                Price:High to Low
              </option>
              <option className="option" value="Price:Low to High">
                Price:Low to High
              </option>
              <option className="option" value="Customer Rating">
                Customer Rating
              </option>
            </select>
          </div>
          <div className="optionList_down">
            <p>
              Tokeyo<span>X</span>
            </p>
            <p>
              Athena <span>X</span>
            </p>
            <p>
              50% And Above <span>X</span>
            </p>
          </div>
        </div>
        <div className="right_main">
          <div className="product_listCategories">
            <ProductListMen />
          </div>
        </div>
        <div className="page_btn">
          <ul className="pagination_container">
            <li className="pagination_Meta">
              <span>Page</span>
              <span>1</span>
              <span>of</span>
              <span>1152</span>
            </li>
            <li className="pagination_active">
              <Button className="number_btn1">1</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn">2</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn">3</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn">4</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn">5</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn">6</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn">7</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn">8</Button>
            </li>
            <li className="pagination_next">
              <Button className="number_btn">
                NEXT <span></span>{" "}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
