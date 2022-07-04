import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { getOffers } from "./parser"

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const id = req.query.id || (req.body && req.body.id)

  try {
    if (!id) {
      throw new Error("Missing parameter.")
    }

    const body = await getOffers(id)

    context.res = {
      // status: 200, /* Defaults to 200 */
      body,
    }
  } catch (error) {
    console.log(error)
    context.res = {
      status: 500 /* Defaults to 200 */,
      body: error ? { msg: error } : { msg: "something happend" },
    }
  }
}

export default httpTrigger
