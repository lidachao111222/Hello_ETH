import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";

const Beginners = ({ data }) => {


  return (
    <Layout>
      <div>
        {data.strapiBeginners.content}
      </div>
    </Layout>
  );
};

export default Beginners;

export const query = graphql`
  query BeginnersTemplate($id: String!) {
    strapiBeginners(id: {eq: $id}) {
      title
      content
    }
  }
`
