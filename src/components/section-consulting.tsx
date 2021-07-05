import * as React from "react"
import { useEffect } from "react"
import { useState } from "react"

const SectionConsulting = () => {
  const [valid, setValid] = useState(false)
  useEffect(() => {})

  const paxConnectId = "MMPJABZVZTAKZTZEDEJR"
  const regex = new RegExp("\\w{3,5}-\\w{3,5}")

  const handleChange = text => {
    if (text.length > 0 && text.search(regex) > -1) {
      if (valid !== true) {
        setValid(true)
      }
    } else {
      if (valid !== false) {
        setValid(false)
      }
    }
  }

  return (
    <section className="w-full">
      <div className="container text-center">
        <h2 className="text-3xl pt-8 pb-8 text-blue-900">
          Meine Reiseangebote
        </h2>
        <p className="text-base">
          Rufen Sie hier Ihre persönlichen Angebote in der Online-Beratung ab.
        </p>
        <form
          target="_blank"
          method="get"
          action="https://www.meinereiseangebote.de/GoToAdvisory.php"
          className="mt-8 mb-8"
        >
          <input type="hidden" name="widgetid" value={paxConnectId} />
          <input type="hidden" name="portal" value="paxconnect" />

          <div className="w-full flex flex-col lg:flex-row p-4 justify-center">
            <div className="flex">
              <input
                type="text"
                className="p-4 lg:w-96 border flex flex-grow rounded-tl-md rounded-bl-none rounded-tr-md rounded-br-none lg:rounded-tl-md lg:rounded-bl-md lg:rounded-tr-none lg:rounded-br-none"
                placeholder="Beratungscode (z.B. RODE-1234)"
                onChange={e => handleChange(e.target.value)}
                name="id"
                size={11}
                required
                autoComplete="off"
              />
            </div>
            <div className="flex">
              <button
                className={`${
                  valid
                    ? "bg-pink-500 text-white cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                } flex flex-grow font-bold p-4 rounded shadow text-center rounded-tl-none rounded-bl-md rounded-tr-none rounded-br-md lg:rounded-tl-none lg:rounded-bl-none lg:rounded-tr-md lg:rounded-br-md`}
                type="submit"
                disabled={!valid}
              >
                Angebote anzeigen
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SectionConsulting
