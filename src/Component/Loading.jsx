import { Box, Spinner, VStack } from "@chakra-ui/react";
import { Scale } from "chart.js";
import React from "react";

const Loading = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner size={"xl"} />
      </Box>
    </VStack>
  );
};

export default Loading;
