import React, {  useState } from "react";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import Shops from "../Components/Shops";

const Shop = () => {
  //eslint-disable-next-line
  const [feauturedProducts, setFeauturedProducts] = useState([]);
  //eslint-disable-next-line
  const [subCategories, setSubCategories] = useState([]);

  return (
    <>
      <Box margin={10} boxShadow="lg">
        <Navbar />
        <Shops />
      </Box>
    </>
  );
};

export default Shop;
