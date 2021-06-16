import * as React from "react"
import SingleOffer from "./single-offer"

const SectionOffers = ({ offers }) => (
  <section className="w-full mt-16 bg-white">
    <div className="container rounded-lg overflow-hidden">
      <div className="grid grid-flow-col grid-cols-3 gap-4">
        {offers.map(offer => (
          <SingleOffer
            offer={offer}
            key={`${offer.meta.id}-${offer.meta.slug}`}
          />
        ))}
      </div>
    </div>
  </section>
)

export default SectionOffers
