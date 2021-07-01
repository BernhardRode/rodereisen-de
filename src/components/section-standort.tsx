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
  open,
}) => {
  const [isOpen, setOpen] = useState(null)

  useEffect(() => {
    // setInterval(() => {
    const now = new Date()
    const weekday = now.getDay()
    const hour = now.getHours()
    const result =
      openDays.indexOf(weekday) > -1 && openHours.indexOf(hour) > -1

    if (isOpen !== result) {
      setOpen(result)
    }
    // }, 1000)
  }, [])

  return (
    <div className="py-3 flex flex-grow lg:mb-36">
      <div className="lg:border sm:rounded p-8 flex flex-col-reverse lg:flex-row lg:space-x-8 lg:shadow-xl">
        <div className="lg:h-60 overflow-visible lg:w-1/2">
          <div className="flex rounded-xl overflow-hidden ring-2 ring-gray-200 lg:shadow-xl">
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
        <div className="flex flex-col lg:w-1/2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{name}</h2>
            {isOpen !== null ? (
              <div
                className={`rounded-full h-6 w-6 ${
                  isOpen === true ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            ) : null}
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
          <div>
            <div className="text-sm text-gray-400">Öffnungszeiten:</div>
            <div className="text-lg text-gray-800">{open}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionStandort
