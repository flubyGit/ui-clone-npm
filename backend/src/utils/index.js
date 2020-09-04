import jwt from 'jsonwebtoken'

export default (params = {}) => {
  return jwt.sign(params, process.env.JWTTOKEN, {
    expiresIn: '2 days',
  })
}
