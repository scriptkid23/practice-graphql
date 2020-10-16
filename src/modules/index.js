const { makeExecutableSchemaFromModules } = require('../utils/modules')
const auth = require('./auth')
const books = require('./books')
const chats = require('./chats')
module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    books,
    // chats,
  ]
})
