// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Slider from "react-slick"

const Instagram = ({ posts }) => {
  const settings = {
    slidesToShow: 8,
    dots: false,
    arrows: false,
    autoplaySpeed: 15000,
    loop: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="instagram-area pd-top-100">
        <div className="section-title text-center">
          <h2 className="title">Instagram Post</h2>
        </div>
        <div className="instagram-slider">
          <Slider {...settings}>
            {posts.map((post) => (
              <div className="instagram-slider-item" key={post.node.id}>
                <a href={post.node.permalink} target="_blank" rel="noreferrer">
                  <img
                    src={post.node.preview}
                    alt={post.node.caption}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

Instagram.propTypes = {
  siteTitle: PropTypes.string,
}

Instagram.defaultProps = {
  siteTitle: ``,
}

export default Instagram
