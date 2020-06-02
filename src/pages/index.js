import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Redirect } from '@reach/router'

const IndexPage = () => (
  <Layout>
    {/* 重定向 */}
    <Redirect noThrow to="/hello-eth-index" />
    <SEO title="探秘以太坊" />
  </Layout>
)

export default IndexPage
