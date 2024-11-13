import HeaderImage from "../components/header-image"
import Layout from "../components/layout"
import SectionHeadline from "../components/section-headline"
import PageHead from "../components/page-head"
import Spinner from "../components/spinner"
import * as React from "react"
import { Suspense, useEffect, useRef, useState } from "react"
import SectionOffers from "../components/section-offers"
import { graphql } from "gatsby"

const AngebotePage = props => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState('2000px');

  useEffect(() => {
    const handleMessage = (event) => {
      // Ensure the message is from the expected origin
      if (event.origin !== "https://www.meinereiseangebote.de") return;

      // Handle the message
      if (event.data.type === 'setHeight') {
        setIframeHeight(event.data.height + 'px');
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  const id ="XJQZ-9250";
  
  return (
    <Layout>
      <PageHead title="Angebote" />
      <HeaderImage banner="Banner_3">
        <SectionHeadline headline="Aktuelle" subheadline="Angebote" />
        <iframe
          ref={iframeRef}
          style={{ width: '100%', height: iframeHeight, border: 'none', overflow: 'hidden' }}
          src={ ["https://www.meinereiseangebote.de", id].join('/') }
        ></iframe>
      </HeaderImage>
    </Layout>
  )
}

export const query = graphql`
  {
    smallPortraits: allFile(
      filter: { sourceInstanceName: { eq: "portraits" } }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.5
              transformOptions: { fit: INSIDE }
              height: 540
            )
          }
          id
          name
          extension
        }
      }
    }
    smallPortraitsFunny: allFile(
      filter: { sourceInstanceName: { eq: "portraits-funny" } }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.5
              transformOptions: { fit: INSIDE }
              height: 540
            )
          }
          id
          name
          extension
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          headings {
            value
          }
          html
          frontmatter {
            warenkorb
            name
            nachname
            slug
            fachgebiete
            kontakt {
              email
            }
            bilder {
              bild
              bild_hover
            }
          }
        }
      }
    }
  }
`

export default AngebotePage