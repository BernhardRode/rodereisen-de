import React, { useEffect } from "react"

function MessengerChat() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v11.0",
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = "https://connect.facebook.net/de_DE/sdk/xfbml.customerchat.js"
      fjs.parentNode.insertBefore(js, fjs)
    })(document, "script", "facebook-jssdk")
  })
  return (
    <>
      <div
        style={{
          height: `60px`,
          backgroundColor: "red",
        }}
        id="fb-root"
      />
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id="106339566057957"
      />
    </>
  )
}

export default MessengerChat
