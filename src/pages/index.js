import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Redirect } from '@reach/router'

const IndexPage = () => (
  <Layout>
    {/* 重定向 */}
    <Redirect noThrow to="/hello-eth-index" />
    <SEO title="探秘以太坊" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
