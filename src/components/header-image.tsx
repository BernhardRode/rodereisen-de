import * as React from "react"
import HeaderImageCredit from "./header-image-credit"

const HeaderImage = (props: HeaderImageProps) => {
  const { src, backgroundColor } = props
  return src ? (
    <div className={`w-full pt-36`} style={{ backgroundColor }}>
      <div
        style={{ backgroundImage: `url(${src})`, zIndex: -1, height: 625 }}
        className={`container bg-cover bg-no-repeat`}
      >
        {props.children}
        {props.credit ? <HeaderImageCredit /> : null}
      </div>
    </div>
  ) : null
}

interface HeaderImageProps {
  src: string
  backgroundColor?: string
  children?: any
  credit?: string
}

HeaderImage.defaultProps = {
  alt: `Reisebüro Rode GmbH`,
}

export default HeaderImage
