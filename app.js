const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const cors = require('cors')
const blogRouter = require('./controllers/blog')
const midware = require('./utils/middleware')
const app = express()

if (config.MONGODB_URI)
    mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(() => {
            logger.log('Successfully connected to MongoDB.')
        })
        .catch(error => logger.error('Unable to connect to MongoDB:', error.message))

else {
    console.log('No URI for MongoDB provided!\nCheck your .env file!\nExiting...')
    process.exit(-1)
}

app.use(cors())
app.use(express.json())

app.use('/api/notes', blogRouter)

app.use(midware.errorHandler)
app.use(midware.invalidEndpoint)

module.exports = app
