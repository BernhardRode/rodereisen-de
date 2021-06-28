import * as React from "react"
import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import SectionStandort from "../components/section-standort"
import SEO from "../components/seo"

const StandortePage = ({ data }) => (
  <Layout>
    <SEO title="Standorte" />
    <HeaderImage banner="Banner_8">
      <div className="container">
        <SectionHeadline headline="unsere" subheadline="standorte" />
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <h1>Standort</h1>
            <h2>Beilstein</h2>
            <div>
              <div className="">
                <SectionStandort
                  name="Beilstein"
                  phone="+49 (0)7062 94990"
                  street="Hauptstrasse 44"
                  city="D-71717 Beilstein"
                />
              </div>
              {/* <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.4578673951423!2d9.3151022!3d49.0399172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47983253abbb429d%3A0xa6f6804736e5bc86!2sReiseb%C3%BCro%20Rode%20GmbH!5e0!3m2!1sde!2sde!4v1624920661739!5m2!1sde!2sde"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div> */}
            </div>
          </div>
          <div className="">
            <h1>Standort</h1>
            <h2>Steinheim</h2>
            <div>
              <div className="">
                <SectionStandort
                  name="Steinheim"
                  phone="+49 (0)7144 81550"
                  street="Friedrichstraße 8"
                  city="D-71711 Steinheim"
                />
              </div>
              {/* <div className="">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d598.7486749782171!2d9.278332971778612!3d48.96580047413999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799cd1149209e83%3A0x8bf2cb0c083f2357!2sReiseb%C3%BCro%20Rode%20GmbH!5e0!3m2!1sde!2sde!4v1624920478953!5m2!1sde!2sde"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1n5qUIUi99DC99NbkbMgS_WiOIwoKiRE8"
          width="100%"
          height="500"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </HeaderImage>
  </Layout>
)

export default StandortePage
