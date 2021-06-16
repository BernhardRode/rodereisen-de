import * as React from "react"
import SingleOffer from "./single-offer"

const SectionPortraits = ({ persons }) => (
  <section className="w-full pt-192 bg-white">
    <div className="container">
      <div className="grid grid-flow-col grid-cols-4">
        {persons.map(person => (
          <div key={`${person.path}`}>
            ${person.givenName}&nbsp;${person.name}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default SectionPortraits
