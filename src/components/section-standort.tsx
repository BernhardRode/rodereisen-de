import * as React from "react"

const SectionStandort = ({ name }) => {
  return (
    <section className="w-full mt-16">
      <div className="container w-2/3 rounded-lg overflow-hidden">
        <h1>{name}</h1>
      </div>
    </section>
  )
}

export default SectionStandort
