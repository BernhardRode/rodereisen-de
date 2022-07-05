import React, { useEffect, useState } from "react"
import ModalBooking from "./modal-booking"
import SingleOffer from "./single-offer"

const BASKET_ID = "XJQZ-9250"
const GET_OFFERS_API_PATH = `/api/GetOffers?id=${BASKET_ID}`

async function fetchOffersLists() {
  try {
    const res = await fetch(GET_OFFERS_API_PATH)
    const json = await res.json()
    return json
  } catch (error) {
    throw new Error("Loading failed, likely rate limit")
  }
}

const SectionOffers = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState("")
  const [browserIsSafari, setBrowserIsSafari] = useState(false)
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const isSafari =
      navigator.userAgent.search("Safari") >= 0 &&
      navigator.userAgent.search("Chrome") < 0

    if (browserIsSafari !== isSafari) {
      setBrowserIsSafari(isSafari)
    }

    fetchOffersLists().then(({ offers, msg }) => {
      if (msg) {
        setOffers([])
        return 
      }
      setOffers(offers)
    })
  }, [])

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
          {!offers || offers.length === 0 ? (
            <div className="">
              <h1 className="center">
                Es konnten keine Angebote geladen werden.
              </h1>
              <h2 className="center">
                Wir bitten Sie um Entschuldigung. Bitte versuchen Sie es später
                noch einmal.
              </h2>
            </div>
          ) : (
            (offers as any[]).map((offer, index) => (
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
            ))
          )}
        </div>
        {modalIsOpen && url !== "" ? (
          <ModalBooking onClose={() => close()} src={url} />
        ) : null}
      </div>
    </section>
  )
}

export default SectionOffers
