import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderImage from "../components/header-image"

const AGBVeranstalterPage = () => (
  <Layout>
    <SEO title="AGB Veranstalter" />
    <HeaderImage src="/images/bg-8.png" backgroundColor="#E98885" />
    <section className="w-full mt-16">
      <div className="container w-2/3 rounded-lg overflow-hidden">
        <h1>AGB Veranstalter</h1>
      </div>
    </section>
  </Layout>
)

export default AGBVeranstalterPage
