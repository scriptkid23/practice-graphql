const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    createdBy: User!
    created: DateTime!
  }
  extend type Query {
    book(id: ID!): Book @isAuthenticated
    books: [Book] @isAuthenticated
  }
  extend type Mutation {
    createBook(
      title: String!
    ): Book
  }
  

`

const resolvers = require('./resolvers')

module.exports = {
  typeDefs: [
    typeDefs
  ],
  resolvers
}