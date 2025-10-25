import { openapi } from '@elysiajs/openapi'
import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
  .use(openapi())
  .get('/', { message: 'Hello Nextjs' })
  .post('/', ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  })
  .post('/test', () => {
    console.log('test')
    return {
      message: 'ok',
    }
  })

export type App = typeof app

export const GET = app.fetch
export const POST = app.fetch
