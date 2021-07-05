import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import SectionHeadline from "./section-headline"

const SectionBestReisen = () => {
  const data = useStaticQuery(graphql`
    query BestReisenImagesQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          name: { eq: "bestreisen-logo-member" }
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
  const [file] = data.allFile.edges.map(({ node }) => node)
  const image = getImage(file)

  return (
    <section className="w-full pb-16">
      <div className="container">
        <div className="flex flex-col items-center pt-16">
          <GatsbyImage
            image={image}
            alt="Reisebüro Rode - Mein Reisebüro App"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly">
          <div className="p-8">
            <h1 className="text-blue-900 text-center text-3xl pb-8">
              Vor über 30 Jahren
            </h1>
            <p className="">
              Etablierten erfolgreiche, inhabergeführte und unabhängige
              Reisebüros eine kundenorientierte Alternative zu den
              Anbieterketten und Filialen. Der daraus entstandene Verbund
              genießt heute mit seiner unternehmerischen Stärke ein hohes
              Ansehen in der Branche und bei den Kunden. Die angeschlossenen
              Reisebüros verfügen über ein Netzwerk internationaler
              Tourismuskompetenz mit weltweiten Kontakten und modernster
              Technik.
            </p>
          </div>
          <div className="p-8">
            <h1 className="text-blue-900 text-center text-3xl pb-8">
              BEST-Reisen Werte
            </h1>
            <p className="">
              Gerade als Reiseprofis sind wir uns in ganz besonderem Maße der
              Verantwortung für unseren blauen Planeten bewusst. Deshalb
              zeichnet BEST-REISEN jährlich die besten Reisebüro-Ideen zum
              Schutz der Natur und unserer Ressourcen aus. Mit gemeinsamen
              Schulbauprojekten u.a. in Tansania, der Fördermitgliedschaft bei
              der Kinderrechtsorganisation ECPAT Deutschland e.V. und beim
              „forum anders reisen“ engagieren wir uns zudem international.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionBestReisen
