const mongoose = require('mongoose')
const { SubscriptionServer } = require('subscriptions-transport-ws');
const { execute,subscribe} = require('graphql')
const url = require('url')
const server = require('./app')
const config = require('./config')
const schema = require('./modules')
const mongoHost = new url.URL(config.MONGODB_URI).host
const startServer = (async function () {
  const mongooseOptions = {
    useNewUrlParser: true,
    promiseLibrary: global.Promise,
    useUnifiedTopology: true
  }
  try {
    await Promise.all([
      mongoose.connect(config.MONGODB_URI, mongooseOptions),
      server.listen(config.PORT,() => {
        new SubscriptionServer({
            execute,
            subscribe,
            schema : schema
        },
          {
            server : server,
            path: '/graphql',
          }
        )
      })
    ])
    // eslint-disable-next-line no-console
    console.log(`Server has started on port: ${config.PORT}, connected to mongo at ${mongoHost}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Could not start the app: `, error)
  }
})
// Let's make Node.js clustered for beter multi-core performance
startServer()