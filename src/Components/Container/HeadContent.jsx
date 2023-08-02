import {
  Input,
  InputGroup,
  Text,
  InputLeftElement,
  InputRightElement,
  IconButton,
  Box,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { FaSearch, FaTimes } from "react-icons/fa";
import "../../Constants/index.css";
import styles from "./container.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import SpacingBox from "../ReUse/SpacingBox";
const filterData = ["Sort", "Relevance", "Popular", "Most News", "Price"];
export const HeadContent = () => {
  return (
    <>
      <Box my={2}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search..."
            pr="4rem" // Padding right to make space for the clear icon
          />
          {true && (
            <InputRightElement width="4rem">
              <IconButton
                aria-label="Clear"
                icon={<FaTimes />}
                variant="ghost"
                colorScheme="gray"
                size="sm"
                // onClick={onClear}
              />
            </InputRightElement>
          )}
        </InputGroup>
        <SpacingBox />
        <HStack>
          <Text className={styles.message} textAlign={"start"}>
            Search results for{" "}
          </Text>
          <Text>"Monsters" </Text>
        </HStack>

        <SpacingBox />
        <Stack direction={"row"} spacing={4}>
          {filterData.map((item) =>
            item === "Price" ? (
              <Button
                size="sm"
                border="1px"
                borderColor="gray.300"
                backgroundColor={"white"}
                _hover={{ backgroundColor: "green" ,color:"white"}}
                rightIcon={<ChevronDownIcon />}
              >
                {" "}
                {item}
              </Button>
            ) : (
              <Button
                size="sm"
                border="1px"
                borderColor="gray.300"
                backgroundColor={"white"}
                _hover={{ backgroundColor: "green" ,color:"white"}}
              >
                {" "}
                {item}
              </Button>
            )
          )}
        </Stack>
      </Box>
    </>
  );
};

export default HeadContent;
