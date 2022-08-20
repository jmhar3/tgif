import { HStack, Grid, GridItem, Heading } from "@chakra-ui/react";
import { ReactElement } from "react";
import { JsxElement } from "typescript";

import { Navigation } from "../Navigation";

export interface Props {
  children: ReactElement;
}

export const DefaultLayout = (props: Props) => {
  const { children } = props;

  return (
    <HStack width="100%">
        <Navigation />
        {children}
    </HStack>
  );
};
