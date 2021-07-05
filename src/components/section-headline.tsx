import * as React from "react"

const SectionHeadline = ({ headline, subheadline }) => (
  <h1 className="w-full flex-col lg:flex-row text-center lowercase text-2xl lg:text-5xl font-semibold pt-8 lg:pt-16 pb-8 lg:pb-16">
    <span className="text-blue-900">{headline}</span>
    {subheadline ? (
      <span className="text-yellow-600">&nbsp;{subheadline}</span>
    ) : null}
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
