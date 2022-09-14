import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  MAIN_CONTRACT_ID,
  _near,
  _walletConnection,
} from "../utils/connect/contract";

type Props = {
  children: ReactNode;
};

export const NearLogContextApi = createContext<any>({});

const NearLogContext = ({ children }: Props): JSX.Element => {
  const [wallet, setWallet] = useState<any>();
  const [account, setAccount] = useState({
    isLoggedIn: false,
    accountId: null,
  });

  const initConnect = useCallback(async () => {
    try {
      if (typeof window !== "undefined") {
        const initNear = await _near();
        const initWallet = _walletConnection(initNear);
        const accountId =
          initWallet._authData.accountId && initWallet.getAccountId();

        setWallet(initWallet);

        if (accountId) {
          setAccount({
            isLoggedIn: true,
            accountId,
          });
        } else {
          setAccount((prev: any) => ({
            ...prev,
            accountId: null,
            isLoggedIn: false,
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(wallet);

  const signIn = useCallback(() => {
    if (!wallet) return;
    wallet.requestSignIn(MAIN_CONTRACT_ID, "Nearlog Example");
  }, [wallet]);

  const signOut = useCallback(() => {
    if (!wallet) return;
    wallet.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  }, [wallet]);

  useEffect(() => {
    initConnect();
  }, [initConnect]);

  return (
    <NearLogContextApi.Provider
      value={{ wallet, setWallet, account, setAccount, signIn, signOut }}
    >
      {children && children}
    </NearLogContextApi.Provider>
  );
};

export default NearLogContext;
