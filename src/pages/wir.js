import React from "react"
import Content from "../components/content"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SearchEngineOptimization from "../components/seo"

const WePage = () => (
  <Layout>
    <SearchEngineOptimization title="Wir" />
    <PageHeader headertitle="Wir" background="/images/bg-6.png" />
    <Content>
      <h1>Helllo</h1>
    </Content>
  </Layout>
)

export default WePage
