import { createContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const NearLogContextApi = createContext<any>({});

const NearLogContext = ({ children }: Props): JSX.Element => {
  return (
    <NearLogContextApi.Provider value={{}}>
      {children}
    </NearLogContextApi.Provider>
  );
};

export default NearLogContext;
