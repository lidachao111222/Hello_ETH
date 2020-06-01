import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 

const BeginnerTemplate = ({ data }) => (
  <Layout>
    {/* <h1>{data.strapiArticle.title}</h1>
    <p>{data.strapiArticle.content}</p> */}
    {console.log(data)}
  </Layout>
)

export default BeginnerTemplate

export const query = graphql`
  query BeginnerTemplate($id: String!) {
    strapiBeginners(id: {eq: $id}) {
      title
      content
    }
  }
`


