import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoveToTop from "../components/MoveToTop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <MoveToTop />
      <Footer />
    </div>
  );
}

export default MyApp;
