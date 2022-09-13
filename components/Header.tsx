import React from "react";
import Link from "next/link";
import { navLinks } from "../utils";
import { NavBarStyle, WrappMenuBar } from "./style";
import AppLogo from "./Logo";
import { useRouter } from "next/router";
import { AppButton } from "./Button";
import FooterLinks from "./Footer";

const AppHeader = () => {
  const { pathname } = useRouter();
  return (
    <WrappMenuBar>
      <AppLogo />
      {pathname === "/" ? (
        <FooterLinks />
      ) : (
        <>
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
            <AppButton style={{ padding: 22 }}>Connect wallet</AppButton>
          </div>
        </>
      )}
    </WrappMenuBar>
  );
};

export default AppHeader;
