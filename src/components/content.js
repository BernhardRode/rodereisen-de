import React from "react"
import "./content.css"

const Content = ({ children, zero }) => (
  <div className="mg-top--70">
    <div className={zero ? "container-bg container-zero" : "container-bg"}>
      <div className="container">{children}</div>
    </div>
  </div>
)

export default Content
