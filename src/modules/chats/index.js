// defined Schema
const { gql } = require('apollo-server-express')
//Chat Schema
const typeDefs = gql`
  type Room {
    id: ID! 
    name: String!
    createdAt: DateTime!
    createdBy: User!
   }
   type Message {
       id: ID!
       message: [String!]
       sendBy: User!  
       sendTo: Room!
       sendAt: DateTime!
   }
 
  extend type Query {
      room(id: ID!): Room @isAuthenticated
      rooms: [Room] @isAuthenticated
      messages(id: ID!): [Message]
    }
  extend type Mutation {
    createRoom(
      name: String!
    ): Room
    createMessage(
      message: String!
      sendTo: ID!
    ): Message
  }
  type Subscription {
    subscribeRoom: Room!
    subscribeMessage: [Message]
  }
 
`

const resolvers = require('./resolvers')

module.exports = {
  typeDefs: [
    typeDefs
  ],
  resolvers
}