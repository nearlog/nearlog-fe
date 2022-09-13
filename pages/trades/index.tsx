import { Col, Image, Input, Row } from "antd";
import IconsComp from "../../components/BgIcon";
import { AppButton } from "../../components/Button";
import {
  AppContainer,
  BgMutual,
  FlexBasic,
  Line,
  MarginBottom,
  PriceValue,
  SelectComp,
  SubTitletable,
  TitleTable,
  TopBtnList,
} from "../../components/style";
import { appColors } from "../../utils";
import BtnLead from "./BtnLead";
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
              <MarginBottom>
                <FlexBasic style={{ justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <TitleTable>$5.30</TitleTable>
                    <div style={{ color: appColors.sosColorRed }}>-4.84%</div>
                  </div>
                  <TopBtnList style={{ flex: 1 }}>
                    <BtnLead />
                  </TopBtnList>
                </FlexBasic>
              </MarginBottom>
              <div style={{ position: "relative", top: 30 }}>
                <Image
                  src="/chartline-1.png"
                  alt="chartline"
                  width={"100%"}
                  height={"100%"}
                  preview={{ visible: false, mask: false }}
                />
              </div>
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
              <MarginBottom>
                <TitleTable>Buy NEAR $5.30 Call</TitleTable>
              </MarginBottom>
              <div>
                <MarginBottom>
                  <FlexBasic>
                    <SubTitletable style={{ flex: 1 }}>Size</SubTitletable>
                    <div style={{ position: "relative" }}>
                      <Input
                        value="100.00"
                        style={{
                          background: appColors.bgColorInput,
                          color: appColors.colorGray,
                          border: "none",
                          height: 40,
                          borderRadius: 20,
                          flex: 1,
                        }}
                      />
                      <span
                        style={{
                          color: appColors.colorGray,
                          position: "absolute",
                          right: 7,
                          height: 40,
                          lineHeight: 40,
                          fontSize: 12,
                        }}
                      >
                        MAX
                      </span>
                    </div>
                  </FlexBasic>
                </MarginBottom>
                <MarginBottom>
                  <FlexBasic>
                    <SubTitletable style={{ flex: 1 }}>Buy with</SubTitletable>
                    <SelectComp value=" USN" />
                  </FlexBasic>
                </MarginBottom>
              </div>
              <Line style={{ marginBottom: 20 }} />
              <div>
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
                  <AppButton style={{ width: "100%" }}>
                    {" "}
                    Connect wallet
                  </AppButton>
                </MarginBottom>
              </div>
              <Line style={{ marginBottom: 20 }} />
              <div>
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
              </div>
            </BgMutual>
          </Col>
        </Row>
      </AppContainer>
    </div>
  );
};

export default TradesView;
