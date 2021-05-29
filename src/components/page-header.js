import { Link } from "gatsby"
import React from "react"

const PageHeader = ({ headertitle, background, height }) => {
  let HeaderTitle = headertitle
  background = background ? background : 'url("/images/bg-1.png'
  height = height ? height : 250

  return (
    <div style={{ height: `${height}px` }}>
      <div
        className="breadcrumb-area"
        style={{ backgroundImage: 'url("' + background + '")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner">
                <h1 className="page-title">{HeaderTitle}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
