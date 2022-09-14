import { Image, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AppButton } from "../../components/Button";
import {
  FlexBasic,
  TableWrapper,
  TitleAuction,
  TopBtnList,
} from "../../components/style";
import { appColors } from "../../utils";
import BtnLead from "./BtnLead";

interface DataType {
  key: number;
  strike: string;
  breakEvent: string;
  volatility: string;
  price: any;
}

const mockListCalPut = [
  {
    key: 0,
    label: "Call",
  },
  {
    key: 1,
    label: "Put",
  },
];
const mockListBuy = [
  {
    key: 0,
    label: "Buy",
  },
];
const TradeTables = () => {
  return (
    !!renderData && (
      <TableWrapper>
        <div className="top-btn-list" style={{ marginBottom: 30 }}>
          <FlexBasic
            style={{
              justifyContent: "space-between",
              gap: 30,
              overflowX: "auto",
            }}
          >
            <TopBtnList>
              <BtnLead list={mockListBuy} />
            </TopBtnList>
            <TopBtnList>
              <BtnLead list={mockListCalPut} />
            </TopBtnList>
            <TopBtnList style={{ padding: "14px 20px" }}>
              <div>Expires Sep 16th, 3PM</div>
            </TopBtnList>
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
      ticked: false,
    },
  },
  {
    key: 2,
    strike: "$4.00",
    breakEvent: "$4.78",
    volatility: "117.59%",
    price: {
      number: "$0.78",
      ticked: false,
    },
  },
  {
    key: 3,
    strike: "$5.00",
    breakEvent: "$5.71",
    volatility: "115.13%",
    price: {
      number: "$0.71",
      ticked: false,
    },
  },
  {
    key: 4,
    strike: "$6.00",
    breakEvent: "$6.65",
    volatility: "118.20%",
    price: {
      number: "$0.65",
      ticked: true,
    },
  },
  {
    key: 5,
    strike: "$7.00",
    breakEvent: "$7.52",
    volatility: "118.87%",
    price: {
      number: "$0.52",
      ticked: false,
    },
  },
  {
    key: 6,
    strike: "$8.00",
    breakEvent: "$8.52",
    volatility: "121.63%",
    price: {
      number: "$0.38",
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
          <AppButton
            style={
              item?.ticked
                ? { backgroundColor: appColors.activeColorGreen }
                : { ...stylePlus }
            }
          >
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
