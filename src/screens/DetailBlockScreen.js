import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseContext } from "../context/CourseContext";

function DetailBlockScreen(props) {
  const { id } = useParams();

  const { myCoin } = useContext(CourseContext);
  const [item, setItem] = useState({});

  useEffect(() => {
    myCoin && setItem(myCoin.getAllBlock().filter((item) => item.miner)[id]);
  }, [id, myCoin]);
  return (
    <div className="detail-block my-5 container px-5">
      <h4>Block: #{id}</h4>
      {item && (
        <ul class="list-group pe-5">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Timestamp:
            <span>{item.timestamp}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Transactions:
            <span>
              <span class="badge bg-primary rounded-pill">
                {item.transactions && item.transactions.length} transactions
              </span>{" "}
              in this block
            </span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Mined by:
            <span className="address">{item.miner}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Nonce:
            <span className="address">{item.nonce}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Difficulty:
            <span className="address">{myCoin && myCoin.difficulty}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Uncles Reward::
            <span className="address">{myCoin && myCoin.miningReward}</span>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DetailBlockScreen;
