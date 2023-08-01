import { Box, VStack, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import HeadContent from "./HeadContent";
import ProductsList from "./ProductsList";
import ProductDetailCard from "./ProductDetailCards";

export const Products = () => {
  return (
    <>
      <Flex direction="row">
        <VStack flex={0.7}>
          <Box width={"100%"}>
            <HeadContent />
          </Box>
          <Box width={"100%"}>
            <ProductsList />
          </Box>
        </VStack>

        <HStack flex={0.3}>
          <Box width={"100%"} height={"100%"}>
            <ProductDetailCard />
          </Box>
        </HStack>
      </Flex>
    </>
  );
};

export default Products;
