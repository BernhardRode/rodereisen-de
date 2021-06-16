import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StandortePage = () => (
  <Layout>
    <SEO title="Standorte" />
    <HeaderImage src="/images/bg-5.png" backgroundColor="#475FA6" />
    <section className="w-full mt-16">
      <div className="container w-2/3 rounded-lg overflow-hidden">
        <h1>Standorte</h1>
      </div>
    </section>
  </Layout>
)

export default StandortePage
