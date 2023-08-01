import React, { useState } from "react";
import { Checkbox, Stack, Text } from "@chakra-ui/react";
const categoriesData = ["Gardening", "Plants", "Seeds", "Bulbs", "Planters"];

function CategoriesMultiSelect() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  return (
    <Stack>
      <Text textAlign={"start"}>Categories</Text>

      {categoriesData.map((category) => (
        <Checkbox
          size="sm"
          key={category}
          isChecked={selectedCategories.includes(category)}
          onChange={() => handleCategoryChange(category)}
        >
          {category}
        </Checkbox>
      ))}
    </Stack>
  );
}

export default CategoriesMultiSelect;
