const Message = require('../../../models/Message')

function CreateMessageService(message,sendBy,sendTo){
    const newMessage = new Message({ 
        message : message,
        sendBy  : sendBy,
        sendTo  : sendTo
    })
    newMessage.
    populate('sendBy').
    populate('sendTo').
    execPopulate();

    return newMessage.save()
}
function UpdateMessageService(id,message){
    Message.findById(id,(err,res) => {
        res.message = message 
        res.save()
    })
    
}
module.exports ={CreateMessageService,UpdateMessageService}