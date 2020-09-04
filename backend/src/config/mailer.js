import nodemailer from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'
import dotenv from 'dotenv'
dotenv.config()

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_AUTH_USER,
    pass: process.env.MAIL_AUTH_PASSWORD,
  },
})

transport.use(
  'compile',
  hbs({
    viewEngine: {
      layoutsDir: './src/views/',
      defaultLayout: null,
    },
    viewPath: './src/views/',
  })
)

export default transport
