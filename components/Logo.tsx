import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href="/">
      <div className="logo-wrapper">
        <Image src="/favicon.ico" alt="logo" width={50} height={50} />
        <div className="logo-name">
          <span>Nearlog</span>
        </div>
      </div>
    </Link>
  );
};

export default AppLogo;
