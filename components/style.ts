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
  font-size: 14px;
  line-height: 24px;
  color: ${appColors.defaultColorWhite};
`;

export const FlexBasic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MarginBottom = styled.div`
  margin-bottom: 20px;
`;

export const PriceValue = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${appColors.defaultColorWhite};
`;

export const Line = styled.div`
  height: 1px;
  background: #f9fafa;
  opacity: 0.1;
`;

export const TableWrapper = styled.div`
  width: 100%;
  .ant-table {
    background: transparent;
    color: white;
    td.ant-table-cell {
      background-color: transparent;
      transition: all 0.3s ease;
    }
    thead {
      background: transparent;
    }
  }
  .ant-table-tbody {
    background-color: rgba(255, 255, 255, 0);
  }
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: unset;
    cursor: pointer;
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td,
  .ant-table tfoot > tr > th,
  .ant-table tfoot > tr > td {
    padding: 8px 12px !important;
  }
  .ant-table-tbody > tr > td {
    border-bottom: 1px solid rgba(255, 255, 255, 0);
  }
  tr.ant-table-measure-row {
    display: none;
  }
  .ant-table-thead > tr > th {
    background: transparent;
    border-bottom: none;
    color: white;
    padding: 8px !important;
    font-size: 15px;
    font-weight: 700;
  }

  .main-value {
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
  }
  .top-btn-list {
    padding: 35px 10px;
  }
`;

export const TitleAuction = styled.h6`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: rgba(248, 248, 249, 0.5);
  text-transform: capitalize;
`;

export const BtnBgWrap = styled.div`
  background: #004133;
  border-radius: 44px;
  padding: 12px 24px;
  .content-btn {
    border-radius: 44px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    /* line-height: 24px;
    background: #002b21;
    padding: 10px 24px; */
  }
`;
