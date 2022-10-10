import Koa from "koa"
import Router from "@koa/router"
import { getLeaderboardPlayer } from "./omegaStrikersApi/getLeaderboardPlayer"

export default async function httpServer() {
  const app = new Koa()
  const router = new Router()

  router.get("/request-player/:username", async (ctx, next) => {
    await getLeaderboardPlayer({ username: ctx.params.username })
    ctx.body = {}
  })

  app.use(router.routes()).use(router.allowedMethods())

  app.listen(80)

  console.log("Running HTTP server at http://localhost:1782/")
}
