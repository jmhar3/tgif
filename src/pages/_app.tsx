import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    components: {
      Heading: {
        baseStyle: {
          color: "accent.main",
        },
      },
    },
    styles: {
      global: {
        body: {
          bg: "neutral.main",
        },
      },
    },
    colors: {
      neutral: {
        sheer: 'rgba(255, 254, 253, 0.5)',
        light: "#FFFEFD",
        main: "#F9F8EF",
        bold: "#ECAD78",
        boldSheer: 'rgba(236, 173, 120, 0.25)',
      },
      accent: {
        main: "#04601C",
        bold: "#FF2950",
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
