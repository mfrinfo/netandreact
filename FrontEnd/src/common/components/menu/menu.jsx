import React from "react";
import Const from "../../../consts";

export default (props) => (
  <nav className="mt-2">
    <ul
      className="nav nav-pills nav-sidebar flex-column"
      data-widget="treeview"
      role="menu"
      data-accordion="false"
    >
      <li className="nav-item has-treeview menu-open">
        <ul className="nav nav-treeview">
          <li className="nav-item">
            <a href={Const.FRONT_URL} className="nav-link active">
              <i className="fas fa-flag nav-icon"></i>
              <p>{Const.TITULO_HOME}</p>
            </a>
          </li>
        </ul>
        <ul className="nav nav-treeview">
        </ul>
      </li>
    </ul>
  </nav>
);
