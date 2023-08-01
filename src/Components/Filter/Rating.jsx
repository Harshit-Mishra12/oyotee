import React, { useState } from "react";
import { Checkbox, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <Text>Rating</Text>
      <Flex align="center">
        <HStack>
          <Checkbox onChange={() => handleRatingChange(0)} />
          {[1, 2, 3, 4, 5].map((num) => (
            <Icon
              key={num}
              as={StarIcon}
              color={num <= rating ? "yellow.500" : "gray.300"}
              boxSize={4}
              cursor="pointer"
              onClick={() => handleRatingChange(num)}
            />
          ))}
          <Text>above</Text>
        </HStack>
      </Flex>
    </>
  );
};

export default Rating;
