import { Button } from "@material-ui/core";
import React from "react";
import "../CSS/ProductList.css";
import ProductFilter from "./ProductFilter";
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
          <div className="productlist_first">
            <ProductListRight
              id="12321344"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780934/2020/4/3/1ed79c22-68b5-491a-b673-e91e4411d8aa1585905063620HIGHLANDERMenOliveGreenBlackSlimFitCheckedCasualShirt1.jpg"
              title="HIGHLANDER"
              description="Slim Fit Casual Shirt"
              rate="584"
            />
            <ProductListRight
              id="12321345"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10016983/2019/6/20/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg"
              title="Camous Sutra"
              description="Colourblocked Round Shirt"
              rate="379"
            />
            <ProductListRight
              id="12321346"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2378362/2018/6/9/270e0a7e-365b-4640-9433-b269c60bf3061528527188563-Moda-Rapido-Men-Maroon-Printed-Round-Neck-T-shirt-3811528527-1.jpg"
              title="Moda Rapido"
              description="Printed Round NecK T-shirt"
              rate="421"
            />
            <ProductListRight
              id="12321347"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7288105/2018/10/24/a059288c-512c-468a-87d4-ce36b52840441540360274049-HERENOW-Men-Shirts-5241540360273894-1.jpg"
              title="HERE&NOW"
              description="Men Regular Fit Casual Shirt"
              rate="599"
            />
          </div>
          <div className="productlist_second">
            <ProductListRight
              id="12321348"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10456354/2019/8/22/d56e75f6-f1a7-4fdd-b430-51befb36f88d1566454760527-Campus-Sutra-Men-Colourblocked-Casual-Spread-Shirt-290156645-1.jpg"
              title="Campus Sutra"
              description="Men Standard Fit Casual Shirt"
              rate="Rs. 599"
            />
            <ProductListRight
              id="12321349"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10106341/2020/12/4/ebd42abb-c45f-4290-b8e7-073f18f3b8541607088518050-HRX-by-Hrithik-Roshan-Ultralyte-Men-Black-Solid-Running-T-sh-1.jpg"
              title="HRX by Hrithik Roshan"
              description="Ultralyte Men Regular T-shirt"
              rate="449"
            />
            <ProductListRight
              id="12321350"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/6/6/0bad7752-d637-4be3-9ebc-6a601f562e191559812909206-1.jpg"
              title="HIGHLANDER"
              description="Men Slim Fit Casual Shirt"
              rate="624"
            />
            <ProductListRight
              id="12321351"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg"
              title="Dennis Lingo"
              description="Men Slim Fit Casual Shirt"
              rate="665"
            />
          </div>
          <div className="productlist_third">
            <ProductListRight
              id="12321351"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/25/dcd80c17-5db3-4176-a0f3-62b74ce386df1614246409273-1.jpg"
              title="H&M"
              description="Round-Neck T-shirt"
              rate="339"
            />
            <ProductListRight
              id="12321352"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"
              title="HRX by Hrithik Roshan"
              description="Printed T-shirt"
              rate="419"
            />
            <ProductListRight
              id="12321353"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12313428/2021/4/1/25d45b91-ea6f-4c9d-ad6e-c2caf375066f1617254943192-Calvin-Klein-Jeans-Men-Shirts-8191617254942321-1.jpg"
              title="Calvin Klein Jeans"
              description="Slim Fit Casual Shirt"
              rate="4124"
            />
            <ProductListRight
              id="12321354"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1824369/2017/5/5/11493980166188-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-1.jpg"
              title="Roadster"
              description="Bush Printed T-shirt"
              rate="419"
            />
          </div>
          <div className="productlist_fourth">
            <ProductListRight
              id="12321355"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg"
              title="HERE&NOW"
              description="Men Regular Fit Casual Shirt"
              rate="899"
            />
            <ProductListRight
              id="12321356"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11262530/2020/1/9/729b1a8d-ea74-4f8a-94dd-67bdae8138911578570881117-Moda-Rapido-Men-Shirts-7151578570877582-1.jpg"
              title="Moda Rapido"
              description="Men Slim Fit Casual Shirt"
              rate="934"
            />
            <ProductListRight
              id="12321357"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7228316/2019/1/30/4d826b89-0119-4c89-8861-4a8cea8ed0691548844555754-DILLINGER-Men-Navy-Blue-Colourblocked-Round-Neck-T-shirt-161-1.jpg"
              title="DILLINGER"
              description="Colourblocked Round Neck"
              rate="449"
            />
            <ProductListRight
              id="12321358"
              image="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/1/4/544ed702-b41d-48c1-8d07-1c87d0d838251546589657734-1.jpg"
              title="HIGHLANDER"
              description="Men Slim Fit Casual Shirt"
              rate="551"
            />
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
              <Button className="number_btn1" >1</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn" >2</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn" >3</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn" >4</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn" >5</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn" >6</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn" >7</Button>
            </li>
            <li className="pagination_number">
              <Button className="number_btn" >8</Button>
            </li>
            <li className="pagination_next">
              <Button className="number_btn" >NEXT <span></span> </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
