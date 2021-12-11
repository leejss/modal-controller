import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ModalProvider } from "../components/Modal/ModalContext";
import ModalViewer from "../components/Modal/ModalViewer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <ModalViewer />
    </ModalProvider>
  );
}

export default MyApp;
