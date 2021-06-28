import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import SectionStandort from "../components/section-standort"
import SEO from "../components/seo"

const StandortePage = ({ data }) => (
  <Layout>
    <SEO title="Standorte" />
    <HeaderImage banner="Banner_8">
      <SectionHeadline headline="Standort" subheadline="Beilstein" />
      <SectionStandort name="Beilstein" />
      <SectionHeadline headline="Standort" subheadline="Steinheim" />
      <SectionStandort name="Steinheim" />
    </HeaderImage>
  </Layout>
)

export default StandortePage
