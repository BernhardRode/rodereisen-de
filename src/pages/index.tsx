import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionCorona from "../components/section-corona"
import SectionHeadline from "../components/section-headline"
import SEO from "../components/seo"
import Wall, { Walltile } from "../components/wall"

const IndexPage = () => {
  const tiles: Walltile[] = [
    { type: "image", colspan: 1, src: "/images/1.png" },
    { type: "image", colspan: 2, src: "/images/2.png" },
    { type: "image", colspan: 2, src: "/images/3.png" },
    { type: "image", colspan: 1, src: "/images/4.png" },
    { type: "image", colspan: 1, src: "/images/5.png" },
    { type: "image", colspan: 2, src: "/images/6.png" },
    { type: "image", colspan: 1, src: "/images/7.png" },
    { type: "image", colspan: 1, src: "/images/8.png" },
    { type: "image", colspan: 1, src: "/images/9.png" },
    { type: "image", colspan: 2, src: "/images/10.png" },
    { type: "image", colspan: 1, src: "/images/11.png" },
    { type: "image", colspan: 2, src: "/images/12.png" },
    { type: "image", colspan: 1, src: "/images/13.png" },
    { type: "image", colspan: 2, src: "/images/14.png" },
    { type: "image", colspan: 1, src: "/images/15.png" },
  ]
  const credit = `Photo by <a href="https://unsplash.com/@jruscello?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jessica Ruscello</a> on <a href="https://unsplash.com/s/photos/beach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
  return (
    <Layout>
      <SEO title="Home" />
      <Wall tiles={tiles} />
      <SectionHeadline headline="wir sind" subheadline="für sie da" />
      <SectionCorona />
    </Layout>
  )
}

export default IndexPage
