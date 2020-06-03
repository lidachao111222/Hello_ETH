import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import Toc from "react-auto-toc";

const Beginners = ({ data }) => {
  return (
    <Layout>
      <div>
        <ReactMarkdown source={data.strapiBeginners.content} />
      </div>
      <Toc markdownText={data.strapiBeginners.content} />
    </Layout>
  );
};

export default Beginners;

export const query = graphql`
  query BeginnersTemplate($id: String!) {
    strapiBeginners(id: { eq: $id }) {
      title
      content
    }
  }
`;
