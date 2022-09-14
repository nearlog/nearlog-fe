import type { NextPage } from "next";
import Image from "next/image";
import React, { useEffect } from "react";
import portfolio_styles from "../styles/Portfolio.module.css";
import common_styles from "../styles/Common.module.css";
import { MAIN_CONTRACT_ID } from "../utils/connect/contract";

const Portfolio: NextPage = () => {
  const login = () => {
    // const wallet = localStorage.getItem("wallet") || "";
    // wallet?.requestSignIn(MAIN_CONTRACT_ID, "Rust Counter Example");
  };
  useEffect(() => {
    console.log("local", localStorage.getItem("wallet"));
  }, []);
  return (
    <div className={`${common_styles.space_top} ${common_styles.bg_main}`}>
      <div
        className={`${common_styles.container} ${common_styles.full_screen_height}`}
      >
        <div className={`${portfolio_styles.welcome}`}>
          <Image
            src="/images/logo-nearlend-transparent.png"
            layout="fixed"
            width={64}
            height={60}
            alt="Logo Nearlend Dao"
          />
          <h3>Welcome to Nearlog</h3>
          <button onClick={login} className={`${common_styles.btn_custom}`}>
            Connect wallet
          </button>
        </div>
        <div className={`${portfolio_styles.wrap_position}`}>
          <div className={`${portfolio_styles.position}`}>
            <div>
              <h3>Open Positions</h3>
              <p>You have no open positions</p>
            </div>
            <button className={`${common_styles.btn_custom}`}>
              Start trading{" "}
              <Image
                src="/images/arrow-right.png"
                layout="fixed"
                width={13}
                height={8}
                alt="Arrow right"
                style={{ paddingLeft: "2px" }}
              />
            </button>
          </div>
          <div
            className={`${portfolio_styles.position} ${portfolio_styles.values}`}
          >
            <div>
              <h3>Values</h3>
            </div>
            <div className={`${portfolio_styles.info_values}`}>
              <div>
                <h4>Total Value Locked</h4>
                <p>$1.2m</p>
              </div>
              <div>
                <h4>30D Volume</h4>
                <p>$755k</p>
              </div>
              <div>
                <h4>Open Interest</h4>
                <p>$0.12m</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${portfolio_styles.wrap_market}`}>
          <div
            className={`${portfolio_styles.position} ${portfolio_styles.position_full_width}`}
          >
            <h3>Markets</h3>
            <div className={`${common_styles.width_100_percent}`}>
              <div className={`${portfolio_styles.wrap_market_title}`}>
                <p>Market</p>
                <p>24H Price</p>
                <p>Open Interest</p>
                <p>30D Volume</p>
              </div>
              {mock_data.map((item, idx) => {
                return (
                  <div
                    key={item.token_name + idx}
                    className={`${portfolio_styles.wrap_market_title}`}
                  >
                    <div className={`${portfolio_styles.market_info}`}>
                      <div className={`${portfolio_styles.market_info_token}`}>
                        <Image
                          src={item.img}
                          layout="fixed"
                          width={32}
                          height={32}
                          alt={item.token_name}
                        />
                        <h6>{item.token_name}</h6>
                      </div>
                    </div>
                    <div className={`${portfolio_styles.market_info}`}>
                      <div className={`${portfolio_styles.market_info_value}`}>
                        <h4>{item.price}</h4>
                        <h6 className={`${portfolio_styles[`${item.status}`]}`}>
                          {item.percent}
                        </h6>
                      </div>
                    </div>
                    <div className={`${portfolio_styles.market_info}`}>
                      <div className={`${portfolio_styles.market_info_value}`}>
                        <h4>{item.interest}</h4>
                        <h6>{item.amount}</h6>
                      </div>
                    </div>
                    <div className={`${portfolio_styles.market_info}`}>
                      <div className={`${portfolio_styles.market_info_value}`}>
                        <h4>{item.vol}</h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

const mock_data = [
  {
    img: "/images/logo-near.png",
    token_name: "Near",
    price: "$5.3",
    percent: "-0.513%",
    interest: "$95,000.00",
    amount: "29.0 NEAR",
    vol: "$215,000.00",
    status: "red",
  },
  {
    img: "/images/logo-eth.png",
    token_name: "Ethereum",
    price: "$1,750.09",
    percent: "+0.03378%",
    interest: "$23,000.00",
    amount: "5.41k ETH",
    vol: "$215,000.00",
    status: "green",
  },
];
