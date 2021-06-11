import * as React from "react"
import SingleOffer from "./single-offer"

const SectionOffers = ({ offers }) => (
  <section className="w-full pt-192">
    <div className="container w-2/3 rounded-lg overflow-hidden">
      {offers.map(offer => (
        <SingleOffer
          offer={offer}
          key={`${offer.meta.id}-${offer.meta.slug}`}
        />
      ))}
    </div>
  </section>
)

export default SectionOffers
