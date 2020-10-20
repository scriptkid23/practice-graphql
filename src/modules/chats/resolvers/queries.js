const { ApolloError } = require('apollo-server-express')
const Room = require('../../../models/Room')
const Message = require('../../../models/Message')
const room = async (_, args) => {
  const { id } = args
  const room = await Room
    .findById(id)
    .populate('createdBy')

  if (!room) {
    throw new ApolloError('Not found')
  }

  return room
}
const messages = async(_) => {
    const messages = await Message.
    find().
    populate('sendTo').
    populate('sendBy')
    return messages
}
const rooms = async (_) => {
  const rooms = await Room
    .find()
    .populate('createdBy')

  return rooms
}

module.exports = {rooms,room,messages}