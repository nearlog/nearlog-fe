import { Col, Row, Image } from "antd";
import React from "react";
import IconsComp from "../../components/BgIcon";
import { AppButton } from "../../components/Button";
import {
  AppContainer,
  BgMutual,
  FlexBasic,
  Line,
  MarginBottom,
  PriceValue,
  SubTitletable,
  TitleTable,
} from "../../components/style";
import { appColors } from "../../utils";
import { LineChart } from "./Charts";
import TradeTables from "./TradeTables";

const TradesView = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppContainer style={{ margin: "75px 0" }}>
        <Row gutter={16}>
          <Col span={14}>
            <div style={{ marginBottom: 20 }}>
              <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <IconsComp />{" "}
                <TitleTable style={{ marginBottom: 0 }}>NEAR</TitleTable>
              </span>
            </div>
            <BgMutual
              style={{
                width: "100%",
                height: "237px",
                marginBottom: 20,
              }}
            >
              $5.3
            </BgMutual>
            <div>
              <BgMutual
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <TradeTables />
              </BgMutual>
            </div>
          </Col>
          <Col span={10}>
            <BgMutual
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <TitleTable>Buy NEAR $5.30 Call</TitleTable>
              <MarginBottom>
                <FlexBasic>
                  <SubTitletable>Size</SubTitletable>
                  <div>100 max</div>
                </FlexBasic>
              </MarginBottom>
              <MarginBottom>
                <FlexBasic>
                  <SubTitletable>Buy with</SubTitletable>
                  <div>100 max</div>
                </FlexBasic>
              </MarginBottom>
              <Line style={{ marginBottom: 20 }} />
              <MarginBottom>
                <FlexBasic>
                  <SubTitletable>Price</SubTitletable>
                  <PriceValue>$85</PriceValue>
                </FlexBasic>
              </MarginBottom>
              <MarginBottom>
                <FlexBasic>
                  <SubTitletable>Max cost</SubTitletable>
                  <PriceValue>$85</PriceValue>
                </FlexBasic>
              </MarginBottom>
              <MarginBottom>
                <FlexBasic>
                  <SubTitletable>Balance</SubTitletable>
                  <PriceValue>$100</PriceValue>
                </FlexBasic>
              </MarginBottom>
              <MarginBottom>
                <AppButton style={{ width: "100%" }}> Connect wallet</AppButton>
              </MarginBottom>
              <Line style={{ marginBottom: 20 }} />

              <MarginBottom>
                <FlexBasic>
                  <SubTitletable> Expected profit and loss</SubTitletable>
                  <SubTitletable style={{ color: appColors.sosColorRed }}>
                    -85.00
                  </SubTitletable>
                </FlexBasic>
              </MarginBottom>
              <MarginBottom>
                <Image
                  src="/chartline.png"
                  alt="chartline"
                  width={"100%"}
                  height={"100%"}
                  preview={{ visible: false, mask: false }}
                />
                {/* <LineChart /> */}
              </MarginBottom>
              <MarginBottom style={{ marginBottom: 5 }}>
                <FlexBasic>
                  <SubTitletable>Max profit</SubTitletable>
                  <SubTitletable>Infinite</SubTitletable>
                </FlexBasic>
              </MarginBottom>
              <MarginBottom style={{ marginBottom: 5 }}>
                <FlexBasic>
                  <SubTitletable>Break even</SubTitletable>
                  <SubTitletable>$3.85</SubTitletable>
                </FlexBasic>
              </MarginBottom>
              <MarginBottom style={{ marginBottom: 5 }}>
                <FlexBasic>
                  <SubTitletable>Max loss</SubTitletable>
                  <SubTitletable>$-85.00</SubTitletable>
                </FlexBasic>
              </MarginBottom>
            </BgMutual>
          </Col>
        </Row>
      </AppContainer>
    </div>
  );
};

export default TradesView;
