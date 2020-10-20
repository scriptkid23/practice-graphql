const Message = require('../../../models/Message')
const Room = require('../../../models/Room');
const {CreateMessageService,UpdateMessageService} = require('./services')
const createMessage = async (_,{message,sendTo},{user}) => {
    const userId = user._id.toString();
    var messageStore = await Message.
    find().
    populate('sendTo').populate('sendBy');
    messageStore = messageStore.filter(value => value.sendTo._id.toString() === sendTo)
    if(messageStore.length === 0){
      CreateMessageService([message],userId,sendTo)
    }
    else if(messageStore[messageStore.length - 1].sendBy._id.toString() === userId){
      messageStore[messageStore.length - 1].message.push(message);
      let id = messageStore[messageStore.length - 1]._id;
      UpdateMessageService(id,messageStore[messageStore.length - 1].message)

    }
    else{
      CreateMessageService([message],userId,sendTo)
    }
    

}
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
  
  module.exports = {createMessage, createRoom}