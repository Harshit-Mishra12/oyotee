import {
  Box,
  HStack,
  Image,
  Text,
  Badge,
  VStack,
  Icon,
  Flex,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import profile from "../Assets/profile.jpeg";
import "../Constants/index.css";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../Css/navbar.module.css";

const NavCategory = [
  {
    id: 1,
    category_name: "Shop",
    route_name: "",
  },
  {
    id: 2,
    category_name: "Plant care",
    route_name: "PlantCare",
  },
  {
    id: 3,
    category_name: "Workshops",
    route_name: "Workshops",
  },
  {
    id: 4,
    category_name: "Blogs",
    route_name: "Blogs",
  },
];

export const Navbar = () => {
  //eslint-disable-next-line
  const [type, setType] = useState(NavCategory);
  const location = useLocation();
  const navigate = useNavigate();
  const currentRoute = location.pathname.substring(1);
  const [routeName, setRouteName] = useState("");

  useEffect(() => {
    setRouteName(currentRoute);
  }, [currentRoute]);

  return (
    <>
      <Box
        w={"100%"}
        boxShadow={"md"}
        position={"sticky"}
        top={0}
        zIndex={"20"}
        bgColor="rgba(255, 255, 255, 0.97)"
      >
        <Flex
          w={"100%"}
          m={"auto"}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={"10px"} w={"70%"}>
            {/* logo */}
            <Box flex={0.3}>
              <HStack>
                <Box w="50px" height="50px" onClick={() => navigate("/")}>
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnRzJTIwcG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    }
                    height={"100%"}
                    width={"100%"}
                    alt="logo"
                    fallbackSrc={
                      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnRzJTIwcG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                    }
                    cursor="pointer"
                  />
                </Box>
                <Text fontSize={"sm"} fontWeight={"bold"}>
                  OYOTEE
                </Text>
              </HStack>
            </Box>

            {/* category */}
            <Box
              flex={0.7}
              //  backgroundColor={'red'}
            >
              <HStack spacing={"20px"}>
                {type?.map((el, index) => (
                  <Box
                    key={index}
                    _hover={{
                      borderBottom: "3px solid green",
                    }}
                    borderBottom={
                      routeName === String(el.route_name)
                        ? "3px solid green"
                        : "3px solid #ffffff"
                    }
                    cursor="pointer"
                    transition="border-bottom 0.3s ease-in-out" // Add transition property
                    onClick={() => navigate("/".concat(el.route_name))}
                  >
                    <Text className={styles.tabs}>{el.category_name}</Text>
                  </Box>
                ))}
              </HStack>
            </Box>
          </HStack>

          <HStack w={"30%"} justifyContent="flex-end">
            <Box>
              <HStack spacing={"4"}>
                <VStack
                  position="relative"
                  spacing={"3px"}
                  onClick={() => navigate("/wishlist")}
                >
                  <Icon as={BsHandbag} fontSize="xl" />
                  <Badge
                    colorScheme="red"
                    fontSize="8px"
                    position="absolute"
                    top="10px"
                    right="-5px"
                    zIndex="1"
                    borderRadius={"50%"}
                  >
                    {"5"}
                  </Badge>
                </VStack>
                <VStack onClick={() => navigate("/wishlist")}>
                  <Icon as={CiHeart} fontSize="xl" />
                </VStack>
                <VStack
                  position={"relative"}
                  width={"30px"}
                  height={"30px"}
                  backgroundColor={"gray.200"}
                  border={"1px solid gray"}
                  borderRadius={"50%"}
                  onClick={() => navigate("/wishlist")}
                >
                  <Box
                    position={"absolute"}
                    top={"50%"}
                    left={"50%"}
                    transform="translate(-50%, -50%)"
                  >
                    <Image
                      src={profile}
                      height={"100%"}
                      width={"100%"}
                      alt="logo"
                      fallbackSrc={
                        "https://vastra-com.netlify.app/static/media/logo.907393fa26947a42ac8a.png"
                      }
                      cursor="pointer"
                    />
                  </Box>
                </VStack>
              </HStack>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
