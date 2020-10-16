const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
        message : {
            type : [String],
            required : true,
        },
        sendBy : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        sendTo : {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'Room',
            required: true
        },
        sendAt : {
            type :Date, 
            default : Date.now
        }

})
const Message = mongoose.model('Message', messageSchema)
module.exports = Message