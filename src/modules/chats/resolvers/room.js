const { ApolloError } = require('apollo-server-express')
const Room = require('../../../models/Room')

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

module.exports = room