import * as React from "react"

const SectionCorona = () => (
  <section className="w-full">
    <div className="container w-1/2">
      <div className="">
        <h1 className="text-3xl text-blue-900 pt-6 pb-6">liebe kunden!</h1>
        <p>Wir sind endlich wieder persönlich für sie da!</p>
        <p>Unsere Reisebüros sind wie folgt geöffnet:</p>
        <ul className="list-disc list-inside pt-6 pb-6">
          <li>Beilstein: Montag – Freitag 10-17 Uhr</li>
          <li>Steinheim: Montag – Freitag 10-13 und 14-17 Uhr </li>
        </ul>
        <p>
          Um terminvereinbarung wird gebeten. Das geht am einfachsten über
          unsere "Termin vereinbaren" Funktion.
        </p>
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
        <p>
          bitte kontaktieren sie uns per e-mail unter info@rodereisen.de. sie
          erhalten schnellstmöglich eine rückantwort. in dringenden fällen
          wählen sie bitte:
        </p>
        <h2>Ihr Reisebüro Rode Team</h2>
      </div>
    </div>
  </section>
)

export default SectionCorona
