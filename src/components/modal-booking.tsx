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
      "https://outlook.office365.com/owa/calendar/ReisebroRode@rodereisen.de/bookings/"
  }

  return (
    <>
      <div className="fixed h-screen max-h-screen w-screen z-50 top-0 left-0 right-0 bottom-0 bg-white">
        <div className="w-full h-full">
          <iframe className="w-full h-full pb-100" src={src}></iframe>
        </div>
        <a
          className="absolute top-10 right-10 text-5xl text-center z-50 w-12 h-12"
          onClick={() => close()}
        >
          <div className="text-white bg-blue-900 rounded-full inline-block p-2">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </a>
      </div>
    </>
  )
}

export default ModalBooking
