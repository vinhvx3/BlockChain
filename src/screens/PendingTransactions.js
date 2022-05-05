import React, { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

function PendingTransactions(props) {
  const { myCoin, Mine } = useContext(CourseContext);

  const [list, setList] = useState(myCoin ? myCoin.pendingTransactions : []);

  useContext(() => {
    if (myCoin) {
      setList(myCoin.pendingTransactions);
    }
  }, [myCoin]);

  function mine() {
    Mine();
    setList(myCoin.pendingTransactions);
  }

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="card-header d-flex justify-content-between">
              Pending Transactions
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
                  {list.map((item, index) => {
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

            <button
              type="button"
              className="btn btn-success m-5"
              onClick={mine}
            >
              Mine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingTransactions;
