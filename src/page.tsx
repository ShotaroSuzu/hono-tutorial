import { Env, Hono } from "hono"
import { BlankSchema } from "hono/types"

const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  )
}

export function page(app: Hono<Env, BlankSchema, "/">) {
  app.get('/page', (c) => {
    return c.html(<View />)
  })
}
