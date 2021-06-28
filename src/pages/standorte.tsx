import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import SectionStandort from "../components/section-standort"
import SEO from "../components/seo"

const StandortePage = ({ data }) => (
  <Layout>
    <SEO title="Standorte" />
    <HeaderImage src="/images/bg-5.png" backgroundColor="#475FA6" />
    <SectionHeadline headline="Standort" subheadline="Beilstein" />
    <SectionStandort name="Beilstein" />
    <SectionHeadline headline="Standort" subheadline="Steinheim" />
    <SectionStandort name="Steinheim" />
  </Layout>
)

export default StandortePage
