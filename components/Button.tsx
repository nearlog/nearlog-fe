import { Button } from "antd";
import styled from "styled-components";
import { appColors } from "../utils";

export const AppButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 12px;
  width: 137px;
  height: 40px;
  border-radius: 90px;

  background-color: ${appColors.activeColorGreen};
  border: none;
  color: ${appColors.defaultColorWhite};
  &:hover {
    background-color: ${appColors.activeColorGreen};
    color: ${appColors.defaultColorWhite};
  }
  span {
    font-weight: 600;
  }
`;
