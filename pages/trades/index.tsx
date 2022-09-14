import { Col, Image, Row } from "antd";
import { useContext, useState } from "react";
import { NearLogContextApi } from "../../AppContext";
import IconsComp from "../../components/BgIcon";
import { AppButton } from "../../components/Button";
import ConnectWalletButton from "../../components/ConnectWalletButton";
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
import InputComp from "./InputComp";
import TradeTables from "./TradeTables";

const TradesView = () => {
  const { account, signIn } = useContext(NearLogContextApi);
  const [buyInfos, setBuyInfos] = useState({ number: "$0.65", ticked: false });

  const sliceCurrency = {
    ...buyInfos,
    number: Number(buyInfos?.number?.replace("$", "")),
  };

  const roundCurrency = sliceCurrency?.number * 100 || 0;

  const handleGetRowInfo = (infos: any) => {
    setBuyInfos(infos);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppContainer style={{ margin: "75px 0" }}>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 24 }]}>
          <Col xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
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
                <TradeTables onChangeRow={handleGetRowInfo} />
              </BgMutual>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
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
                    <InputComp />
                  </FlexBasic>
                </MarginBottom>
                <MarginBottom>
                  <FlexBasic>
                    <SubTitletable style={{ flex: 1 }}>Buy with</SubTitletable>
                    <SelectComp value=" USN" />
                  </FlexBasic>
                </MarginBottom>
                <MarginBottom>
                  <FlexBasic>
                    <SubTitletable>Price</SubTitletable>
                    <PriceValue>{`$${roundCurrency}.00`}</PriceValue>
                  </FlexBasic>
                </MarginBottom>
              </div>
              <Line style={{ marginBottom: 20 }} />
              <div>
                <MarginBottom>
                  <FlexBasic>
                    <SubTitletable>Max cost</SubTitletable>
                    <PriceValue>{`$${roundCurrency}.00`}</PriceValue>
                  </FlexBasic>
                </MarginBottom>
                <MarginBottom style={{ marginBottom: 30 }}>
                  <FlexBasic>
                    <SubTitletable>Balance</SubTitletable>
                    <PriceValue>$205.00 USN</PriceValue>
                  </FlexBasic>
                </MarginBottom>
                <ConnectWalletButton
                  style={{ width: "100%", marginBottom: 30 }}
                  isHide
                />
              </div>
              <Line style={{ marginBottom: 20 }} />
              <div>
                <MarginBottom style={{ marginBottom: 30 }}>
                  <FlexBasic>
                    <SubTitletable> Expected profit and loss</SubTitletable>
                    <SubTitletable style={{ color: appColors.sosColorRed }}>
                      {/* -65.00 */}
                      {`-${sliceCurrency?.number}`}
                    </SubTitletable>
                  </FlexBasic>
                </MarginBottom>
                <MarginBottom style={{ marginBottom: 40 }}>
                  <Image
                    src="/chartline.png"
                    alt="chartline"
                    width={"100%"}
                    height={"120px"}
                    preview={{ visible: false, mask: false }}
                  />
                </MarginBottom>
                <MarginBottom style={{ marginBottom: 10 }}>
                  <FlexBasic>
                    <SubTitletable>Max profit</SubTitletable>
                    <SubTitletable>Infinite</SubTitletable>
                  </FlexBasic>
                </MarginBottom>
                <MarginBottom style={{ marginBottom: 10 }}>
                  <FlexBasic>
                    <SubTitletable>Break even</SubTitletable>
                    <SubTitletable>$3.85</SubTitletable>
                  </FlexBasic>
                </MarginBottom>
                <MarginBottom style={{ marginBottom: 10 }}>
                  <FlexBasic>
                    <SubTitletable>Max loss</SubTitletable>
                    <SubTitletable>{`$-${roundCurrency}.00`}</SubTitletable>
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
