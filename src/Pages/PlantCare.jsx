import React, {  useState } from "react";
import Navbar from "../Components/Navbar";
import { Box,Text } from "@chakra-ui/react";


const PlantCare = () => {
  //eslint-disable-next-line
  const [feauturedProducts, setFeauturedProducts] = useState([]);
  //eslint-disable-next-line
  const [subCategories, setSubCategories] = useState([]);

  return (
    <>
      <Box margin={10} boxShadow="lg">
        <Navbar />
         <Text>Working......</Text>
      </Box>
    </>
  );
};

export default PlantCare;
