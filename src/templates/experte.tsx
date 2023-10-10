import { getSrc } from "gatsby-plugin-image"
import React from "react"
import ExpertHeaderImage from "../components/experte-header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import SectionOffers from "../components/section-offers"
import PageHead from "../components/page-head"

const ExpertPage = props => {
  const cleanPhone = number => {
    return number.replace("(0)", "").replace(/ /g, "").replace(/\-/g, "")
  }

  const offers = [] // data.allOffers.edges.map(({ node }) => node)
  const { pageContext } = props
  const { childMarkdownRemark } = pageContext
  const { html, frontmatter } = childMarkdownRemark
  const { telefon, email } = frontmatter.kontakt
  const telefonLink = cleanPhone(telefon)

  const frontLarge = pageContext?.images?.largePortrait?.node
    ? getSrc(pageContext.images.largePortrait.node)
    : null

  const backLarge = pageContext?.images?.largePortraitFunny?.node
    ? getSrc(pageContext.images.largePortraitFunny.node)
    : null

  return (
    <Layout>
      <PageHead title={`Experte ${frontmatter.name} ${frontmatter.nachname}`} />
      <ExpertHeaderImage front={frontLarge} back={backLarge}>
        <div className="container">
          <SectionHeadline headline="Experte" subheadline={frontmatter.name} />
          <div className="flex flex-col lg:flex-row overflow-hidden">
            <div className="flex-1">
              <div className="relative">
                <div className="flex flex-row rounded overflow-hidden">
                  <a
                    href={`mailto:${email}`}
                    className="text-blue-900 hover:text-pink-500 flex-grow"
                  >
                    <div className="flex flex-col items-center flex-grow">
                      <div className="text-white">
                        <div className="bg-blue-900 rounded-full inline-block p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-xl p-7 text-blue-900 hover:text-pink-500">
                        {email}
                      </div>
                    </div>
                  </a>
                  <a
                    href={`tel:${telefonLink}`}
                    className="text-blue-900 hover:text-pink-500 flex-grow"
                  >
                    <div className="flex flex-col items-center flex-grow">
                      <div className="text-white">
                        <div className="bg-blue-900 rounded-full inline-block p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-xl p-7 ">{telefon}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div
                className="ml-0 lg:ml-16 p-4 lg:p-0"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
          {offers.length > 0 ? (
            <>
              <SectionHeadline
                headline={`${frontmatter.name}'s`}
                subheadline="Angebote"
              />
              <SectionOffers offers={offers} />
            </>
          ) : null}
        </div>
      </ExpertHeaderImage>
    </Layout>
  )
}

export default ExpertPage
