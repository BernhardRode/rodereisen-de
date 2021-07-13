import * as React from "react"
import { useEffect } from "react"
import { useState } from "react"

const SectionContact = () => {
  const email = "info@rodereisen.de"
  const telefon1 = "+49 (0)7062 - 9499 0"
  const telefon1Link = "+49706294990"
  const telefon2 = "+49 (0)7144 - 8155 0"
  const telefon2Link = "+49714481550"

  return (
    <section className="w-full p-8 lg:p-0">
      <div className="flex flex-col lg:flex-row overflow-hidden pb-8 lg:pl-96 lg:pr-96">
        <div className="flex flex-row lg:flex-col items-center flex-grow">
          <div className="text-white">
            <div className="bg-blue-900 rounded-full inline-block p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <div className="text-xl p-7 text-blue-900 hover:text-pink-500">
            <a
              href={`/standorte`}
              className="text-blue-900 hover:text-pink-500 flex-grow"
            >
              In unseren Reisebüros
            </a>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center flex-grow">
          <div className="text-white">
            <div className="bg-blue-900 rounded-full inline-block p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <div className="text-xl p-7 text-blue-900 hover:text-pink-500">
            <a
              href={`mailto:${email}`}
              className="text-blue-900 hover:text-pink-500 flex-grow"
            >
              {email}
            </a>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center flex-grow">
          <div className="text-white">
            <div className="bg-blue-900 rounded-full inline-block p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
          </div>
          <div className="text-xl p-7 flex flex-col">
            <div>
              <a
                href={`tel:${telefon1Link}`}
                className="text-blue-900 hover:text-pink-500 flex-grow"
              >
                Beilstein: {telefon1}
              </a>
            </div>
            <div>
              <a
                href={`tel:${telefon2Link}`}
                className="text-blue-900 hover:text-pink-500 flex-grow"
              >
                Steinheim: {telefon2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact
