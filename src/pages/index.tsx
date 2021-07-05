import * as React from "react"
import Layout from "../components/layout"
import SectionBestReisen from "../components/section-best-reisen"
import SectionHeadline from "../components/section-headline"
import SectionRodeApp from "../components/section-rode-app"
import SectionRodeInklusive from "../components/section-rode-inklusive"
import SectionRodeVideo from "../components/section-rode-video"
import SEO from "../components/seo"
import Wall from "../components/wall"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Wall />
      <SectionHeadline headline="wir sind" subheadline="für sie da" />
      <SectionRodeVideo />
      <SectionRodeInklusive />
      <SectionRodeApp />
      <SectionBestReisen />
    </Layout>
  )
}

export default IndexPage
