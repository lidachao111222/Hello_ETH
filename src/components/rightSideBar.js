import React from "react";
import { Box,Icon } from "@chakra-ui/core";

const rightSideBar = () => {
  return (
    <Box bg="#C4F1F9" w={["5%", "5%", "20%", "20%"]}>
      <Icon
        name="drag-handle"
        visibility={["visible", "visible", "hidden", "hidden"]}
      />
      <Box visibility={["hidden", "hidden", "visible", "visible"]}>123</Box>
    </Box>
  );
};

export default rightSideBar;
