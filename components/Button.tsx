import { Button } from "antd";
import styled from "styled-components";
import { appColors } from "../utils";

export const AppButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 24px;
  border-radius: 90px;
  background-color: ${appColors.activeColorGreen};
  border: none;
  color: ${appColors.defaultColorWhite};
  display: flex;
  &:hover,
  &:focus,
  &:active {
    background-color: ${appColors.activeColorGreen};
    color: ${appColors.defaultColorWhite};
  }
  span {
    font-weight: 600;
  }
  .icon {
    margin-left: 12px;
  }
`;
