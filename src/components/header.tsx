import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"

const Header = props => {
  const [isTransparent, setTransparent] = useState(true)

  const offset = 50

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
    <header className="fixed w-full">
      <div className="container flex">
        <nav
          className={`transform-gpu flex items-center justify-between flex-wrap w-full blur ${
            isTransparent ? "mt-12" : "mt-0"
          }`}
        >
          <a
            className="flex items-center flex-shrink-0 text-blue-900 mr-6"
            href="/"
          >
            <StaticImage
              className="mr-4"
              src="../images/rr-flugzeug.svg"
              alt="Reisebüro Rode GmbH"
              width={50}
              height={50}
              loading="eager"
            />
            <div id="logo" className="grid grid-cols-1 gap-0 text-blue-900">
              <span className="font-light text-3xl">
                reisebüro<span className="font-bold">rode</span>
              </span>
              <span className="text-sm">wir kümmern uns. um sie.</span>
            </div>
          </a>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 rounded text-blue-900 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="blur w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-opacity-90 bg-blue-900 rounded-tr-xl rounded-br-xl overflow-hidden">
            <div className="lg:flex-grow items-end px-4">
              <a
                className="block text-white hover:text-yellow-500 lg:inline-block mr-4 ml-4"
                href="/"
              >
                Home
              </a>
              &nbsp;<span className="text-white invisible md:visible">|</span>
              &nbsp;
              <a
                className="block text-white hover:text-yellow-500 lg:inline-block mr-4 ml-4"
                href="/angebote"
              >
                Angebote
              </a>
              &nbsp;<span className="text-white invisible md:visible">|</span>
              &nbsp;
              <a
                className="block text-white hover:text-yellow-500 lg:inline-block mr-4 ml-4"
                href="/team"
              >
                Team
              </a>
              &nbsp;<span className="text-white invisible md:visible">|</span>
              &nbsp;
              <a
                className="block text-white hover:text-yellow-500 lg:inline-block ml-4"
                href="/kontakt"
              >
                Kontakt
              </a>
            </div>
            <div>
              <a
                href="#"
                className="inline-block px-4 py-2 leading-none lg:mt-0 bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-4"
              >
                Termin vereinbaren
              </a>
            </div>
          </div>
        </nav>
      </div>
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
