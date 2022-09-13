import Image from "next/image";
import React from "react";

const FooterHome = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: 20,
      }}
    >
      <div>
        <div style={{ marginBottom: 15, fontSize: 18 }}>
          A Product of Nearlend DAO
        </div>
        <Image src="/favicon.ico" alt="logo" width={50} height={50} />
      </div>
    </div>
  );
};

export default FooterHome;
