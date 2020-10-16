const Room = require('../../../models/Room');

const createRoom = async (_, {
    name
  }, { user }) => {
 
    const userId = user._id.toString()
  
    const newRoom = new Room({
      name,
      createdBy: userId
    })
  
    await newRoom
      .populate('createdBy')
      .execPopulate()
  
    return newRoom.save()
  }
  
  module.exports = createRoom