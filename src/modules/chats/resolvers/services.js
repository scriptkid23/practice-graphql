const Message = require('../../../models/Message')

async function CreateMessageService(message,sendBy,sendTo){
    const newMessage = new Message({ 
        message : message,
        sendBy  : sendBy,
        sendTo  : sendTo
    })
    result = await newMessage.
    populate('sendBy').
    populate('sendTo').
    execPopulate();
    newMessage.save()
    return result 
}
async function UpdateMessageService(id,message){
    let result =  await Message.findById(id).populate('sendBy').populate('sendTo');
    result.message.push(message)
    result.save()
    return result
}
module.exports ={CreateMessageService,UpdateMessageService}