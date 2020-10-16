import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import setRoutes from './routes/index.routes'
import './database'

class App {
  app: any
  constructor () {
    this.app = express()
    this.init()
    this.middlewares()
    this.routes()
  }

  init (): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  middlewares () { }

  routes () {
    setRoutes(this.app)
  }
}

export default new App().app
