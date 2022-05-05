import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CourseContext } from "../context/CourseContext";

function HomeScreen(props) {
  const { myCoin } = useContext(CourseContext);

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="card-header d-flex justify-content-between">
              List Blocks
            </h4>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Miner</th>
                    <th>Transactions</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody id="data-container">
                  {myCoin &&
                    myCoin
                      .getAllBlock()
                      .filter((item) => item.miner)
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              {" "}
                              <Link to={"detail/" + index}>{index}</Link>
                            </td>
                            <td className="address">{item.miner}</td>
                            <td>{item.transactions.length}</td>
                            <td>{item.timestamp}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="card-header d-flex justify-content-between">
              List Transactions
            </h4>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Amount</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody id="data-container">
                  {myCoin &&
                    myCoin
                      .getAllTransactions()
                      .filter((item) => item.amount !== 0)
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{index}</td>
                            <td className="address">
                              {item.fromAddress === null
                                ? "Banking"
                                : item.fromAddress}
                            </td>
                            <td className="address">{item.toAddress}</td>
                            <td>{item.amount}</td>
                            <td>{item.timestamp}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
