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
    
      CreateMessageService([message],userId,sendTo,pubsub)
    
    }
    else if(messageStore[messageStore.length - 1].sendBy._id.toString() === userId){
      messageStore[messageStore.length - 1].message.push(message);
      let id = messageStore[messageStore.length - 1]._id;
      UpdateMessageService(id,messageStore[messageStore.length - 1].message,pubsub)

    }
    else{
      CreateMessageService([message],userId,sendTo,pubsub)
    }
    

}
const createRoom = async (_, {
    name
  }, { user,pubsub }) => {
    console.log("user",user,"pubsub",pubsub)
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