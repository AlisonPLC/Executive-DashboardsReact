import React from "react";

import * as BackButton from "./Images/back-button.png";
import * as Arrow from "./Images/Filter-Icon.png";
import * as Grid from "./Images/Grid-Icon.png";
import * as ListView from "./Images/List-View-Icon.png";

import * as Sender from "./Images/sender.png";
import * as DeleteIcon from "./Images/Delete-ico.png";
import * as EditIcon from "./Images/Edit-Icon.png";
import * as ShareIcon from "./Images/Share-Icon.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboardHeader">
        <div className="backButtonAlign">
          <img src={BackButton} alt="backButton" />
          <div className="executiveDashboard">
            <h4>Executive </h4>
            <h4 className="nonbbold">Dashboard</h4>
          </div>
        </div>
        <h4 className="selectDashboard dashboardMargin">Select</h4>
        <select class="selectDashboardPannel dashboardMargin">
          <option value="executive">Executive Dashboards</option>
        </select>
        <div className="gridDisplayContainer dashboardMargin">
          <img className="gridDisplay" src={Grid} alt="Grid Display" />
        </div>
        <div className="barsDisplayContainer dashboardMargin">
          <img className="barsDisplay" src={ListView} alt="Bars Display" />
        </div>
      </div>
      <div className="dashboardBetween">
        <div class="headerItem dName">
          <h4>Dashboard Name</h4>
          <img src={Arrow} alt="arrow" />
        </div>
        <div class="headerItem dCreated">
          <h4>Created on</h4>
          <img src={Arrow} alt="arrow" />
        </div>
        <div class="headerItem dWho">
          <h4>Who</h4>
          <img src={Arrow} alt="arrow" />
        </div>
        <div class="headerItem dAction">
          <h4>Action</h4>
        </div>
      </div>
      <div class="listView">
        {/* --- */}
        <div class="listViewItem">
          <div class="itemSquare">
            <h5>View</h5>
          </div>
          <div class="itemDescription">
            <h4>Booking Revenue</h4>
            <h5>Created ashboard with shipment value and sales</h5>
          </div>
          <div class="date">
            <h5>2/2/2018</h5>
          </div>
          <div class="ViewLogoContainer">
            <img src={Sender} alt="Sender.logo" />
          </div>
          <h5 class="listUserName">T Ririka Sigh</h5>
          <img class="viewDelete" src={DeleteIcon} alt="Delete_logo" />
          <img class="viewEdit" src={EditIcon} alt="Edit_logo" />
          <img class="viewShare" src={ShareIcon} alt="Share.logo" />
        </div>
        {/* --- */}
        <div class="listViewItem">
          <div class="itemSquare">
            <h5>View</h5>
          </div>
          <div class="itemDescription">
            <h4>Booking Revenue</h4>
            <h5>Created ashboard with shipment value and sales</h5>
          </div>
          <div class="date">
            <h5>2/2/2018</h5>
          </div>
          <div class="ViewLogoContainer">
            <img src={Sender} alt="Sender.logo" />
          </div>
          <h5 class="listUserName">T Ririka Sigh</h5>
          <img class="viewDelete" src={DeleteIcon} alt="Delete_logo" />
          <img class="viewEdit" src={EditIcon} alt="Edit_logo" />
          <img class="viewShare" src={ShareIcon} alt="Share.logo" />
        </div>
        {/* --- */}
        <div class="listViewItem listSelected">
          <div class="itemSquare squareSelected">
            <h5 className="purpleFont">View</h5>
          </div>
          <div class="itemDescription">
            <h4 className="purpleFont">Booking Revenue</h4>
            <h5 className="purpleFont">
              Created ashboard with shipment value and sales
            </h5>
          </div>
          <div class="date">
            <h5>2/2/2018</h5>
          </div>
          <div class="ViewLogoContainer">
            <img src={Sender} alt="Sender.logo" />
          </div>
          <h5 class="listUserName">T Ririka Sigh</h5>
          <img class="viewDelete" src={DeleteIcon} alt="Delete_logo" />
          <img class="viewEdit" src={EditIcon} alt="Edit_logo" />
          <img class="viewShare" src={ShareIcon} alt="Share.logo" />
        </div>
        {/* --- */}
        <div class="listViewItem">
          <div class="itemSquare">
            <h5>View</h5>
          </div>
          <div class="itemDescription">
            <h4>Booking Revenue</h4>
            <h5>Created ashboard with shipment value and sales</h5>
          </div>
          <div class="date">
            <h5>2/2/2018</h5>
          </div>
          <div class="ViewLogoContainer">
            <img src={Sender} alt="Sender.logo" />
          </div>
          <h5 class="listUserName">T Ririka Sigh</h5>
          <img class="viewDelete" src={DeleteIcon} alt="Delete_logo" />
          <img class="viewEdit" src={EditIcon} alt="Edit_logo" />
          <img class="viewShare" src={ShareIcon} alt="Share.logo" />
        </div>
        {/* --- */}
        <div class="listViewItem">
          <div class="itemSquare">
            <h5>View</h5>
          </div>
          <div class="itemDescription">
            <h4>Booking Revenue</h4>
            <h5>Created ashboard with shipment value and sales</h5>
          </div>
          <div class="date">
            <h5>2/2/2018</h5>
          </div>
          <div class="ViewLogoContainer">
            <img src={Sender} alt="Sender.logo" />
          </div>
          <h5 class="listUserName">T Ririka Sigh</h5>
          <img class="viewDelete" src={DeleteIcon} alt="Delete_logo" />
          <img class="viewEdit" src={EditIcon} alt="Edit_logo" />
          <img class="viewShare" src={ShareIcon} alt="Share.logo" />
        </div>
        {/* --- */}
      </div>
    </div>
  );
}

export default Dashboard;
