import React, { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function Sidebar(props) {
  const { publicKey, balance } = useContext(CourseContext);

  function Restart() {
    localStorage._publicKey = "";
    window.location.replace("/create");
  }
  return (
    <div className="card">
      <ul
        className="list-group list-group-flush p-4"
        style={{ height: "100vh", backgroundColor: "#061e40" }}
      >
        <li
          className="list-group-item my-3"
          style={{ backgroundColor: "#05c0a5", borderRadius: "20px" }}
        >
          <div className="card-body">
            <h5 className="card-title">MY WALLET</h5>
            <p className="card-text">
              #
              {publicKey.slice(0, 15) +
                " ... " +
                publicKey.slice(publicKey.length - 5, publicKey.length)}
            </p>
            <h1>&#920; {balance}.00</h1>
          </div>
        </li>
        <li className="list-group-item list-group-item-success rounded-3 my-2 text-center">
          <a href="/receive">
            <h5>Receive</h5>
          </a>
        </li>

        <li className="list-group-item list-group-item-success rounded-3 my-2 text-center">
          <a href="/send">
            <h5>Send</h5>
          </a>
        </li>
        <li className="list-group-item list-group-item-success rounded-3 my-2 text-center">
          <a href="/history">
            <h5>History</h5>
          </a>
        </li>
        <li
          className="list-group-item list-group-item-danger rounded-3 my-5 text-center"
          onClick={Restart}
        >
          <h5>Restart</h5>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
