import type { NextPage } from "next";
import React, { useCallback, useEffect, useState } from "react";
import { _near, _walletConnection, _contract } from "../utils/connect/contract";
import HomePage from "./home";

const Home: NextPage = () => {
  const [authParams, setAuthParams] = useState();
  const [wallet, setWallet] = useState<any>(null);
  const [contract, setContract] = useState();

  const initConnect = useCallback(async () => {
    try {
      if (typeof window === "undefined") return;
      // localStorage.clear();
      const initNear = await _near();
      const initWallet = _walletConnection(initNear);
      // const initContract: any = _contract(initWallet);
      const accountId =
        initWallet._authData.accountId && initWallet.getAccountId();

      // setContract(initContract);
      setWallet(initWallet);
      localStorage.setItem("wallet", JSON.stringify(initWallet));

      if (accountId) {
        setAuthParams((prev: any) => ({
          ...prev,
          isLoggedIn: true,
          account: {
            accountId,
          },
        }));
      } else {
        setAuthParams((prev: any) => ({
          ...prev,
          isLoggedIn: false,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(wallet);

  useEffect(() => {
    // if (wallet !== null) return;
    initConnect();
  }, [initConnect]);

  return <HomePage />;
};

export default Home;
