import { Hono } from 'hono'
import { page } from './page'
import { basicAuth } from 'hono/basic-auth'
import api from './api'


const app = new Hono()
app.use(
  '/admin/*',
  basicAuth({
    username: 'admin',
    password: 'secret',
  })
)
app.route('', api)

page(app)
export default app
