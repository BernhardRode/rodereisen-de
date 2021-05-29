import React from "react"
import Content from "../components/content"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SearchEngineOptimization from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SearchEngineOptimization title="Kontakt" />
    <PageHeader headertitle="Kontakt" background="/images/bg-3.png" />
    <Content>
      <h1>Helllo</h1>
    </Content>
  </Layout>
)

export default ContactPage
