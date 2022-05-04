import axios from "axios";
import React, { useState } from "react";

function AddScreen(props) {
  const [actorInfo, setActorInfo] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      url: "http://localhost:3500/api/actors",
      method: "POST",
      data: {
        first_name: actorInfo.first_name,
        last_name: actorInfo.last_name,
      },
    })
      .then(function (res) {
        console.log(res);
        alert("Actor added!");
      })
      .catch(function (err) {
        alert(err.message);
      });
  }
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="card-header">Actor Information</h4>
            <div className="card-body">
              <form id="frmMain">
                <div className="form-group mt-4">
                  <label htmlFor="txtFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtFirstName"
                    autoFocus
                    value={actorInfo.first_name}
                    onChange={(e) => {
                      setActorInfo({
                        ...actorInfo,
                        first_name: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="txtLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtLastName"
                    value={actorInfo.last_name}
                    onChange={(e) => {
                      setActorInfo({ ...actorInfo, last_name: e.target.value });
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  onClick={handleSubmit}
                >
                  <i className="fa fa-check" aria-hidden="true"></i>
                  Save
                </button>
              </form>
            </div>
            <div className="card-footer text-muted">Footer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddScreen;
