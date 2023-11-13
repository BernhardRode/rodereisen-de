import { app } from "@azure/functions"

const handler = () => {
  return {
    body: JSON.stringify({ env: process.env, version: process.version }),
  }
}

app.http("process", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler,
})
