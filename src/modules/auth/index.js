const { gql } = require('apollo-server-express')
// The schema (feel free to split these in a subfolder if you'd like)
const typeDefs = gql`
 
  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }
  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
  }
  
  extend type Query {
    me: User @isAuthenticated
  }
  
  extend type Mutation {
    login(
      email: String!,
      password: String!
    ): AuthData
    signup(
      email: String!,
      password: String!,
      firstName: String!,
      lastName: String!
    ): User
  }

`
const resolvers = require('./resolvers')
module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [
    typeDefs
  ],
  resolvers
}