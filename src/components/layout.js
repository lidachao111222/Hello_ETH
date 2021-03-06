import React,{ useState } from "react";
import { Flex, Box } from "@chakra-ui/core";
import MarkdownNavbar from '../components/toc'
import "./styles.css"
import "./navbar.css";
const Layout = ({ children}) => {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <Flex>
      <Box
        w="960px"
        maxW="100%"
        my="60px"
        mx="auto"
        py="20px"
        px="40px"
        onClick={() => {
          setNavVisible(false);
        }}
      >
        {children}
      </Box>
      <div className={`nav-container ${navVisible ? "show" : "hide"}`}>
        <div
          className="toggle-btn"
          onClick={() => {
            setNavVisible(!navVisible);
          }}
        >
          {navVisible ? "文章目录 →" : "←文章目录"}
        </div>
        <MarkdownNavbar source={children.props&&children.props.children.props.source} />
      </div>
    </Flex>
  );
};

export default Layout;
