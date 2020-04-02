import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logoCotainer">
          <img src="null" alt="Logo" />
        </div>
        <div className="search">
          <div className="searchCotainer">
            <img src="null" alt="Search Icon" />
          </div>
          <input
            type="text"
            class="searchbar"
            placeholder="Search e.g. live instagram channel"
          />
        </div>
        <div className="headerBar" />
        <div className="bellContainer">
          <img src="null" alt="Notifications" />
        </div>
        <div className="headerBar" />
        <div className="userPicContainer">
          <img src="null" alt="User Pic" />
        </div>
      </div>
    );
  }
}

export default Header;
