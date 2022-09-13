import React from "react";
import { Line } from "@ant-design/plots";

export const LineChart = () => {
  const data = [
    {
      Date: "2010-01",
      scales: 0,
    },
    {
      Date: "2010-02",
      scales: 0,
    },
    {
      Date: "2010-03",
      scales: 5.3,
    },
  ];

  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      type: "timeCat",
      tickCount: 5,
    },
  };

  return <></>;
};
