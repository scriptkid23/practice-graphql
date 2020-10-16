const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
  
})
const Message = mongoose.model('Room', messageSchema)
module.exports = Message