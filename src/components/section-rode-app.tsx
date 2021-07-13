import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import SectionHeadline from "./section-headline"

const SectionRodeApp = () => {
  const data = useStaticQuery(graphql`
    query AppImagesQuery {
      appleAppStore: allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          name: { eq: "appstore-apple" }
        }
      ) {
        edges {
          node {
            id
            name
            extension
            publicURL
          }
        }
      }
      googleAppStore: allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          name: { eq: "appstore-google" }
        }
      ) {
        edges {
          node {
            id
            name
            extension
            publicURL
          }
        }
      }
      dataAppLogo: allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          name: { eq: "app-logo" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(height: 100)
            }
            id
            name
            extension
          }
        }
      }
    }
  `)

  const [appleAppStore] = data.appleAppStore.edges
    .map(({ node }) => node)
    .map(({ publicURL }) => publicURL)
  const [googleAppStore] = data.googleAppStore.edges
    .map(({ node }) => node)
    .map(({ publicURL }) => publicURL)
  const [appLogo] = data.dataAppLogo.edges.map(({ node }) => node)

  const appLogoImage = getImage(appLogo)

  return (
    <section className="w-full pb-4 lg:pb-16">
      <div className="container lg:w-1/2 p-4 lg:p-0 mb-16 mt-16">
        <div className="flex flex-col  items-center content-center justify-evenly">
          <div className="pt-12">
            <GatsbyImage
              image={appLogoImage}
              alt="Reisebüro Rode - Mein Reisebüro App"
            />
          </div>
          <SectionHeadline headline="Unsere App" subheadline="Für Sie" />
          <p className="text-center pb-4">
            Ihr persönlicher Reisebegleiter von A wie „Abflugzeiten“ bis Z wie
            „Zusatznutzen“. Alle Informationen zu Ihrer Reise immer auf dem
            aktuellsten Stand, exklusive Insidertipps am Urlaubsort sowie Ihren
            individuellen Reiseplan immer auf einen Blick.
          </p>
          <p className="text-center pb-4">
            Ihre weltweite Verbindung zu Ihrem Heimatort und den Profis im
            Reisebüro. Jetzt im App-Store downloaden unter "Mein Reisebüro".
          </p>
        </div>
        <h3 className="text-xl text-center">
          Herunteraden und immer aktuell bleiben.
        </h3>
        <div className="flex flex-col lg:flex-row lg:flex-grow items-center lg:content-center lg:justify-evenly lg:pb-8">
          <a
            href="https://apps.apple.com/de/app/mein-reiseb%C3%BCro/id1519027335"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="p-4 lg:p-12"
              src={appleAppStore}
              alt="Apple App Store"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.numbirds.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="p-4 lg:p-12"
              src={googleAppStore}
              alt="Google App Store"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default SectionRodeApp
