import { ColorModeScript } from "@chakra-ui/react";
import { refineTheme } from "@refinedev/chakra-ui";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript
          initialColorMode={refineTheme.config.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
