import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { useEffect, useState } from "react"

const SectionStandort = ({
  name,
  phone,
  street,
  city,
  image,
  src,
  openHours,
  openDays,
}) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const now = new Date()
    const weekday = now.getDay()
    const hour = now.getHours()
    const isOpen =
      openDays.indexOf(weekday) > -1 && openHours.indexOf(hour) > -1
    setOpen(isOpen)
  }, [])

  return (
    <div className="py-3 flex flex-grow mb-36">
      <div className="bg-white shadow-lg border-gray-100 max-h-96	border sm:rounded-3xl p-8 flex space-x-8">
        <div className="h-60 overflow-visible w-1/2">
          <div className="flex rounded-xl overflow-hidden ring-2 ring-blue-900">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              src={src}
              className="block rounded-xl overflow-hidden"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col w-1/2 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold">{name}</h2>
            <div
              className={`rounded-full h-8 w-8 ${
                isOpen ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
          </div>
          <GatsbyImage
            image={image}
            alt={`Standort ${name}`}
            className="rounded-3xl shadow-lg max-"
            imgClassName=""
          />
          <div>
            <div className="text-sm text-gray-400">Telefon</div>
            <div className="text-lg text-gray-800">
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Adresse</div>
            <div className="text-lg text-gray-800">
              {street}
              <br />
              {city}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionStandort
