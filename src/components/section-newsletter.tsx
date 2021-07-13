import * as React from "react"
import { useState } from "react"
import ModalBooking from "./modal-booking"

const SectionNewsletter = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const src =
    "https://connect.best-reisen.de/newsletter/registration?agency=1181"
  return (
    <section className="w-full pb-4 lg:pb-16">
      <div className="container text-center">
        <h2 className="text-3xl pt-8 pb-8 text-blue-900">Newsletter</h2>
        <p className="text-base">
          Sie möchten aktuelle, von unseren Experten handverlesene Angebote
          direkt in Ihr E-Mail Postfach?
        </p>
        <a
          className="mt-16 hover:text-blue-900 cursor-pointer inline-block w-auto h-full px-5 py-4 lg:text-base text-sm font-bold leading-none text-white transition-all duration-100 bg-indigo-700 rounded shadow-md fold-bold lg:bg-pink-500 lg:text-white sm:w-full lg:shadow-none hover:shadow-xl max-w-xl"
          onClick={() => setIsOpen(true)}
        >
          Dann jetzt direkt hier anmelden!
        </a>
      </div>
      {modalIsOpen ? (
        <ModalBooking onClose={() => setIsOpen(false)} src={src} />
      ) : null}
    </section>
  )
}

export default SectionNewsletter
