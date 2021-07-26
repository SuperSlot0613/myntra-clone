import React from "react";
import "../CSS/ProductItem.css";
import Tilt from "react-vanilla-tilt";
import { useHistory } from "react-router-dom";

function ProductItem({image}) {
  const history=useHistory()

  const productdetail=()=>{
    history.push("/productpage")
  }

  return (
    <div className="productitem">
      <Tilt
        style={{ margin: "0px", padding: "0px" }}
        options={{ scale: 2, glare: true, "max-glare": 1,max:25, }}
      >
        <div className="product_container">
          <div className="product_card">
            <div className="product_content">
              <img
                src={image}
                alt=""
                onClick={productdetail}
              />
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default ProductItem;
