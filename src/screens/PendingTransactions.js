import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

function PendingTransactions(props) {

    const {myCoin} = useContext(CourseContext)

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
                  {myCoin && myCoin.pendingTransactions.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{item.fromAddress === null ? 'Banking' : item.fromAddress}</td>
                        <td>{item.toAddress}</td>
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

export default PendingTransactions;