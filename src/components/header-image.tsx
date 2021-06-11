import * as React from "react"
import HeaderImageCredit from "./header-image-credit"

const HeaderImage = (props: HeaderImageProps) => {
  const { src, heightClass } = props
  return src ? (
    <div
      style={{ backgroundImage: `url(${src})`, zIndex: -1 }}
      className={`fixed bg-contain top-0 left-0 right-0 bottom-0 bg-no-repeat ${heightClass}`}
    >
      {props.children}
      {props.credit ? <HeaderImageCredit /> : null}
    </div>
  ) : null
}

interface HeaderImageProps {
  src: string
  alt: string
  heightClass: string
  children?: any
  credit?: string
}

HeaderImage.defaultProps = {
  alt: `Reisebüro Rode GmbH`,
}

export default HeaderImage
