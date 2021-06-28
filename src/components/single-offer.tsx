import * as React from "react"

const SingleOffer = ({ offer }) => {
  return (
    <div className="flex flex-col p-4">
      <div className="rounded shadow overflow-hidden">
        <div
          className="h-52 w-full bg-cover"
          style={{ backgroundImage: `url("${offer.image}")` }}
        >
          <div className="relative top-10 w-20 text-center bg-yellow-500 rounded">
            <div className="">
              <a className="" href="/contact">
                Details 🔍
              </a>
            </div>
          </div>
        </div>
        <div className="details pt-4">
          <h2 className="text-blue-900 text-2xl text-center">{offer.hotel}</h2>
          <h3 className="text-gray-500 text-base pb-4 text-center">
            {offer.destinationDescription}
          </h3>
          <ul className="border-0 border-t-4 ml-10 mr-10 border-dotted">
            <li>{offer.final}</li>
            <li>{offer.start}</li>
            <li>{offer.end}</li>
          </ul>
          <div className="">
            <p className="text-gray-500 text-lg text-center pr-24">Preis</p>
            <h3 className="text-yellow-500 text-5xl font-normal text-center">
              {offer.price} <small>&euro;</small>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleOffer
