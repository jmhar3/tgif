import { Box, Heading } from "@chakra-ui/react";

export interface EveningProps {
  width?: string;
}

export const Evening = (props: EveningProps) => {
  const { width } = props;
  
  return (
    <Box width={width}>
      <Heading>
        Unwind with a spa <i>night</i>
      </Heading>
    </Box>
  );
};
