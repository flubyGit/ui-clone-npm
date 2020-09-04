import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import routes from './src/routes/routes'
import requireDir from 'require-dir'
import bp from 'body-parser'
dotenv.config()

const app = express()
const port = process.env.PORT || 3008
requireDir('./src/models')

app.use(morgan('tiny'))
mongoose
  .connect(process.env.CONNECTION_SGBD, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit('success')
  })
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

app.use('/npm', routes)
app.use(cors)

app.on('success', () => {
  app.listen(port, () => {
    console.log(`Server running at the port ${port}`)
  })
})
