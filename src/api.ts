import { Hono } from 'hono'

const api = new Hono()

api.get('/admin', (c) => {
  return c.text('You are authorized!')
})

api.get('/', (c) => {
  return c.text('Hello Hono!')
})

api.get('/api/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello Hono!'
  })
})

api.get('/posts/:id', (c) => {
  const page = c.req.query('page')
  const id = c.req.param('id')
  c.header('X-message', 'Hi!')
  return c.text(`You want see ${page} of ${id}`)
})

api.get('/posts', (c) => {
  console.log(c.body)
  return c.text('Created!', 201)
})

api.delete('/posts/:id', (c) => {
  return c.text(`${c.req.param('id')} is deleted!`)
})
export default api