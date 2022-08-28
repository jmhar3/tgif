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
      Button: {
        baseStyle: {
          backgroundColor: "accent.main",
        },
      },
      Img: {
       defaultProps: {
        maxW: "9"
       }
      }
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
        cold: "#82c2f5",
        coldSheer: "RGBA(168, 217, 255, 0.1)",
        bold: "#ECAD78",
        boldSheer: 'rgba(236, 173, 120, 0.25)',
      },
      accent: {
        main: "#04601C",
        cold: "#436F91",
        bold: "#E10600",
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
