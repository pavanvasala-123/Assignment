import React from "react";
import "../ProductCard/ProductCard.css";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const ProductCard = ({ eachProduct }) => {
  const { title, price, image } = eachProduct;
  return (
    <div className="product_card">
      <div className="product_image">
        <img src={image} alt="" />
        {/* <BookmarkBorderOutlinedIcon className='book_mark_icon'/> */}
      </div>
      <h4>{title.substring(0, 12)}</h4>
      <div className="price_discount_bag_con">
        <div className="price_con">
          <h3>₹{price}</h3>
          <p className="actual_price">500</p>
          <p className="discount">(50% off)</p>
        </div>
        <ShoppingBagOutlinedIcon className="bag_icon" />
      </div>
    </div>
  );
};

export default ProductCard;
