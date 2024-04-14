import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "../Navbar/Navbar.css";



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_top">
        <p>TANN TRIM</p>
        <div className="nav_left">
          <SearchOutlinedIcon className="nav_icon" />
          <PermIdentityOutlinedIcon className="nav_icon" />
          <BookmarkBorderOutlinedIcon className="nav_icon" />
          <ShoppingBagOutlinedIcon className="nav_icon" />
        </div>
      </div>
      <div className="navbar_links_container">
        <ul>
          <li>Bags</li>
          <li>Travel</li>
          <li>Accesories</li>
          <li>Gifting</li>
          <li>Jewelery</li>
        </ul>
      </div>
      <div className="bag_category_container">
        <img src="https://icons8.com/icon/21823/bag" alt="all_bags" />
      </div>
    </div>
  );
};

export default Navbar;
