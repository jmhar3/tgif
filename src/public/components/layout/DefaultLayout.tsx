import { HStack } from "@chakra-ui/react";
import { ReactElement } from "react";

import { Navigation } from "../Navigation";

export interface Props {
  children: ReactElement;
}

export const DefaultLayout = (props: Props) => {
  const { children } = props;

  return (
    <HStack paddingLeft="80px">
      <Navigation />
      {children}
    </HStack>
  );
};
