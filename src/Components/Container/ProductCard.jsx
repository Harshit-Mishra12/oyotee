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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getSelectedProductDetail } from "../../Redux/AppReducer/Action";

const ProductCard = ({ el }) => {
  const { title, image_url, price, rating, reviews } = el;
  const [isWishlist, setWishlist] = useState(false);
  const dispatch = useDispatch();
  const handleWishlistChange = (event) => {
    event.stopPropagation(); // Prevent event propagation
    setWishlist(!isWishlist);
    const message = !isWishlist
      ? "Product added to wishlist successfully!"
      : "Product removed from wishlist successfully!";
    toast.success(message, {
      autoClose: 1000, // Toast will be shown for 3 seconds
    });
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position={"relative"}
      cursor={"pointer"}
      onClick={() => dispatch(getSelectedProductDetail(el))}
      // onClick={()=>navigate(`/PlantDetail/${encodeURIComponent(generateSlug('Monstera DK Var (L)','10'))}`)}
    >
      <Image
        src={image_url}
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
          {title}
        </Text>
        <Flex>
          <HStack spacing="1">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <Icon
                key={index}
                as={StarIcon}
                color={rating > index ? "yellow.500" : "gray.500"}
                boxSize={2}
                cursor="pointer"
                // onClick={() => handleRatingChange(num)}
              />
            ))}
          </HStack>
          <HStack>
            <Text fontSize="sm" marginLeft={"4"}>
              {"("}
              {reviews}
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
            {"Rs "}
            {price}
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
