const mongoose = require('mongoose')

const url = require('url')
const app = require('./app')
const config = require('./config')
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
      app.listen(config.PORT)
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