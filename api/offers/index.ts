import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import fetch from "node-fetch"
import { parse } from "node-html-parser"

const BASE_URL = "https://www.meinereiseangebote.de"

const mapTime = (timeString) => {
  const s = timeString.split(".")
  const p = new Date(Date.parse(`${s[2]}-${s[1]}-${s[0]}`))
  return p
}

const getOffer = (page) => {
  try {
    const imageTag = page.querySelector(".ph-offer-image-placeholder")
    const image = imageTag.rawAttrs.split("url")[1].split(';"')[0].replace("('", "").replace("')", "")
    const destination = page.querySelector(".ph-offer-destination").childNodes[0].rawText.trim()
    const destinationDescription = page.querySelector(".ph-offer-destination-description").childNodes[0].rawText.trim()
    const city = page.querySelector(".ph-offer-city").childNodes[0].rawText.trim()
    const hotel = page.querySelector(".ph-offer-hotel").childNodes[0].rawText.trim()
    const time = page.querySelector(".ph-offer-traveltime").childNodes[0].rawText.trim().split(" - ").map(mapTime)
    const flight = page.querySelector(".ph-offer-flight").childNodes[0].rawText.trim()
    const [duration, description, pkg] = page
      .querySelector(".ph-offer-host")
      .childNodes.filter((a) => a.constructor.name === "TextNode")
      .map((s) => s.text)
      .map((s) => s.replace(/\t/g, ""))
      .map((s) => s.replace(/\n/g, ""))
      .map((s) => s.trim())
      .filter((s) => s !== "")
    const organizer = page.querySelector(".ph-offer-tour-logo img").getAttribute("src")
    const final = page.querySelector(".ph-offer-final").childNodes[0].rawText.trim()
    const price = parseFloat(
      page.querySelector(".ph-offer-price span").childNodes[0].rawText.trim().replace(" &euro;", "").replace(".", "")
    )
    const link = BASE_URL + page.querySelector("a").getAttribute("href")

    const result = {
      city,
      description,
      destination,
      destinationDescription,
      duration,
      final,
      flight,
      hotel,
      image,
      link,
      organizer,
      pkg,
      price,
      time,
    }

    return result
  } catch (error) {
    console.error(error)
    return null
  }
}

const getOffers = async (id = "GZTF-5717") => {
  console.log({ id })
  const url = `${BASE_URL}/${id}`
  const offersPage = await fetch(url)
  const offersBody = await offersPage.text()
  const root = parse(offersBody, {})
  return root
    .querySelectorAll(".ph-offer")
    .map(getOffer)
    .filter((a) => a !== null)
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log("HTTP trigger function processed a request.")
  const id = req.query.id || (req.body && req.body.id)

  try {
    const offers = await getOffers(id)

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: offers,
    }
  } catch (error) {
    context.res = {
      status: 500 /* Defaults to 200 */,
      body: error,
    }
  }
}

export default httpTrigger
