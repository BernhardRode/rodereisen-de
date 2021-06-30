import * as React from "react"
import { useLayoutEffect } from "react"

// Hook
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden"
    document.body.scrollTop = 0
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle as any)
  }, []) // Empty array ensures effect is only run on mount and unmount
}

const ModalBooking = props => {
  useLockBodyScroll()

  const { onClose } = props

  const close = () => {
    onClose()
  }

  let { src } = props
  if (!src) {
    src =
      "https://outlook.office365.com/owa/calendar/ReisebroRode@rode.io/bookings/"
  }

  return (
    <>
      <div className="fixed h-screen max-h-screen w-screen z-50 top-0 left-0 right-0 bottom-0 bg-white">
        <div className="w-full h-full">
          <iframe className="w-full h-full" src={src}></iframe>
        </div>
        <a
          className="absolute top-10 right-10 text-5xl z-50 text-pink-500 cursor-pointer"
          onClick={() => close()}
        >
          ✖️
        </a>
      </div>
    </>
  )
}

export default ModalBooking
