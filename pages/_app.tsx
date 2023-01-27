import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

// eslint-disable-next-line no-undef
function App({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}

export default appWithTranslation(App);
