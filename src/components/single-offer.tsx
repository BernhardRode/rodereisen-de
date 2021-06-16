import * as React from "react"

const SingleOffer = ({ offer }) => {
  return (
    <div className="col-span-1">
      <div className="flex flex-col">
        <img src={offer.trip.image} alt={offer.trip.hotel} />
        <p>{offer.trip.hotel}</p>
      </div>
    </div>
  )
}

export default SingleOffer
