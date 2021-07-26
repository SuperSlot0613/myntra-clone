import React from "react";
import { useSelector } from "react-redux";
import { selectDetails } from "../../features/detailSlice";
import "../CSS/ProductDetail.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PinterestIcon from '@material-ui/icons/Pinterest';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { ADD_TO_BASKET } from "../../features/basketSlice";
import { useHistory } from "react-router-dom";
import { useDispatch} from "react-redux";

function ProductDetail() {
  const dispatch = useDispatch();
  const history = useHistory()
  const detail = useSelector(selectDetails)
  const id=detail.id
  const image=detail.image
  const title=detail.title
  const description=detail.description
  const rate=detail.rate
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  const addToBasket=()=>{
    dispatch(ADD_TO_BASKET({id,image,title,description,rate}))
  }

  window.addEventListener("resize", slideImage);
  return (
    <div className="productdetail">
      <div className="card-wrapper">
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img
                  src={detail.image}
                  alt="shoe image"
                />
                <img
                  src={detail.image}
                  alt="shoe image"
                />
                <img
                  src={detail.image}
                  alt="shoe image"
                />
                <img
                  src={detail.image}
                  alt="shoe image"
                />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="#" data-id="1">
                  <img
                    src={detail.image}
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="2">
                  <img
                    src={detail.image}
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="3">
                  <img
                    src={detail.image}
                    alt="shoe image"
                  />
                </a>
              </div>
              <div className="img-item">
                <a href="#" data-id="4">
                  <img
                    src={detail.image}
                    alt="shoe image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">{detail.title}</h2>
            <a href="#" className="product-link">
              visit nike store
            </a>
            <div className="product-rating">
              <i className="fas fa-star"><StarIcon/></i>
              <i className="fas fa-star"><StarIcon/></i>
              <i className="fas fa-star"><StarIcon/></i>
              <i className="fas fa-star"><StarHalfIcon/></i>
              <i className="fas fa-star-half-alt"></i>
              <span>4.7(21)</span>
            </div>

            <div className="product-price">
              <p className="last-price">
                Old Price: <span>₹. 857</span>
              </p>
              <p className="new-price">
                New Price: <span>₹. {detail.rate}</span>
              </p>
            </div>

            <div className="product-detail">
              <h2>about this item: </h2>
              <p>
                {detail.description}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, perferendis eius. Dignissimos, labore suscipit.
                Unde.
              </p>
              <ul>
                <li>
                  Color: <span>Black</span>
                </li>
                <li>
                  Available: <span>in stock</span>
                </li>
                <li>
                  Category: <span>{detail.title}</span>
                </li>
                <li>
                  Shipping Area: <span>All over the world</span>
                </li>
                <li>
                  Shipping Fee: <span>Free</span>
                </li>
              </ul>
            </div>

            <div className="purchase-info">
              <input type="number" min="0" value="1" />
              <button type="button" className="btn" onClick={addToBasket} >
                Add to Cart <i className="fas fa-shopping-cart"></i>
              </button>
              <button type="button" className="btn">
                Buy Now
              </button>
            </div>

            <div className="social-links">
              <p>Share At: </p>
              <a href="#">
                <i className="fa_facebook"><FacebookIcon className="facebook" /></i>
              </a>
              <a href="#">
                <i className="fa_twitter"><TwitterIcon className="twitter" /></i>
              </a>
              <a href="#">
                <i className="fa_instagram"><InstagramIcon className="instagram" /></i>
              </a>
              <a href="#">
                <i className="fa_whatsapp"><WhatsAppIcon className="whatsapp" /></i>
              </a>
              <a href="#">
                <i className="fa_pinterest"><PinterestIcon className="pinterest" /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
