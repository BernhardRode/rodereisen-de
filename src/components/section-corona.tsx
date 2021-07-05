import * as React from "react"
import SectionHeadline from "./section-headline"

const SectionCorona = () => (
  <section className="w-full">
    <div className="container lg:w-1/2 p-4 lg:p-0">
      <div className="">
        <h1 className="text-3xl text-blue-900 pt-6 pb-6 text-center">
          liebe kunden!
        </h1>
        <p className="text-center">
          Wir sind endlich wieder persönlich für sie da!
        </p>

        <p className="text-center">
          Unsere Reisebüros sind wie folgt geöffnet:
        </p>

        <ul className="list-disc list-inside pt-6 pb-6">
          <li>Beilstein: Montag – Freitag 10-17 Uhr</li>
          <li>Steinheim: Montag – Freitag 10-13 und 14-17 Uhr </li>
        </ul>
        <ul className="list-disc list-inside pt-6 pb-6">
          <li>
            <a
              className="hover:text-yellow-600 text-pink-600"
              href="mailto:info@rodereisen.de"
            >
              info@rodereisen.de
            </a>
          </li>
          <li>
            <a
              className="hover:text-yellow-600 text-pink-600"
              href="tel:0049706294990"
            >
              +49 (0)7062 94990
            </a>
          </li>
          <li>
            <a
              href="tel:0049714481550"
              className="hover:text-yellow-600 text-pink-600"
            >
              +49 (0)7144 81550
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default SectionCorona
