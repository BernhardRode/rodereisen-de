/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "@popperjs/core/dist/umd/popper.js"
import "jquery/dist/jquery.js"
import "slick-carousel/slick/slick.js"
import "slick-carousel/slick/slick.css"
import "./src/styles/custom.css"
import "./src/styles/layout.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"

library.add(
  faPaperPlane,
  faCheckSquare,
  faCoffee,
  faEnvelope,
  faHeart,
  faFacebook,
  faTwitter,
  faInstagram
)
