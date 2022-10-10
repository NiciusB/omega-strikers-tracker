import Koa from "koa"
import Router from "@koa/router"

export default async function httpServer() {
  const app = new Koa()
  const router = new Router()

  router.get("/", (ctx, next) => {
    ctx.body = { test: 1 }
  })

  app.use(router.routes()).use(router.allowedMethods())

  app.listen(80)

  console.log("Running HTTP server at http://localhost:1782/")
}
