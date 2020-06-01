import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Box, Flex, Heading } from "@chakra-ui/core";
import Img from "gatsby-image";

const LeftSideBar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Box w="20%">
      {/* 左侧栏浮动 */}
      <Box position="fixed">
        {/* 标题以及image */}
        <Flex>
          <Img fixed={data.file.childImageSharp.fixed} />{" "}
          <Heading as="h1" size="lg" lineHeight="50px">
            {data.site.siteMetadata.title}
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
