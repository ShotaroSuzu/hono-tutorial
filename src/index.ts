import { Hono } from 'hono'
import { page } from './page'


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!'
  })
})

app.get('posts/:id', (c) => {
  const page = c.req.query('page')
  const id = c.req.param('id')
  c.header('X-message', 'Hi!')
  return c.text(`You want see ${page} of ${id}`)
})

app.get('/posts', (c) => {
  console.log(c.body)
  return c.text('Created!', 201)
})

app.delete('/posts/:id', (c) => {
  return c.text(`${c.req.param('id')} is deleted!`)
})

page(app)
export default app
