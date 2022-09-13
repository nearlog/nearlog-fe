import React from "react";
import Link from "next/link";
import { navLinks } from "../utils";
import { NavBarStyle, WrappMenuBar } from "./style";
import AppLogo from "./Logo";
import { useRouter } from "next/router";
import { AppButton } from "./Button";

const AppHeader = () => {
  const { pathname } = useRouter();
  return (
    <WrappMenuBar>
      <AppLogo />
      <NavBarStyle>
        <ul>
          {navLinks.map((link, index) => {
            return (
              <Link href={link.path} key={index}>
                <li
                  className={pathname === link.path ? "active-menu" : ""}
                  key={index}
                >
                  {link.name}
                </li>
              </Link>
            );
          })}
        </ul>
      </NavBarStyle>
      <div>
        <AppButton>Connect wallet</AppButton>
      </div>
    </WrappMenuBar>
  );
};

export default AppHeader;
