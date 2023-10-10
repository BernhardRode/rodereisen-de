import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import PageHead from "../components/page-head"
import Spinner from "../components/spinner"
import * as React from "react"
import { Suspense } from "react"
import SectionOffers from "../components/section-offers"

const AngebotePage = props => {
  return (
    <Layout>
      <PageHead title="Angebote" />
      <HeaderImage banner="Banner_3">
        <SectionHeadline headline="Aktuelle" subheadline="Angebote" />
        <Suspense fallback={<Spinner />}>
          {/* loading must happen inside a <Suspense> */}
          <SectionOffers />
        </Suspense>
      </HeaderImage>
    </Layout>
  )
}

export default AngebotePage
