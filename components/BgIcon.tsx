import { Image } from "antd";
import React from "react";
import styled from "styled-components";
const nearLogoSample = "/nearLogo.svg";

interface IconProp {
  url?: String;
  style?: any;
}

const IconsComp = (props: IconProp) => {
  const { url = nearLogoSample, style } = props;
  return (
    <IconWrapper>
      <Image
        src={`${url}`}
        alt="ico"
        preview={{ visible: false, mask: false }}
        {...style}
      />
    </IconWrapper>
  );
};

export default IconsComp;

const IconWrapper = styled.div`
  background-color: white;
  border-radius: 100%;
  width: 24px;
  height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  line-height: 11px;
`;
