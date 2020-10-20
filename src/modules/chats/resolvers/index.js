const {createRoom,createMessage} = require('./mutations');
const {subscribeRoom,subscribeMessage} = require('./subscriptions')
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
    },
    Subscription: {
        subscribeRoom,
        subscribeMessage
    }

}
module.exports = resolvers