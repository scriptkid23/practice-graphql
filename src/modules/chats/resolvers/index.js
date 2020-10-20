const {createRoom,createMessage} = require('./mutations');
const {subscribeRoom} = require('./subscriptions')
const {room,rooms,messages}  =  require('./queries');
const pubsub = require('../../../utils/pubsub')
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
        subscribeRoom:{
            subscribe: () => pubsub.asyncIterator("NEW_ROOM"),
            resolve: payload => {
                return payload
              },
        },
        subscribeMessage:{
            subscribe: () => pubsub.asyncIterator("NEW_MESSAGE"),
            resolve: payload => {
                return payload
              },
        }
    }

}
module.exports = resolvers