import * as React from "react"

const parseDate = dateString => {
  const date = new Date(dateString)
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return date.toLocaleDateString("de-DE", options as any)
}

const SingleOffer = ({ offer }) => {
  const start = parseDate(offer.start)
  const end = parseDate(offer.end)

  return (
    <div className="flex flex-col">
      <div className="rounded border lg:shadow overflow-hidden">
        <div
          className="h-52 w-full bg-cover"
          style={{ backgroundImage: `url("${offer.image}")` }}
        >
          <div className="flew flex-grow w-full h-full flex items-center justify-center">
            <div className="rounded-full text-white bg-yellow-600 h-20 w-20 items-center justify-center opacity-0 hover:opacity-100 flex flex-col">
              <span>🔍</span>
              <span>Details</span>
            </div>
          </div>
        </div>
        <div className="details pt-4">
          <h2 className="text-blue-900 text-2xl text-center h-16">
            {offer.hotel}
          </h2>
          <h3 className="text-gray-500 text-base pb-4 text-center">
            {offer.destinationDescription}
          </h3>
          <ul className="border-0 border-t-4 ml-10 mr-10 border-dotted">
            <li>{offer.final}</li>
            <li>{start}</li>
            <li>{end}</li>
          </ul>
          <div className="">
            <p className="text-gray-800 text-lg pr-24 ml-10 mr-10">ab</p>
            <h3 className="text-yellow-600 text-5xl font-normal text-center">
              {offer.price} <small>&euro;</small>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleOffer
