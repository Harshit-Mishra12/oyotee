import { Box, VStack, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import HeadContent from "./HeadContent";
import ProductsList from "./ProductsList";
import ProductDetailCard from "./ProductDetailCards";
import { useDispatch } from "react-redux";
import { getSelectedProductDetail } from "../../Redux/AppReducer/Action";
import { products as data } from "../../Assets/dummy";

export const Products = () => {
  const dispatch=useDispatch();
  dispatch(getSelectedProductDetail(data[0]));
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

        <HStack flex={0.3} mt={2} mx={2}>
          <Box width={"100%"} height={"100%"}>
            <ProductDetailCard />
          </Box>
        </HStack>
      </Flex>
    </>
  );
};

export default Products;
