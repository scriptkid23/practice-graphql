// const createMessage = require('./create-message');
const createRoom    = require('./create-room');
// const messages      = require('./messages');
const room          = require('./room');
const rooms         =  require('./rooms');

const resolvers = {
    Query : {
        // messages,
        room,
        rooms
    },
    Mutation : {
        createRoom,
        // createMessage
    }

}
module.exports = resolvers