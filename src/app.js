const express = require('express')
// The reason why apollo-server-express is because later on for testing we use Supertest, which requires an app object
const { ApolloServer } = require('apollo-server-express');
const pubsub = require('./utils/pubsub')
// we don't have these yet, but don't worry we'll get there.
const context = require('./utils/context')
const schema = require('./modules')
const app = express()
// const pubsub = require('./modules/pubsub')
const {createServer} = require('http')

const apolloServer = new ApolloServer({
    schema,
    context: async ({ req }) => ({
      
      user: await context.getUser(req),// using for authentication with jwt 
      pubsub: pubsub
    })
  })

apolloServer.applyMiddleware({
    path: '/',
    app
})
const server = createServer(app);
module.exports = server