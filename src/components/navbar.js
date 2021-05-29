import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

const Navbar = ({ siteMetadata }) => {
  const [open, setOpen] = useState(false)
  const [transparent, setTransparent] = useState(true)

  let imgattr = "logo"
  const offset = 10

  const handleScroll = (evant) => {
    if (window.pageYOffset > offset) {
      if (transparent) {
        console.log("make visible")
        setTransparent(false)
      }
    } else {
      if (!transparent) {
        console.log("make transparent")
        setTransparent(true)
      }
    }
  }

  useEffect(() => {
    console.log("handleScroll on")
    window.addEventListener("scroll", handleScroll)

    return () => {
      console.log("handleScroll off")
      window.removeEventListener("scroll", handleScroll())
    }
  })

  return (
    <nav
      className={
        transparent
          ? "navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top"
          : "navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top navbar-area-fixed"
      }
    >
      <div className="container nav-container">
        <div className="responsive-mobile-menu">
          <div className="mobile-logo">
            <Link to="/">
              <img src={"/rr-logo-sticky.png"} alt={imgattr} />
            </Link>
          </div>
          <button
            className="navbar-toggler float-right"
            type="button"
            data-toggle="collapse"
            data-target="#tp_main_menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </span>
          </button>
          <div className="nav-right-content">
            <ul className="pl-0">
              <li className="top-bar-btn-booking">
                <Link className="btn btn-yellow" to="/tour-details">
                  Termin Vereinbaren <FontAwesomeIcon icon="paper-plane" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="tp_main_menu">
          <div className="logo-wrapper desktop-logo">
            <Link to="/" className="main-logo">
              <img src={"/rr-logo.png"} alt="logo" />
            </Link>
            <Link to="/" className="sticky-logo">
              <img src={"/rr-logo-sticky.png"} alt="logo" />
            </Link>
          </div>
          <ul className="navbar-nav">
            <li className="menu-item-has-children">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/angebote">Angebote</Link>
            </li>
            <li>
              <Link to="/wir">Wir</Link>
            </li>
            <li>
              <Link to="/wo">Wo</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right-content">
          <ul>
            <li>
              <Link className="btn btn-yellow" to="/tour-details">
                Termin Vereinbaren <FontAwesomeIcon icon="envelope" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
