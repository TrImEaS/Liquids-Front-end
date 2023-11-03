import express from 'express'
import config from './libs/config.js'
import db from './db.js'
import middlewares from './libs/middlewares.js'
import boot from './libs/boot.js'
import routes from './routes/index.js'

const app = express()

db(app)
middlewares(app)
routes(app)
boot(app)
