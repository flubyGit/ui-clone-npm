import User from '../models/User'
import generateJWTToken from '../utils'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import mailer from '../config/mailer'

class App {
  async index(req, res) {
    try {
      const findUser = await User.find()
      if (findUser) {
        return res.json(findUser)
      }
    } catch (error) {
      return res.status(400).json({ error: 'Error get itens.' })
    }
  }
  async store(req, res) {
    const { email } = req.body
    try {
      if (await User.findOne({ email })) {
        return res
          .status(400)
          .send({ error: 'User already exists in database!' })
      }
      if (req.body && req._body) {
        const user = await User.create(req.body)
        user.password = undefined
        if (user) {
          return res.status(201).send({
            user,
            token: generateJWTToken({ id: user.id }),
          })
        }
      }
    } catch (error) {
      if (error.errors) {
        return res.status(400).json({ error: 'Error create user in database' })
      }
    }
  }
  async authenticate(req, res) {
    const { email, password } = req.body
    try {
      const user = await User.findOne({ email }).select('+password')
      if (!user) return res.status(400).send({ error: 'User not found' })

      if (!(await bcrypt.compare(password, user.password))) {
        // Senha do bd !== senha do req.body
        return res.status(400).send({ error: 'Invalid password' })
      }

      user.password = undefined

      return res.send({
        user,
        id: generateJWTToken({ id: user.id }),
      })
    } catch (error) {
      return res.status(400).send({ error: 'Error authenticate user' })
    }
  }
  async forgotPassword(req, res) {
    const { email } = req.body

    try {
      const user = await User.findOne({ email })
      if (!user) return res.status(400).send({ errors: 'User already exists!' })

      const token = crypto.randomBytes(20).toString('hex')
      const now = new Date()
      now.setHours(now.getHours() + 1)

      await User.findByIdAndUpdate(user.id, {
        $set: {
          passwordResetToken: token,
          passwordResetExpires: now,
        },
      })

      mailer.sendMail(
        {
          to: email,
          from: 'profissionalf.andre@gmail.com',
          template: 'index',
          context: { token },
        },
        err => {
          if (err.responseCode === 535) {
            return res.status(535).send({ error: 'Invalid login or password' })
          }

          return res.send()
        }
      )
    } catch (error) {
      return res.status(400).send({ error: 'Error forgot password, try again' })
    }
  }
  async resetPassword(req, res) {
    console.log('Opa')
    const { email, token, password } = req.body

    try {
      const user = await User.findOne({ email }).select(
        '+passwordResetToken passwordResetExpires'
      )
      if (!user) return res.status(400).send({ error: 'User not found' })

      if (token !== user.passwordResetToken) {
        return res.status(400).send({ error: 'Token invalid' })
      }
      const now = new Date()

      if (now > user.passwordResetExpires) {
        return res
          .status(400)
          .send({ error: 'Token expires, please generate a new token!' })
      }
      user.password = password

      await user.save()
      return res.send()
    } catch (error) {
      return res
        .status(400)
        .send({ error: 'Cannot reset password, try again!' })
    }
  }
}
export default new App()
