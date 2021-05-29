import React from "react"
import Content from "../components/content"
import Layout from "../components/layout"
import PageHeader from "../components/page-header"
import SearchEngineOptimization from "../components/seo"
import "./index.css"

const IndexPage = () => {
  const tiles = [
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

  return (
    <Layout>
      <SearchEngineOptimization title="Home" />
      <PageHeader background="/images/bg-1.png" />
      <Content zero>
        <div className="grid-container">
          {tiles.map((tile, index) => (
            <div
              key={index}
              className={
                tile.colspan === 2 ? "grid-item grid-span-2" : "grid-item"
              }
              style={{ backgroundImage: `url(${tile.src})` }}
            ></div>
          ))}
        </div>
      </Content>
    </Layout>
  )
}

export default IndexPage
