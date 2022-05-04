import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Kafka } from "kafkajs";

function HomeScreen(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3500/api/actors",
    }).then((res) => {
      setList(res.data);

      console.log(res);
      let responseString = res.data.key;

      responseString.forEach((element) => {
        console.log(element);
      });
    });

    // consume();
  }, []);

  // async function consume() {
  //   const kafka = new Kafka({
  //     clientId: "my-app",
  //     brokers: ["localhost:9092"],
  //   });
  //   const groupNumber = process.argv[2];
  //   const consumer = kafka.consumer({
  //     groupId: `my-app${groupNumber}`,
  //     // minBytes: 100000,
  //   });
  //   await consumer.connect();
  //   console.log("Consumer connected");

  //   await consumer.subscribe({
  //     topic: "test",
  //     fromBeginning: false,
  //   });
  //   let i = 0;
  //   await consumer.run({
  //     partitionsConsumedConcurrently: 3,
  //     autoCommit: false,
  //     eachMessage: async ({ topic, partition, message }) => {
  //       // 1. topic
  //       // 2. partition
  //       // 3. message
  //       console.log(
  //         `STT:${i} -> Partition: ${partition} -> message: ${message.value.toString()} -> offset:${
  //           message.offset
  //         }`
  //       );
  //       i += 1;

  //       // set List -----------------------------
  //       setList(JSON.parse(message.value));
  //     },
  //   });
  // }

  return (
    <div className="container mt-3 mb-3">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <h4 className="card-header d-flex justify-content-between">
              Actor list from SAKILA
              <a className="btn btn-primary" href="/add" role="button">
                <i className="fa fa-plus" aria-hidden="true"></i>
                Add
              </a>
            </h4>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                </thead>
                <tbody id="data-container">
                  {list}
                  {/* {list.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.actor_id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>
                          <a
                            className="btn btn-info"
                            href={`edit?id=${item.actor_id}`}
                            role="button"
                          >
                            edit
                          </a>
                        </td>
                      </tr>
                    );
                  })} */}
                </tbody>
              </table>
            </div>
            <div className="card-footer text-muted">Footer</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
