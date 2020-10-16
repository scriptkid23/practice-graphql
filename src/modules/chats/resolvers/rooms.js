const Room = require('../../../models/Room')

const rooms = async (_) => {
  const rooms = await Room
    .find()
    .populate('createdBy')

  return rooms
}

module.exports = rooms