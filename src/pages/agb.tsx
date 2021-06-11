import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AGBPage = () => (
  <Layout>
    <SEO title="AGB" />
    <HeaderImage src="/images/bg-3.png" heightClass="pt-144" />
    <section className="w-full pt-192">
      <div className="container w-2/3 rounded-lg overflow-hidden">
        <h1>AGB</h1>
      </div>
    </section>
  </Layout>
)

export default AGBPage
