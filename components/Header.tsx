import { Drawer, Image } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { appColors, navLinks } from "../utils";
import { useWindowDimensions } from "../utils/useWindow";
import ConnectWalletButton from "./ConnectWalletButton";
import FooterLinks from "./Footer";
import AppLogo from "./Logo";
import { NavBarStyle, WrappMenuBar } from "./style";

const responsiveMenu = 768;

const AppHeader = () => {
  const { pathname } = useRouter();

  const getSize = useWindowDimensions();

  const [open, setOpen] = useState(false);

  const isAppendMobileMenu = getSize?.width <= responsiveMenu || false;
  const isHomePage = pathname === "/";

  const drawMobileMenu = useCallback(() => {
    if (typeof window !== "undefined") {
      if (open) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }
  }, [open]);

  return (
    <WrappMenuBar>
      {isAppendMobileMenu ? (
        <>
          <AppLogo />
          <div onClick={drawMobileMenu} style={{ cursor: "pointer" }}>
            {!open ? (
              <Image
                src={"/mobileMenu.svg"}
                alt="mobileMenu"
                width={30}
                height={30}
                preview={{ visible: false, mask: false }}
              />
            ) : null}
          </div>
          <DrawOverwrite
            title={<AppLogo />}
            placement="right"
            onClose={drawMobileMenu}
            open={open}
            closeIcon={
              <Image
                src={"/close.svg"}
                alt="mobileMenu"
                width={15}
                height={15}
                preview={{ visible: false, mask: false }}
              />
            }
          >
            <AlignMenuMobile>
              {navLinks.map((link, index) => {
                return (
                  <Link href={link.path} key={index}>
                    <li
                      onClick={drawMobileMenu}
                      className={pathname === link.path ? "active-menu" : ""}
                      key={index}
                    >
                      {link.name}
                    </li>
                  </Link>
                );
              })}
              <AlignFooterMenuMobile>
                <FooterLinks />
              </AlignFooterMenuMobile>
            </AlignMenuMobile>
            <ConnectWalletButton style={{ width: "100%", marginTop: 50 }} />
          </DrawOverwrite>
        </>
      ) : (
        <>
          <AppLogo />
          {isHomePage ? (
            <FooterLinks />
          ) : (
            <>
              <NavBarStyle>
                <ul>
                  {navLinks.map((link, index) => {
                    return (
                      <Link href={link.path} key={index}>
                        <li
                          className={
                            pathname === link.path ? "active-menu" : ""
                          }
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
                <ConnectWalletButton />
              </div>
            </>
          )}
        </>
      )}
    </WrappMenuBar>
  );
};

export default AppHeader;

const AlignFooterMenuMobile = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
`;

const AlignMenuMobile = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    font-size: 22px;
    cursor: pointer;
    color: ${appColors.defaultColorWhite};
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  .active-menu {
    color: ${appColors.activeColorGreen};
    font-weight: 600;
  }
`;

const DrawOverwrite = styled(Drawer)`
  .ant-drawer-content {
    background-color: ${appColors.bgColorInput};
  }
  .logo-wrapper {
    padding: 3px 0;
    display: flex;
    align-items: center;
    gap: 15px;
    color: white;
    cursor: pointer;
    .logo-name {
      display: flex;
      text-transform: capitalize;
      align-items: center;
      span {
        font-size: 20px;
        white-space: nowrap;
        font-weight: bold;
      }
    }
  }
  .ant-drawer-header {
    border-bottom: 1px solid rgba(249, 250, 250, 0.1);
  }
`;
