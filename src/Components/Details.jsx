import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "../Constants/index.css";
// import { useParams } from "react-router-dom";

// const generateSlug = (inputString) => {
//   return inputString
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w-]+/g, "");
// };

export const Details = () => {
  // const { slug } = useParams();
  // const decodedSlug = decodeURIComponent(slug);
  // const parts = decodedSlug.split("-");
  //const nameSlug = parts.slice(0, -1).join('-');
  // const encodedId = parts[parts.length - 1];
  // const productId = atob(encodedId);
  return (
    <>
      <Box>
        <Text>Working......</Text>
      </Box>
    </>
  );
};

export default Details;
