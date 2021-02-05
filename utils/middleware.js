const { response } = require('express')
const logger = require('./logger')

const invalidEndpoint = (response) => {
	response.status(404).send({ error:'invalid API endpoint' })
}

const errorHandler = (error, request, response, next) => {
	logger.error(error.message)

	if (error.name = 'CastError') {
		return response.status(400).send({ error:'CastError: Invalid format' })
	}
	next(error)
}

module.exports = {
	invalidEndpoint,
	errorHandler
}
