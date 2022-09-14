import { Input } from "antd";
import React, { useState } from "react";
import { appColors } from "../../utils";

const InputComp = () => {
  const [inputValue, setInputValue] = useState("100.00");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div style={{ position: "relative", flex: 1 }}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        style={{
          background: appColors.bgColorInput,
          color: appColors.colorGray,
          border: "none",
          height: 40,
          borderRadius: 20,
          flex: 1,
          paddingRight: 48,
          textAlign: "right",
          fontWeight: 500,
        }}
      />
      <span
        style={{
          color: appColors.colorGray,
          position: "absolute",
          right: 15,
          height: 40,
          fontSize: 12,
          top: 0,
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 500,
        }}
      >
        MAX
      </span>
    </div>
  );
};

export default InputComp;
