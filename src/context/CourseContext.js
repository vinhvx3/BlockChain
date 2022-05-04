import React, { useEffect, useState } from "react";

import { Blockchain, Transaction } from "../service/blockchain";
import { ec } from "elliptic";

export const CourseContext = React.createContext();

export function CourseProvider(props) {
  const [publicKey, setPublicKey] = useState("");
  const [balance, setBalance] = useState(1);

  useEffect(() => {
    if (localStorage._publicKey) {
      setPublicKey(localStorage._publicKey);
    }
  }, []);

  function createWallet(pin) {
    const EC = new ec("secp256k1");
    const key = EC.genKeyPair();

    let msgHash = pin.split("").map((item) => parseInt(item));

    let signature = key.sign(msgHash);

    let derSign = signature.toDER();

    key.verify(msgHash, derSign);

    const _publicKey = key.getPublic("hex");
    setPublicKey(_publicKey);
    localStorage._publicKey = _publicKey;

    window.location.replace("/");
  }

  return (
    <CourseContext.Provider
      value={{ publicKey, setPublicKey, balance, setBalance, createWallet }}
    >
      {props.children}
    </CourseContext.Provider>
  );
}
