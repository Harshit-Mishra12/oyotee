import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

export const ProductsList = () => {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 2, sm: 2 }}
        spacingX="8"
        spacingY={8}
        w="100%"
        p="20px"
      >
        {[...Array(4)].map((el) => (
          <ProductCard />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductsList;
