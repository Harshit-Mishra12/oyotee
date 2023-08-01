import { Box, VStack, Flex } from "@chakra-ui/react";
import React from "react";
import "../Constants/index.css";
import Filter from "./Filter/Filter";
import Products from "./Container/Products";

export const Shops = () => {
  return (
    <>
      <Box>
        <Flex direction="row">
          <VStack flex={0.2}>
            <Box width={"100%"}>
              <Filter />
            </Box>
          </VStack>

          <VStack flex={0.8}>
            <Box width={"100%"}>
              <Products />
            </Box>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Shops;
