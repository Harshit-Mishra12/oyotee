import React from "react";
import { Box, Image, Text, Button, VStack } from "@chakra-ui/react";

import "../Constants/index.css";

const CouponCard = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position={"relative"}
    >
      <Image
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
        alt="Card Image"
        width={"100%"}
        maxH="200px"
        objectFit="cover"
      />

      <Box position="absolute" top={0} bottom={0} left={0} right={0} m={4}>
        <VStack
          width={"full"}
          height={"full"}
          alignItems="center"
          justifyContent="space-around"
        >
          <Text color="var(--coupon-text-color)" fontSize="sm">
            {"GET 30% OFF"}
          </Text>
          <Text color="var(--coupon-text-color)" fontSize="sm">
            {"Share your referral code and get a discount!"}
          </Text>
          <Button w={"full"} backgroundColor="var(--coupon-bg-color) ">
            Share
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default CouponCard;
