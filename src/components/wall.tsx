import * as React from "react"

export interface Walltile {
  colspan?: number
  src?: string
  type: "image" | "text"
}

const Wall = ({ tiles }) => (
  <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 w-full container rounded-xl overflow-hidden mt-40">
    {tiles.map((tile, index) => (
      <div
        key={index}
        className={`block bg-cover bg-no-repeat h-72 hover:animate-bounce ${
          tile.colspan === 2 ? "col-span-2" : null
        }`}
        style={{ backgroundImage: `url(${tile.src})` }}
      >
        &nbsp;
      </div>
    ))}
  </div>
)

interface WallProps {
  tiles?: Walltile[]
}

Wall.defaultProps = {
  tiles: ``,
}

export default Wall
