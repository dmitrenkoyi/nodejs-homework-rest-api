const signup = require('./signup')
const login = require('./login')
const current = require('./getCurrent')
const logout = require('./logout')
const updateSubscription = require('./updateSubscription.js')
const updateAvatar = require('./updateAvatar')

module.exports = {
  signup,
  login,
  current,
  logout,
  updateSubscription,
  updateAvatar,
}
