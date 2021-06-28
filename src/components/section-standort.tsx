import * as React from "react"

const SectionStandort = ({ name, phone, street, city }) => {
  return (
    <section className="w-full">
      <div className="container rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-0">
          <div className="col-span-2"></div>
          <div>
            <a href={`tel:${phone}`}>{phone}</a>
            <h1>{street}</h1>
            <h1>{city}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionStandort
