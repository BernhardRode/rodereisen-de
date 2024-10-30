import * as React from "react"
import Layout from "../components/layout"
import SectionBestReisen from "../components/section-best-reisen"
import SectionContact from "../components/section-contact"
import SectionHeadline from "../components/section-headline"
import SectionRodeApp from "../components/section-rode-app"
import SectionRodeInklusive from "../components/section-rode-inklusive"
import SectionStudiosus from "../components/section-studiosus"
import PageHead from "../components/page-head"
import Wall from "../components/wall"
import SectionRodeVideo from "../components/section-rode-video"

const IndexPage = () => {
  return (
    <Layout>
      <PageHead title="Home" />
      <Wall />
      <SectionHeadline headline="wir sind" subheadline="für sie da" />
      <SectionContact />
      <SectionRodeInklusive />
      <SectionRodeApp />
      <SectionBestReisen />
      <SectionStudiosus />
    </Layout>
  )
}

export default IndexPage
