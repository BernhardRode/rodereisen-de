import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExpertenPage = () => (
  <Layout>
    <SEO title="Experten" />
    <HeaderImage src="/images/bg-3.png" backgroundColor="#FB9D1F" />
    <section className="w-full mt-16">
      <div className="container w-2/3 rounded-lg overflow-hidden">
        <h1>Experten</h1>
      </div>
    </section>
  </Layout>
)

export default ExpertenPage
