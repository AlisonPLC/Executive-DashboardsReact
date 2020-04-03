import React from "react";

import * as HomeBlack from "./Images/home_black.png";
import * as Status from "./Images/status.png";
import * as saveIcon from "./Images/saveIcon.png";
import * as EditIcon from "./Images/Edit-Icon.png";
import * as productTourIcon from "./Images/product-tour-icon.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="homeContainer">
          <img src={HomeBlack} alt="Home Icon" />
        </div>
        <div className="statusContainer">
          <img src={Status} alt="Status Icon" />
        </div>
        <div className="saveContainer">
          <img src={saveIcon} alt="Save Icon" />
        </div>
        <div className="configContainer">
          <img src={EditIcon} alt="Config Icon" />
        </div>
        <div className="tourContainer">
          <img src={productTourIcon} alt="Tour Icon" />
        </div>
      </div>
    );
  }
}

export default Navbar;
