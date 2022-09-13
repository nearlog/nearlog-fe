import styled from "styled-components";
import { appColors } from "../utils";

export const AppStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: url("/bg.png") no-repeat center,
    linear-gradient(
      180deg,
      rgba(73, 228, 84, 0) 0%,
      rgba(73, 228, 84, 0.05) 100%
    ),
    linear-gradient(0deg, rgba(84, 169, 67, 0.05), rgba(84, 169, 67, 0.05)),
    #021415;
  background-size: cover;
  overflow: hidden;
  color: whitesmoke;
  @media (max-width: 451px) {
    height: auto;
  }
`;

export const FlexOneUI = styled.div`
  flex: 1;
`;

export const NavBarStyle = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    li {
      padding: 20px;
      cursor: pointer;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      transition: all 0.3s ease-in-out;
      color: ${appColors.defaultColorSubWhite};
      &:hover {
        color: ${appColors.activeColorGreen};
      }
    }
  }
  .active-menu {
    color: ${appColors.activeColorGreen};
    font-weight: 600;
  }
`;

export const AppContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

export const WrappMenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
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
        font-weight: 600;
        white-space: nowrap;
      }
    }
  }
`;

export const BgMutual = styled.div`
  background-color: ${appColors.defaultBgColor};
  border-radius: 30px;
  padding: 24px;
`;

export const TitleTable = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 44px;
  color: ${appColors.defaultColorWhite};
`;

export const SubTitletable = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${appColors.defaultColorWhite};
`;
