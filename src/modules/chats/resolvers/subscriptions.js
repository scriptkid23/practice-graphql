const pubsub = require('../../../utils/pubsub')
const subscribeRoom = {
    subscribe: () => pubsub.asyncIterator("NEW_ROOM"),
    resolve: payload => {
        return payload
      },
};
const subscribeMessage = {
    subscribe: () => pubsub.asyncIterator("NEW_MESSAGE"),
    resolve: payload => {
        return payload
      },
}
module.exports = {subscribeRoom,subscribeMessage}