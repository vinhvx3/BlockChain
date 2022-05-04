import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

function CreateScreen(props) {
  const { createWallet } = useContext(CourseContext);

  const [pin, setPin] = useState("");
  return (
    <div className="create  container row my-5">
      <h1 className="my-5">Create Wallet</h1>
      <div class="input-group" style={{ width: "50%" }}>
        <span class="input-group-text">Enter pin</span>
        <input
          type="number"
          aria-label="First name"
          class="form-control"
          value={pin}
          onChange={(e) => {
            setPin(e.target.value);
          }}
        />
      </div>

      <button
        type="button"
        class="btn btn-warning"
        style={{ width: "5rem" }}
        onClick={() => {
          createWallet(pin);
        }}
      >
        Create
      </button>
    </div>
  );
}

export default CreateScreen;
