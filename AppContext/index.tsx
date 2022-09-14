import { createContext, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

export const NearLogContextApi = createContext<any>({});

const NearLogContext = ({ children }: Props): JSX.Element => {
  const [wallet, setWallet] = useState();
  return (
    <NearLogContextApi.Provider value={{ wallet }}>
      {children && children}
    </NearLogContextApi.Provider>
  );
};

export default NearLogContext;
