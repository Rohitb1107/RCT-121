import React, { useState, useEffect } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";

const FlexFunc = () => {
  return (
    <>
      <div>
        <SimpleGrid columns={{ lg: "2", sm: "1" }} spacing="5px">
          <Box bg="purple" height="250px"></Box>
          <Box bg="blue" height="350px"></Box>
          <Box bg="red" height="60px" direc></Box>
        </SimpleGrid>
      </div>
    </>
  );
};

export default FlexFunc;
