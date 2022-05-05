import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../context/CourseContext";

function HistoryScreen(props) {
  const { myCoin, publicKey } = useContext(CourseContext);

  const [list, setList] = useState(
    myCoin ? myCoin.getAllTransactionsForWallet(publicKey) : []
  );

  useEffect(() => {
    if (myCoin) {
      setList(myCoin.getAllTransactionsForWallet(publicKey));
    }
  }, [myCoin, publicKey]);
  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="card-header d-flex justify-content-between">
              History Transactions
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
                  {list
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

export default HistoryScreen;
