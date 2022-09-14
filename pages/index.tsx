import type { NextPage } from "next";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { NearLogContextApi } from "../AppContext";
import { _near, _walletConnection } from "../utils/connect/contract";
import HomePage from "./home";

const Home: NextPage = () => {
  return <HomePage />;
};

export default Home;
