import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function EditScreen(props) {
  const location = useLocation();

  const [actorInfo, setActorInfo] = useState({});

  useEffect(() => {
    let id = location.search.split("?id=")[1];
    if (id) {
      axios({
        method: "get",
        url: "http://localhost:3500/api/actors/" + id,
      }).then(function (res) {
        if (!res) {
          alert("Error load data!");
        } else {
          setActorInfo(res.data);
        }
      });
    }
  }, [location]);

  function handleDelete(e) {
    e.preventDefault();

    axios({
      url: "http://localhost:3500/api/actors/" + actorInfo.actor_id,
      method: "DELETE",
    })
      .then(async function (res) {
        await alert("Actor deleted!");
        window.location.replace("/");
      })
      .catch(function (err) {
        alert(err.message);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios({
      url: "http://localhost:3500/api/actors/" + actorInfo.actor_id,
      method: "PUT",
      data: {
        first_name: actorInfo.first_name,
        last_name: actorInfo.last_name,
      },
    })
      .then(function (res) {
        console.log(res);
        alert("Actor updated!");
      })
      .catch(function (err) {
        console.error(err.responseText);
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
                <div className="form-group d-flex mt-4">
                  <label className="col-2" htmlFor="txtFirstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="txtFirstName"
                    value={actorInfo.first_name}
                    onChange={(e) => {
                      setActorInfo({
                        ...actorInfo,
                        first_name: e.target.value,
                      });
                    }}
                    autoFocus
                  />
                </div>
                <div className="form-group d-flex mt-4">
                  <label className="col-2" htmlFor="txtLastName">
                    Last Name
                  </label>
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
                <div className="button-group d-flex justify-content-between mt-4 px-4">
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="delete"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleSubmit}
                  >
                    <i className="fa fa-check" aria-hidden="true"></i>
                    Update
                  </button>
                </div>
              </form>
              <div
                className="note mt-4"
                style={{ color: "red", fontSize: "12px" }}
              >
                *Chỉ xóa được các actor mới tạo
              </div>
            </div>
            <div className="card-footer text-muted">Footer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditScreen;
