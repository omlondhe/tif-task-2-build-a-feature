import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { StateProvider } from "@src/context/StateProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </ChakraProvider>
  );
}

export default MyApp;
