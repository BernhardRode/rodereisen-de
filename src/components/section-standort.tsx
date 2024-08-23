import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import { useEffect, useState } from "react"

const cleanPhone = (s: String) => {
  return s.replace(' (0)', '').replace(' ', '')
}

const SectionStandort = ({
  name,
  phone,
  street,
  city,
  image,
  // src,
  open,
}) => {
  return (
    <div className="py-3 flex flex-grow lg:mb-36">
      <div className="lg:border sm:rounded p-8 flex flex-col-reverse lg:flex-row lg:space-x-8 lg:shadow">
        <div className="lg:h-60 overflow-visible lg:w-1/2">
          <div className="flex rounded-xl overflow-hidden ring-2 ring-gray-200">
            <GatsbyImage
              image={image}
              alt={`Standort ${name}`}
              className="rounded-3xl shadow-lg max-"
              imgClassName=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{name}</h2>

          </div>

          <div>
            <div className="text-sm text-gray-400">Telefon</div>
            <div className="text-lg text-gray-800">
              <a href={`tel:${cleanPhone(phone)}`}>{phone}</a>
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
          <div className="pb-8 lg:pb-0">
            <div className="text-sm text-gray-400">Öffnungszeiten:</div>
            <div className="text-lg text-gray-800">
              <ul>
                {open.map((time, index) => (
                  <li key={index}>{time}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionStandort
