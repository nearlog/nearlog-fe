import { Col, Row } from "antd";
import React from "react";
import IconsComp from "../../components/BgIcon";
import { AppContainer, BgMutual, TitleTable } from "../../components/style";

const TradesView = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppContainer style={{ marginTop: 75 }}>
        <Row gutter={32}>
          <Col span={12}>
            <div style={{ marginBottom: 20 }}>
              <span style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <IconsComp />{" "}
                <TitleTable style={{ marginBottom: 0 }}>NEAR</TitleTable>
              </span>
            </div>
            <BgMutual
              style={{
                width: "600px",
                height: "237px",
                marginBottom: 20,
              }}
            >
              $5.3
            </BgMutual>
            <div>
              <BgMutual
                style={{
                  width: "600px",
                  height: "237px",
                }}
              >
                $5.3
              </BgMutual>
            </div>
          </Col>
          <Col span={12}>
            <BgMutual
              style={{
                width: "550px",
                height: "700px",
              }}
            >
              <TitleTable>Buy NEAR $5.30 Call</TitleTable>
            </BgMutual>
          </Col>
        </Row>
      </AppContainer>
    </div>
  );
};

export default TradesView;
