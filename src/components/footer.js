import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteMetadata }) => {
  return (
    <>
      <footer className="footer-area style-two">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7">
              <div className="section-title mb-4 text-center">
                <h2 className="title">Newsletter</h2>
                <p>Sign up to receive the best offers</p>
              </div>
              <div className="widget input-group newslatter-wrap">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                </div>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-yellow" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="about_us_widget text-center">
                <Link to="/" className="footer-logo">
                  <img src={"/img/sticky-logo.png"} alt="footerlogo" />
                </Link>
                <p>wir kümmern uns. um sie.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="footer-widget widget text-center">
                <div className="widget-contact d-inline-flex">
                  <p className="telephone text-left">
                    <i className="fa fa-phone base-color" />
                    <span>+49 (0)7062 9499-0)</span>
                  </p>
                  <p className="location text-left">
                    <i className="fa fa-envelope-o" />
                    <span>info@rodereisen.de</span>
                  </p>
                  <p className="text-left">
                    <i className="fa fa-map-marker" />
                    <span>
                      Hauptstrasse 44
                      <br /> 71717 Beilstein
                    </span>
                  </p>
                </div>
              </div>
              <div className="footer-widget widget text-center">
                <ul className="widget_nav_menu text-center viaje-go-top">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/angebote">Angebote</Link>
                  </li>
                  <li>
                    <Link to="/impressum">Impressum</Link>
                  </li>
                  <li>
                    <Link to="/agb">AGB</Link>
                  </li>
                  <li>
                    <Link to="/veranstalter-agb">Veranstalter AGB</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-inner border-tp-solid">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-9">
                <div className="copyright-text text-left">
                  &copy; Reiseb&uuml;ro Rode GmbH {new Date().getFullYear()} All
                  rights reserved. Powered with &nbsp;
                  <FontAwesomeIcon icon="heart" />
                  &nbsp; by
                  <a
                    href="https://bernhardrode.de/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &nbsp;<span>bernhardrode</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-3">
                <ul className="social-icon float-lg-right">
                  <li>
                    <a
                      className="facebook"
                      href="https://www.facebook.com/ReisebueroRode/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram"
                      href="https://www.instagram.com/rodereisen/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
