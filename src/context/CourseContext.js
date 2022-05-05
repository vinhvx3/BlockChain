import React, { useEffect, useState } from "react";
import { ec } from "elliptic";

const { Blockchain, Transaction } = require("../service/blockchain");

export const CourseContext = React.createContext();

export function CourseProvider(props) {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const [myKey, setMyKey] = useState("");

  const [balance, setBalance] = useState(0);

  const [myCoin, setMyCoin] = useState(null);

  const [pendingLength, setPendingLength] = useState(0);

  useEffect(() => {
    console.log("hiiiiiii");
    if (localStorage._privateKey && myCoin === null) {
      const EC = new ec("secp256k1");

      const _myKey = EC.keyFromPrivate(localStorage._privateKey);
      const _publicKey = _myKey.getPublic("hex");

      const _myCoin = new Blockchain();

      setPrivateKey(localStorage._privateKey);
      setPublicKey(_publicKey);
      setMyKey(_myKey);
      setMyCoin(_myCoin);
    }
  }, [myCoin]);

  async function CreateWallet(pin) {
    const EC = new ec("secp256k1");
    const key = EC.genKeyPair();

    let msgHash = pin.split("").map((item) => parseInt(item));

    let signature = key.sign(msgHash);

    let derSign = signature.toDER();

    key.verify(msgHash, derSign);

    const _publicKey = key.getPublic("hex");
    setPublicKey(_publicKey);
    const _privateKey = key.getPrivate("hex");
    setPrivateKey(_privateKey);

    localStorage._privateKey = _privateKey;

    setMyKey(key);

    const _myCoin = new Blockchain();

    setMyCoin(_myCoin);

    setBalance(12);

    window.location.replace("/");
  }

  function ReceiveCoin(value) {
    const transaction = new Transaction(null, publicKey, value);
    myCoin.addTransaction(transaction);
    setPendingLength(myCoin.pendingTransactions.length);
  }

  function SendCoin(dist, value) {
    const transaction = new Transaction(publicKey, dist, value);
    transaction.signTransaction(myKey);
    try {
      myCoin.addTransaction(transaction);
    } catch (error) {
      alert(error);
    }
    setPendingLength(myCoin.pendingTransactions.length);
  }

  function Mine() {
    myCoin.minePendingTransactions(publicKey);
    setPendingLength(myCoin.pendingTransactions.length);
    GetBalance();
  }

  function GetBalance() {
    setBalance(myCoin.getBalanceOfAddress(publicKey));
  }

  return (
    <CourseContext.Provider
      value={{
        publicKey,
        setPublicKey,
        privateKey,
        balance,
        setBalance,
        CreateWallet,
        ReceiveCoin,
        SendCoin,
        Mine,
        myCoin,
        pendingLength,
        setPendingLength,
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
}
