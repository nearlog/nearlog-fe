import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppStyleWrapper, FlexOneUI } from "../components/style";
import FooterLinks from "../components/Footer";
import AppHeader from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStyleWrapper>
      <AppHeader />
      <FlexOneUI>
        <Component {...pageProps} />
      </FlexOneUI>
      <FooterLinks />
    </AppStyleWrapper>
  );
}

export default MyApp;
