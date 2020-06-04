import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";
import MarkdownNavbar from '../components/index'

const Beginners = ({ data }) => {
  return (
    <Layout>
      <div className="markdown-body">
        <ReactMarkdown source={data.strapiBeginners.content} />
      </div>
      <MarkdownNavbar source={data.strapiBeginners.content} />
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
