import React, { useEffect, useState } from "react";
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
import { FaHeart, FaTimes, FaRuler, FaCat } from "react-icons/fa";
import "../../Constants/index.css";
import { useSelector } from "react-redux";

const ProductDetailCards = () => {
  const { SelectedProduct } = useSelector((store) => store.AppReducer);
  const [isWishlist, setWishlist] = useState(false);
  const [selectedTab, setSelectedTab] = useState("details");
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    console.log("rendering:", SelectedProduct);
    setProductDetails(SelectedProduct);
  }, [SelectedProduct]);

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
      <Box position="relative">
        <Image
          src={productDetails.image_url}
          alt="Card Image"
          width="100%"
          height="300px"
          objectFit="cover"
        />
        <HStack
          position="absolute"
          bottom="2"
          margin={4}
          justifyContent="center"
        >
          {[...Array(4)].map((el, index) => (
            <Box key={index} position="relative">
              <Image
                src="https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW50cyUyMHBvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
                cursor="pointer"
                width="80px"
                height="50px"
              />
              {index === 3 && (
                <Text
                  color="white"
                  fontWeight="bold"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  position="absolute"
                >
                  +5
                </Text>
              )}
            </Box>
          ))}
        </HStack>
      </Box>

      <Icon
        as={FaTimes}
        boxSize={3}
        cursor="pointer"
        position="absolute"
        top="4"
        right="4"
        onClick={handleWishlistChange}
      />
      <Flex flexDirection={"column"} p="4">
        <VStack alignItems={"start"}>
          <Text size="sm" fontWeight="normal" mb="2">
            {productDetails.title}
          </Text>
        </VStack>

        <HStack alignItems={"start"}>
          <Text fontSize={"8px"} fontWeight="normal" mb="2" textAlign={"start"}>
            {
              "A long description is a way to provide long alternative text for non-text elements, such as images. Generally, alternative text exceeding 250 characters, which cannot be made more concise without making it less descriptive or meaningful, should have a long description......"
            }
          </Text>
        </HStack>
      </Flex>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-around"}
        marginBottom={"5"}
      >
        <HStack
          cursor={"pointer"}
          borderBottom={
            selectedTab === "details" ? "2px solid green" : "2px solid #fff"
          }
          width={"full"}
          justifyContent={"center"}
          onClick={() => setSelectedTab("details")}
        >
          <Text fontSize="sm" marginLeft={"4"}>
            {"Details"}
          </Text>
        </HStack>
        <HStack
          cursor={"pointer"}
          borderBottom={
            selectedTab === "reviews" ? "2px solid green" : "2px solid #fff"
          }
          width={"full"}
          justifyContent={"center"}
          onClick={() => setSelectedTab("reviews")}
        >
          <Text fontSize="sm" marginLeft={"4"}>
            {"Reviews"} {"("}
            {productDetails.reviews}
            {")"}
          </Text>
        </HStack>
      </Flex>
      {/*detail tab box */}
      {selectedTab === "details" ? (
        <Box>
          <Flex
            flexDirection={"row"}
            justifyContent={"space-around"}
            marginTop={"4"}
          >
            <HStack>
              <Icon
                as={FaRuler}
                color={"yellow.500"}
                boxSize={2}
                cursor="pointer"
              />

              <Text fontSize={"8px"}>{" 120cm"}</Text>
            </HStack>
            <HStack>
              <Icon
                as={FaCat}
                color={"yellow.500"}
                boxSize={2}
                cursor="pointer"
              />
              <Text fontSize={"8px"}>{"Animal Save"}</Text>
            </HStack>
          </Flex>
          <Flex
            flexDirection={"row"}
            justifyContent={"space-around"}
            marginTop={"4"}
            marginBottom={"2"}
          >
            <HStack>
              <Box
                position={"relative"}
                borderRadius={"5px"}
                backgroundColor={"#fef0f2"}
                w={"4"}
                h={"4"}
              >
                <Icon
                  position={"absolute"}
                  as={FaHeart}
                  color={"red.500"}
                  boxSize={2}
                  cursor="pointer"
                  top={"50%"}
                  left={"50%"}
                  transform="translate(-50%, -50%)"
                  onClick={handleWishlistChange}
                />
              </Box>
            </HStack>
            <HStack>
              <Button
                className="button_cart"
                marginLeft={"0"}
                style={{
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                {"Rs "}
                {productDetails.price} {" - "}
                {"Add to cart"}
              </Button>
            </HStack>
          </Flex>
        </Box>
      ) : (
        <Box>
          <Text>Working....</Text>
        </Box>
      )}
    </Box>
  );
};

export default ProductDetailCards;
