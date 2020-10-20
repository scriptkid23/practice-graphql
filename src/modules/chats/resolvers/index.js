const {createRoom,createMessage} = require('./mutations');


const {room,rooms,messages}  =  require('./queries');

const resolvers = {
    Query : {
        room,
        rooms,
        messages
    },
    Mutation : {
        createRoom,
        createMessage
    }

}
module.exports = resolvers