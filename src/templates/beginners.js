import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";

const Beginners = ({ data }) => {


  return (
    <Layout>
      {/* <h1>{data.strapiBeginners.title}</h1>
      <p>{data.strapiBeginners.content}</p> */}
      {console.log(data)}
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
