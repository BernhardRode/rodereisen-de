import * as React from "react"

const ModalBooking = props => {
  const { onClose } = props
  return (
    <>
      <a
        className="absolute top-10 right-10 z-50 text-5xl text-pink-500 cursor-pointer"
        onClick={onClose}
      >
        ✖️
      </a>
      <div className="fixed h-screen max-h-screen w-screen top-0 left-0 right-0 bottom-0 bg-white blur opacity-95">
        <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            src="https://outlook.office365.com/owa/calendar/ReisebroRode@rode.io/bookings/"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default ModalBooking
