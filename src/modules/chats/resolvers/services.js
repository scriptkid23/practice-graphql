const Message = require('../../../models/Message')

function CreateMessageService(message,sendBy,sendTo,pubsub){
    const newMessage = new Message({ 
        message : message,
        sendBy  : sendBy,
        sendTo  : sendTo
    })
    newMessage.
    populate('sendBy').
    populate('sendTo').
    execPopulate();
    // pubsub.publish("MESSAGE_SUBSCRIBE", newMessage)
    return newMessage.save()
}
function UpdateMessageService(id,message,pubsub){
    Message.findById(id,(err,res) => {
        res.message = message 
        // pubsub.publish("MESSAGE_SUBSCRIBE", res)
        res.save()
    })
    
}
module.exports ={CreateMessageService,UpdateMessageService}