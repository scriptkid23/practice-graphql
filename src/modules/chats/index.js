const { gql } = require('apollo-server-express')

const typeDefs = gql`


  type Room {
    id: ID! 
    name: String!
    createdAt: Date!
    createdBy: User!
   }
   type Message {
       id: ID!
       message: [String]!
       sendBy: User!
       sendTo: Room!
       sendAt: Date!
   }
`

const resolvers = require('./resolvers')

module.exports = {
  typeDefs: [
    typeDefs
  ],
  resolvers
}