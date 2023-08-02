import { Box, SimpleGrid } from "@chakra-ui/react";
import React ,{useEffect,useState} from "react";
import ProductCard from "./ProductCard";
import { products as data} from "../../Assets/dummy";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(data);
  },[]);
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 2, md: 2, lg: 2, sm: 2 }}
        spacingX="8"
        spacingY={8}
        w="100%"
        p="20px"
      >
        {products.map((el,index) => (
          <ProductCard key={el.id} el={el} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductsList;
