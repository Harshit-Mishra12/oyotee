import React from "react";
import { Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import "../../Constants/index.css";
import styles from "../Filter/../../Css/filter.module.css";

function Price() {
  return (
    <Stack>
      <Text textAlign={"start"}>Price Range</Text>
      <HStack>
        <Input placeholder="Min" size="sm" />
        <Input placeholder="Max" size="sm" />
      </HStack>
      <Button size="sm" isExternal className={styles.button}>
        Set Price
      </Button>
    </Stack>
  );
}

export default Price;
