import React from "react";
import { Flex,Box } from "@chakra-ui/core";
import LeftSideBar from './leftSideBar'
import RightSideBar from './rightSideBar'


const Layout = ({ children }) => {
  return (
    <Flex minH="200vh">
      <LeftSideBar/>
      <Box bg='#E9D8FD' w='80%'>{children}</Box>
      <RightSideBar/>
    </Flex>
  );
};

export default Layout;
