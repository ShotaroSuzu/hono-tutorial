import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import api from './api'
import page from './page'

const app = new Hono()
app.use(
  '/admin/*',
  basicAuth({
    username: 'admin',
    password: 'secret',
  })
)
app.route('', api)
app.route('/page', page)

export default app
