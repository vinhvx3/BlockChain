import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

import provider from "../static/image/provider.jpg";

function ReceiveScreen(props) {
  const { ReceiveCoin } = useContext(CourseContext);

  const [coin, setCoin] = useState(0);
  return (
    <div className="receive container" style={{ padding: "5rem 20rem" }}>
      <h4>How much do you want to receive?</h4>
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
      <h4>Provider</h4>
      <img src={provider} alt="" className="mb-5" style={{ width: "100%" }} />

      <button
        type="button"
        className="btn btn-success"
        style={{ width: "100%" }}
        onClick={() => {
          ReceiveCoin(parseInt(coin));
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default ReceiveScreen;
