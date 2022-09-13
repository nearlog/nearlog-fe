import { Table, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { AppButton } from "../../components/Button";
import {
  BtnBgWrap,
  FlexBasic,
  TableWrapper,
  TitleAuction,
} from "../../components/style";
import { appColors } from "../../utils";

interface DataType {
  key: number;
  strike: string;
  breakEvent: string;
  volatility: string;
  price: any;
}

const TradeTables = () => {
  return (
    !!renderData && (
      <TableWrapper>
        <div className="top-btn-list">
          <FlexBasic style={{ justifyContent: "space-between", gap: 30 }}>
            <BtnBgWrap>
              <div className="content-btn">Buy</div>
            </BtnBgWrap>
            <BtnBgWrap>
              <div className="content-btn">
                <span>Call</span>
                <span style={{ marginLeft: 40 }}>Put</span>
              </div>
            </BtnBgWrap>
            <BtnBgWrap>
              <div>Expires Sep 16th, 3PM</div>
            </BtnBgWrap>
          </FlexBasic>
        </div>
        <Table
          pagination={false}
          dataSource={renderData}
          columns={mockColumn}
          scroll={{ x: 350 }}
          rowKey={(row) => {
            return row?.key;
          }}
        />
      </TableWrapper>
    )
  );
};

export default TradeTables;

const renderData: DataType[] = [
  {
    key: 1,
    strike: "$3.00",
    breakEvent: "$3.85",
    volatility: "134.39%",
    price: {
      number: "$0.85",
      ticked: true,
    },
  },
  {
    key: 2,
    strike: "$4.00",
    breakEvent: "$4.78",
    volatility: "134.39%",
    price: {
      number: "$0.85",
      ticked: false,
    },
  },
  {
    key: 3,
    strike: "$5.00",
    breakEvent: "$5.71",
    volatility: "134.39%",
    price: {
      number: "$0.85",
      ticked: false,
    },
  },
  {
    key: 4,
    strike: "$6.00",
    breakEvent: "$6.65",
    volatility: "134.39%",
    price: {
      number: "$0.85",
      ticked: false,
    },
  },
  {
    key: 5,
    strike: "$7.00",
    breakEvent: "$7.52",
    volatility: "134.39%",
    price: {
      number: "$0.85",
      ticked: false,
    },
  },
];

const mockColumn: ColumnsType<DataType> = [
  {
    title: <TitleAuction>Strike</TitleAuction>,
    dataIndex: "strike",
    key: "strike",
  },
  {
    title: <TitleAuction>Break Even</TitleAuction>,
    dataIndex: "breakEvent",
    key: "breakEvent",
  },
  {
    title: <TitleAuction>Volatility</TitleAuction>,
    dataIndex: "volatility",
    key: "volatility",
  },
  {
    title: <TitleAuction>Price</TitleAuction>,
    dataIndex: "price",
    key: "price",
    width: 75,
    render: (item: any) => {
      const urlIcon = item?.ticked ? "/checked.svg" : "/plus.svg";
      return (
        <div>
          <AppButton style={{ ...stylePlus }}>
            {item?.number}
            <span className="icon">
              <Image
                src={urlIcon}
                alt="icon"
                width={10}
                height={10}
                preview={{ visible: false, mask: false }}
              />
            </span>
          </AppButton>
        </div>
      );
    },
  },
];

const stylePlus = {
  backgroundColor: "transparent",
  border: `1px solid ${appColors.activeColorGreen}`,
};
