// of resolvers
const Message = require('../../../models/Message')
const Room = require('../../../models/Room');
const {CreateMessageService,UpdateMessageService} = require('./services')
const createMessage = async (_,{message,sendTo},{user,pubsub}) => {
    const userId = user._id.toString();
    
    var messageStore = await Message.
    find().
    populate('sendTo').populate('sendBy');
    messageStore = messageStore.filter(value => value.sendTo._id.toString() === sendTo)
    if(messageStore.length === 0){
    
      let result = CreateMessageService([message],userId,sendTo)
      messageStore.push(result)
      pubsub.publish("NEW_MESSAGE",messageStore)
      return result
    
    }
    else if(messageStore[messageStore.length - 1].sendBy._id.toString() === userId){
      let id = messageStore[messageStore.length - 1]._id;
      messageStore[messageStore.length - 1].message.push(message)
      pubsub.publish("NEW_MESSAGE",messageStore)
      return UpdateMessageService(id,message)

    }
    else{
      let result = CreateMessageService([message],userId,sendTo)
      messageStore.push(result)
      pubsub.publish("NEW_MESSAGE",messageStore)
      return result
    }
 

}
const createRoom = async (_, {
    name
  }, { user,pubsub }) => {
    const userId = user._id.toString()
    const newRoom = new Room({
      name,
      createdBy: userId
    })
  
    await newRoom
      .populate('createdBy')
      .execPopulate()
    pubsub.publish("NEW_ROOM",newRoom)
    return newRoom.save()
  }
  
  module.exports = {createMessage, createRoom}