import { Hono } from "hono"

const page = new Hono()
const View = () => {
  return (
    <html>
      <body>
        <h1>Hello Hono!</h1>
      </body>
    </html>
  )
}

page.get('', (c) => {
  return c.html(<View />)
})

export default page