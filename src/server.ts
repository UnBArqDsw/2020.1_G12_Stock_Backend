import express, { Response, Request } from 'express'

const PORT = 3000
const HOST = '0.0.0.0'
const app = express()
app.get('/', (req: Response, res: Request) => {
  res.send('teste')
})
app.listen(PORT, HOST)
