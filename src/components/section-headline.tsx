import * as React from "react"

const SectionHeadline = ({ headline, subheadline }) => (
  <h1 className="w-full text-center text-blue-900 bg-white lowercase text-5xl font-semibold mt-32 pt-16 pb-16">
    {headline}&nbsp;
    <span className="text-yellow-500">{subheadline}</span>
  </h1>
)

interface SectionHeadlineProps {
  headline: string
  subheadline?: string
}

SectionHeadline.defaultProps = {
  headline: ``,
}

export default SectionHeadline
