import React, { useContext } from "react";
import { NearLogContextApi } from "../AppContext";
import { AppButton } from "./Button";

interface IButton {
  isHide?: boolean;
  style?: any;
}

const ConnectWalletButton = (props: IButton) => {
  const { style, isHide = false } = props;
  const { signOut, signIn, account } = useContext(NearLogContextApi);
  const hide = account?.isLoggedIn && isHide;
  return hide ? null : (
    <AppButton
      onClick={account?.isLoggedIn ? signOut : signIn}
      style={{ padding: 22, ...style }}
    >
      {account?.isLoggedIn ? account.accountId : "Connect wallet"}
    </AppButton>
  );
};

export default ConnectWalletButton;
