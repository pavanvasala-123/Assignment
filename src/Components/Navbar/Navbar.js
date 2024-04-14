import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "../Navbar/Navbar.css";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import NextWeekOutlinedIcon from '@mui/icons-material/NextWeekOutlined';

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
        {/* <img src="" alt="all_bags" /> */}
        <div>
            <ShoppingBagIcon className="icon" />
            <p>All Bags</p>
        </div>
        <div>
          <BusinessCenterOutlinedIcon className="icon" />
          <p>Vanity Pouch</p>
        </div>
        <div>
           <LocalMallOutlinedIcon className="icon" />
           <p>Tote Bag</p>
        </div>
        <div>
        <WorkOutlineOutlinedIcon className="icon" />
        <p>Duffle Bag</p>
        </div>
        <div>
          <LuggageOutlinedIcon className="icon" />
          <p>Laptop Sleeve</p>
        </div>
        <div>
          <BusinessCenterOutlinedIcon className="icon" />
          <p>Messenger Bags</p>
        </div>
        <div>
          <CasesOutlinedIcon className="icon" />
          <p>SlingsBags</p>
        </div>
        <div>
          <NextWeekOutlinedIcon className="icon" />
          <p>Hand Bags</p>
        </div>
        <div>
          <BusinessCenterOutlinedIcon className="icon" />
          <p>Buck Bags</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
