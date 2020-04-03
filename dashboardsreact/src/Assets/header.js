import React from "react";

import * as Logo from "./Images/Logo.png";
import * as SearchIcon from "./Images/Search-Icon.png";
import * as BellIcon from "./Images/BellIcon.png";
import * as userPic from "./Images/User-Pic.png";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logoCotainer">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="search">
          <div className="searchCotainer">
            <img src={SearchIcon} alt="Search Icon" />
          </div>
          <input
            type="text"
            class="searchbar"
            placeholder="Search e.g. live instagram channel"
          />
        </div>
        <div className="headerBar" />
        <div className="bellContainer">
          <img src={BellIcon} alt="Notifications" />
        </div>
        <div className="headerBar" />
        <div className="userPicContainer">
          <img src={userPic} alt="User Pic" />
        </div>
      </div>
    );
  }
}

export default Header;
