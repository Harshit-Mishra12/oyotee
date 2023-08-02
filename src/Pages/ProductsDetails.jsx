import React, {  useState } from "react";
import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import Details from "../Components/Details";

const ProductsDetails = () => {
  //eslint-disable-next-line
  const [feauturedProducts, setFeauturedProducts] = useState([]);
  //eslint-disable-next-line
  const [subCategories, setSubCategories] = useState([]);

  return (
    <>
      <Box margin={10} boxShadow="lg">
        <Navbar />
         <Details/>
      </Box>
    </>
  );
};

export default ProductsDetails;
