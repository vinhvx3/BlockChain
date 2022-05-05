import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";

import logo from "../logo.svg";

function Header(props) {
  const { pendingLength } = useContext(CourseContext);

  return (
    <div className="header card mt-2">
      <div className="card-header d-flex justify-content-between">
        <Link className="d-flex" to="/">
          <img src={logo} style={{ height: "2.4rem" }} alt="" />
          <h3>MyCoin</h3>
        </Link>

        <Link className="btn" style={{ background: "#b2bddc" }} to="/pending">
          Pending transactions
          <span className="mx-2" style={{ color: "red" }}>
            {pendingLength}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
