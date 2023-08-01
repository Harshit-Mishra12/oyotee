import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  HStack,
  Icon,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import "../../Constants/index.css";

const ProductCard = () => {
  const [isWishlist, setWishlist] = useState(false);

  const handleWishlistChange = () => {
    setWishlist(!isWishlist);
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position={"relative"}
    >
      <Image
        src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnRzJTIwcG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        alt="Card Image"
        width={"100%"}
        maxH="150px"
        objectFit={"cover"}
      />
      <Icon
        as={isWishlist ? FaHeart : FiHeart}
        color={isWishlist ? "red.500" : "red"}
        boxSize={3}
        cursor="pointer"
        position="absolute"
        top="4"
        right="4"
        onClick={handleWishlistChange}
      />
      <Box p="4">
        <Text size="sm" fontWeight="normal" mb="2" textAlign={"start"}>
          {"Monstera DK Var (L)"}
        </Text>
        <Flex>
          <HStack spacing="1">
            {[1, 2, 3, 4, 5].map((num) => (
              <Icon
                key={num}
                as={StarIcon}
                color={"yellow.500"}
                boxSize={2}
                cursor="pointer"
                // onClick={() => handleRatingChange(num)}
              />
            ))}
          </HStack>
          <HStack>
            <Text fontSize="sm" marginLeft={"4"}>
              {"("}
              {80}
              {")"}
            </Text>
          </HStack>
        </Flex>
      </Box>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginBottom={"2"}
      >
        <VStack>
          <Text fontSize="sm" marginLeft={"4"} marginBottom={-2}>
            {"Price"}
          </Text>
          <Text fontSize="sm" marginLeft={"4"}>
            {"Rs 325"}
          </Text>
        </VStack>
        <HStack>
          <Button
            className="button_cart"
            backgroundColor={"white !important"}
            marginLeft={"4"}
          >
            {"Add to cart"}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default ProductCard;
