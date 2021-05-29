import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"

const Header = ({ siteMetadata }) => (
  <header>
    <Navbar siteMetadata={siteMetadata} />
  </header>
)
export default Header
