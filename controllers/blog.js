const blogRouter = require('express').Router()
const Blog = require('../models/blogs')
const logger = require('../utils/logger')
const midware = require('../utils/middleware')

blogRouter.get('/', (request, response, next) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
    .catch(error => {
      logger.error(error.message)
      next(error)
    })
})

blogRouter.post('/', (request, response, next) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
    .catch(error => {
      logger.log(error.message)
      next(error)
    })
})

module.exports = blogRouter