import React from "react"

import MessengerChat from "./src/components/MessengerChat"

const wrapPageElement = ({ element }) => (
  <div>
    {element}
    <MessengerChat />
  </div>
)

export default wrapPageElement
