import React, { useState } from "react";
import "../CSS/DiscountTag.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import MobileScreenShareIcon from "@material-ui/icons/MobileScreenShare";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { useHistory } from "react-router-dom";

function DiscountTag() {
  const history= useHistory()
  const [slide, setSlide] = useState(true);

  const slideShow = () => {
    if (slide === true) {
      setSlide(false);
    } else {
      setSlide(true);
    }
  };

  return (
    <div className="discountTag">
      <div
        className={`discounttag_left ${slide && `rightHide`} `}
        onClick={slideShow}
      >
        <div className="arrow"></div>
        <p>FLAT ₹300 OFF</p>
      </div>
      <div className={`discounttag_right && ${slide && `slideHide`}`}>
        <div className="discounttag_first">
          <div className="discounttag_firstcontent">
            <p>AVAIL FLAT</p>
            <h3>₹300 OFF</h3>
            <div className="offer">+ FREE DELIVERY</div>
          </div>
          <div className="discounttag_firstimage">
            <img
              src="https://assets.myntassets.com/assets/images/2021/7/14/55d019cb-94d0-4305-8339-f8651dfb1f381626257521654-Desktop-Sidebar---Illustration--2---1-.png"
              alt=""
            />
          </div>
        </div>
        <div className="discounttag_second">
          <div className="discount_coupen">
            <div className="discount_texts">
              <span className="discount_text">Coupen Cose:</span>
              <span className="discount_code">MYNTRA300</span>
            </div>
            <div className="discount_footer">
              Applicable on your first order
            </div>
          </div>
          <div className="discount_button">
              <button onClick={()=> history.push("/login")}>
                <div>SIGN UP NOW</div>
              </button>
          </div>
        </div>
        <div className="discounttag_third">
          <div className="discounttag_item">
            <AcUnitIcon className="item_icon" />
            <span className="discounttag_text">Genuine Products</span>
          </div>
          <div className="discounttag_item">
            <MobileScreenShareIcon className="item_icon" />
            <span className="discounttag_text">Try & Buy</span>
          </div>
          <div className="discounttag_item">
            <ImportExportIcon className="item_icon" />
            <span className="discounttag_text">Easy Exchanges & Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountTag;
