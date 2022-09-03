import { useMemo } from "react";
import { HStack, Heading, Text, VStack, Img, useToken } from "@chakra-ui/react";

import { WarningData } from "../../../hooks/useWarnings";

export interface WarningProps {
  warning: WarningData;
}

export interface ColourScheme {
  background: string;
  text: string;
}

export const Warning = (props: WarningProps) => {
  const {
    warning: { heading, text, icon, colourTheme },
  } = props;

  const colourScheme = useMemo<ColourScheme>(() => {
    switch (colourTheme) {
      case "white":
        return { background: "neutral.coldSheer", text: "neutral.cold" };
      case "blue":
        return { background: "accent.cold", text: "neutral.light" };
      case "amber":
        return { background: "neutral.bold", text: "accent.main" };
      case "red":
        return { background: "accent.bold", text: "neutral.light" };
      default:
        return { background: "neutral.main", text: "accent.main" };
    }
  }, [colourTheme]);

  return (
    <HStack
      w="100%"
      justify="space-between"
      bg={colourScheme.background}
      p="3"
      borderRadius="md"
    >
      <VStack align="left">
        <Heading size="sm" color={colourScheme.text}>
          {heading}
        </Heading>
        <Text color={colourScheme.text}>{text}</Text>
      </VStack>
      <Img maxW="12" src={icon} />
    </HStack>
  );
};
