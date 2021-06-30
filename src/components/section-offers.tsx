import * as React from "react"
import { useState } from "react"
import ModalBooking from "./modal-booking"
import SingleOffer from "./single-offer"

const SectionOffers = ({ offers }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState("")
  const open = offer => {
    const BASE_URL = "https://www.meinereiseangebote.de"
    const url = `${BASE_URL}/${offer.basketId}/${offer.offerId}`
    setUrl(url)
    setIsOpen(true)
  }

  const close = () => {
    setUrl("")
    setIsOpen(false)
  }

  return (
    <section className="w-full bg-white">
      <div className="container rounded-lg overflow-hidden">
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer, index) => (
            <button onClick={() => open(offer)} key={`${offer.id}-${index}`}>
              <SingleOffer offer={offer} />
            </button>
          ))}
        </div>
        {modalIsOpen && url !== "" ? (
          <ModalBooking onClose={() => close()} src={url} />
        ) : null}
      </div>
    </section>
  )
}

export default SectionOffers
