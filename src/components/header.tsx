import * as React from "react"
import { useEffect, useState } from "react"
import ModalBooking from "./modal-booking"

const Header = props => {
  const [isTransparent, setTransparent] = useState(true)
  const [isOpen, setOpen] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false)
  const offset = 5

  const handleScroll = () => {
    if (window.pageYOffset > offset) {
      if (isTransparent) {
        setTransparent(false)
      }
    } else {
      if (!isTransparent) {
        setTransparent(true)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <header
      className={`w-full h-24 fixed top-0 left-0 right-0 transition-colors ease-in-out duration-500 ${
        isTransparent
          ? "bg-white md:bg-transparent"
          : "bg-white blur bg-opacity-80 shadow-2xl"
      }`}
    >
      <div className="container flex items-center justify-center h-full max-w-6xl px-8 mx-auto sm:justify-between xl:px-0">
        <a href="/" className="relative flex flex-col font-black leading-none">
          <span className="text-2xl text-blue-900">
            <span className="font-light">reisebüro</span>
            <span className="font-bold">rode</span>
            <span className="text-pink-500">.</span>
          </span>
          <span className="font-light text-xs text-blue-900">
            wir kümmern uns. um sie.
          </span>
        </a>

        <nav
          id="nav"
          className={`absolute top-0 left-0 flex flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-blue-900 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative ${
            isOpen ? null : "hidden"
          }`}
        >
          <a
            href="/"
            className="ml-0 mr-0 pt-5 pb-5 block font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-pink-500"
          >
            Home<span className="text-pink-500">.</span>
          </a>
          <a
            href="/experten"
            className="ml-0 mr-0 pt-5 pb-5 block font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-pink-500"
          >
            Experten<span className="text-pink-500">.</span>
          </a>
          <a
            href="/standorte"
            className="ml-0 mr-0 pt-5 pb-5 block font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color hover:text-pink-500"
          >
            Standorte<span className="text-pink-500">.</span>
          </a>
          <div className="flex flex-col w-full font-medium border-t border-gray-200 md:hidden">
            <a
              href="/angebote"
              className="w-full py-2 pt-3 pb-3 font-bold text-center text-pink-500"
            >
              Angebote
            </a>
            <a
              href="tel:0049706294990"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-yellow-500 fold-bold"
            >
              {" "}
              <div className="flex flex-col">
                <small className="">Beilstein</small>
                <span className="font-semibold">07062 94990</span>
              </div>
            </a>
            <a
              href="tel:0049714481550"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-yellow-500 fold-bold"
            >
              {" "}
              <div className="flex flex-col">
                <small className="">Steinheim</small>
                <span className="font-semibold">07144 81550</span>
              </div>
            </a>
            <a
              href="mailto:info@rodereisen.de"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-yellow-500 fold-bold"
            >
              {" "}
              <div className="flex flex-col">
                <small className="">E-Mail</small>
                <span className="font-semibold">info@rodereisen.de</span>
              </div>
            </a>
            <a
              onClick={() => setIsOpen(true)}
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-yellow-500 fold-bold"
            >
              Termin vereinbaren
            </a>
          </div>
        </nav>

        <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
          <a
            href="/angebote"
            className="relative py-4 mr-0 text-sm font-bold text-pink-500 md:px-5 sm:mr-3 md:mt-0 hover:text-blue-900 lg:text-base"
          >
            Angebote
          </a>
          <a
            onClick={() => setIsOpen(true)}
            className="relative hover:text-blue-900 cursor-pointer inline-block w-auto h-full px-5 py-4 lg:text-base text-sm font-bold leading-none text-white transition-all duration-100 bg-indigo-700 rounded shadow-md fold-bold lg:bg-yellow-500 lg:text-white-500 sm:w-full lg:shadow-none hover:shadow-xl"
          >
            Termin vereinbaren
          </a>
        </div>

        <div
          id="nav-mobile-btn"
          className={`absolute top-0 right-0 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10 ${
            isOpen ? null : "close"
          }`}
          onClick={() => setOpen(!isOpen)}
        >
          <span
            className={`bg-blue-900 block w-full h-1 mt-2 duration-200 transform rounded-full sm:mt-1`}
            style={{
              transform: isOpen ? "rotate(45deg)" : null,
              top: isOpen ? "4px" : null,
              position: "relative",
            }}
          ></span>
          <span
            className={`bg-blue-900 block w-full h-1 mt-1 duration-200 transform rounded-full`}
            style={{
              transform: isOpen ? "rotate(-45deg)" : null,
              marginTop: isOpen ? "0px" : null,
            }}
          ></span>
        </div>
      </div>
      {modalIsOpen ? <ModalBooking onClose={() => setIsOpen(false)} /> : null}
    </header>
  )
}

interface HeaderProps {
  siteTitle?: string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
