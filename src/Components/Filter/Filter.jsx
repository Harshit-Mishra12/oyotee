import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "../../Constants/index.css";
import CategoriesMultiSelect from "./CategoriesMultiSelect";
import Price from "./Price";
import Rating from "./Rating";
import SpacingBox from "../ReUse/SpacingBox";
import CouponCard from "../CouponCard";

export const Filter = () => {
  return (
    <>
      <Box mx={4} my={2}>
        <Text textAlign={"start"}>Filters</Text>
        <SpacingBox />
        <VStack alignItems={"flex-start"}>
          <CategoriesMultiSelect />
        </VStack>
        <SpacingBox />
        <VStack alignItems={"flex-start"}>
          <Price />
        </VStack>
        <SpacingBox />
        <VStack alignItems={"flex-start"}>
          <Rating />
        </VStack>
        <SpacingBox />
        <VStack>
          <Box width={"100%"}>
            <CouponCard />
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Filter;
