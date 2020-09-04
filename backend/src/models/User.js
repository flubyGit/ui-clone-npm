import { model, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'The field user is required.'],
    min: [true, 'The username field must be at least 3 characters.'],
  },
  email: {
    type: String,
    required: [true, 'The field user is required.'],
    min: [true, 'The username field must be at least 6 characters.'],
  },
  password: {
    type: String,
    required: [true, 'The password field must be least 10 caracters.'],
    select: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
})
UserSchema.pre('save', async function (next) {
  return bcrypt.hash(this.password, 10).then(hash => {
    this.password = hash
    next()
  })
})

const User = model('User', UserSchema)

export default User
