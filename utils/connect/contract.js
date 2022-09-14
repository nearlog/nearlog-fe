import * as nearAPI from "near-api-js";
const { connect, WalletConnection, keyStores } = nearAPI;
export const GAS = 200000000000000;
export const ONE_OCTO = 1;
export const ZERO_OCTO = 0;
export const ONE_OCTO_STRING = "100000000000000000000000";
export const MAIN_CONTRACT_ID = "main.nearlog.testnet";

export const nearConfig = {
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
  contractName: MAIN_CONTRACT_ID,
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  headers: {
    "Content-Type": "application/json",
  },
};

export const _near = async function () {
  return await connect({
    deps: {
      keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    },
    ...nearConfig,
  });
};

export const _walletConnection = function (_near) {
  return new WalletConnection(_near, null);
};
