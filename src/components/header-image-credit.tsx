import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

const HeaderImageCredit = (props: HeaderImageCreditProps) => (
  <div className="absolute bottom-0 right-0 z-50">{props.credit}</div>
)

interface HeaderImageCreditProps {
  credit?: string
}

HeaderImageCredit.defaultProps = {}

export default HeaderImageCredit
