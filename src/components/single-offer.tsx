import * as React from "react"

const SingleOffer = ({ offer }) => {
  return (
    <div className="w-full bg-white">
      <div className="container w-2/3">
        <h1>{offer.meta.id}</h1>
        <h1>{offer.trip.image}</h1>
        <h1>{offer.trip.hotel}</h1>
      </div>
    </div>
  )
}

export default SingleOffer
