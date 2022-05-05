import React, { useContext, useState } from "react";

import { CourseContext } from "../context/CourseContext";

function SendScreen(props) {
  const { SendCoin } = useContext(CourseContext);

  const [coin, setCoin] = useState(0);
  const [receiver, setReceiver] = useState("");

  function send() {
    SendCoin(receiver, coin);
    setCoin(0);
  }
  return (
    <div className="send container" style={{ padding: "5rem 20rem" }}>
      <h4>Amount</h4>
      <div className="input-group my-5">
        <input
          type="number"
          className="form-control"
          value={coin}
          onChange={(e) => {
            setCoin(e.target.value);
          }}
        />
        <span className="input-group-text">&#920; </span>
      </div>
      <h4>Receiver</h4>
      <div className="input-group my-5">
        <input
          type="text"
          className="form-control"
          value={receiver}
          onChange={(e) => {
            setReceiver(e.target.value);
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-success"
        style={{ width: "100%" }}
        onClick={send}
      >
        Continue
      </button>
    </div>
  );
}

export default SendScreen;
