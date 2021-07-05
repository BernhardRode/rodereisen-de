import * as React from "react"
import SectionHeadline from "./section-headline"

const SectionRodeVideo = () => (
  <section className="w-full pb-16">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:p-32">
          <div className="text-5xl text-center"></div>
          <h1 className="text-3xl text-blue-900 text-center pb-8">
            Träumen werden wahr
          </h1>
          <p className="text-center text-gray-400 pb-4">
            Wir freuen uns schon sehr darauf, eure Träume endlich wieder wahr
            werden zu lassen.
          </p>
        </div>
        <div>
          <div className="h-96 lg:p-8">
            <iframe
              src="https://player.vimeo.com/video/534828118?title=0&byline=0&portrait=0"
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  </section>
)

export default SectionRodeVideo
