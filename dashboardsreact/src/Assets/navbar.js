import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="homeContainer">
          <img src="null" alt="Home Icon" />
        </div>
        <div className="statusContainer">
          <img src="null" alt="Status Icon" />
        </div>
        <div className="saveContainer">
          <img src="null" alt="Save Icon" />
        </div>
        <div className="configContainer">
          <img src="null" alt="Config Icon" />
        </div>
        <div className="tourContainer">
          <img src="null" alt="Tour Icon" />
        </div>
      </div>
    );
  }
}

export default Navbar;
