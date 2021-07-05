import * as React from "react"
import { useEffect, useState } from "react"
import ModalBooking from "./modal-booking"
import SingleOffer from "./single-offer"

const SectionOffers = ({ offers }) => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState("")
  const [browserIsSafari, setBrowserIsSafari] = useState(null)

  useEffect(() => {
    const isSafari =
      navigator.userAgent.search("Safari") >= 0 &&
      navigator.userAgent.search("Chrome") < 0

    if (browserIsSafari !== isSafari) {
      setBrowserIsSafari(isSafari)
    }
  })

  const getOfferSrc = offer => {
    const BASE_URL = "https://www.meinereiseangebote.de"
    const url = `${BASE_URL}/${offer.basketId}/${offer.offerId}`

    return url
  }

  const open = offer => {
    const url = getOfferSrc(offer)
    setUrl(url)
    setIsOpen(true)
  }

  const close = () => {
    setUrl("")
    setIsOpen(false)
  }

  return (
    <section className="w-full bg-white">
      <div className="container rounded overflow-hidden p-4 lg:p-0">
        <div
          className="grid grid-flow-row grid-cols-1 lg:grid-cols-4 gap-4 mb-4"
          style={{ alignItems: "center" }}
        >
          {offers.map((offer, index) => (
            <div
              className="flex flex-col flex-grow cursor-pointer"
              key={`${offer.id}-${index}`}
            >
              {browserIsSafari === null || browserIsSafari === true ? (
                <a
                  href={getOfferSrc(offer)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SingleOffer offer={offer} />
                </a>
              ) : null}
              {browserIsSafari === false ? (
                <a onClick={() => open(offer)}>
                  <SingleOffer offer={offer} />
                </a>
              ) : null}
            </div>
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
