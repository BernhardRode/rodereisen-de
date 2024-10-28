import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const AGENTURNUMMER = 123;

const SectionAnbieter = () => {
  const data = useStaticQuery(graphql`
    query AnbieterImagesQuery {
      kultimerProvider: allFile(
        filter: {
          sourceInstanceName: { eq: "provider" }
          name: { eq: "kultimer" }
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
      marcoPoloProvider: allFile(
        filter: {
          sourceInstanceName: { eq: "provider" }
          name: { eq: "marco-polo" }
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
      studiosusProvider: allFile(
        filter: {
          sourceInstanceName: { eq: "provider" }
          name: { eq: "studiosus" }
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
    }
  `)
  console.log(data)
  const [kultimerLogo] = data.kultimerProvider.edges.map(({ node }) => node)
  const [marcoPoloLogo] = data.marcoPoloProvider.edges.map(({ node }) => node)
  const [studiosusLogo] = data.studiosusProvider.edges.map(({ node }) => node)

  return (
    <section className="w-full pb-4 lg:pb-16">
      <div className="container">       
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="items-center pt-16 p-12 lg:p-0">
            <h1>Studiosus bietet hochwertige Reisen</h1>
            <h2>mit einem besonderen Fokus auf Kultur und Begegnungen.</h2>
            <p>
              Ob es um den Austausch mit Einheimischen oder um aufregende Abenteuer in kleinen Gruppen geht – jede Reise wird von erfahrenen Reiseleitern begleitet. 
              Studiosus setzt zudem auf Nachhaltigkeit, indem alle Touren klimaneutral 
              gestaltet sind. Neben klassischen Studienreisen finden sich auch spezielle Angebote für Singles, Familien und Eventreisen. 
              Studiosus vereint unvergessliche Erlebnisse mit Flexibilität und einem starken Fokus auf den Schutz unserer Umwelt.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="items-center pt-16 p-3 lg:p-0">
            <a
              href={ ["https://www.studiosus.com/reisefinder?agnr=", AGENTURNUMMER].join('') }
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={studiosusLogo}
                alt="Studiosus"
              />
            </a>
          </div>
          <div className="items-center pt-16 p-3 lg:p-0">
            <a
              href={ ["https://www.studiosus.com/reisevarianten/eventreisen?agnr=", AGENTURNUMMER].join('') }
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={kultimerLogo}
                alt="Kultimer"
              />
            </a>
          </div>
          <div className="items-center pt-16 p-3 lg:p-0">
           <a
              href={ ["https://www.marco-polo-reisen.com/?agnr=", AGENTURNUMMER].join('') }
              target="_blank"
              rel="noopener noreferrer"
            >
              <GatsbyImage
                image={marcoPoloLogo}
                alt="Marco Polo"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAnbieter
