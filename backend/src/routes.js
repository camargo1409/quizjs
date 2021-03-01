const routes = require('express').Router()
const questionController = require('./controllers/questionController')
const roundController = require('./controllers/roundController')
const roundQuestionController = require('./controllers/roundQuestionController')
const answerController = require('./controllers/answerController')

// Question routes
routes.post('/question', questionController.create)
routes.get('/question', questionController.index)

//Round routes 
routes.post('/round', roundController.create)
routes.get('/round', roundController.index)

//RoundQuestion routes
routes.get('/roundQuestion',roundQuestionController.show)

// Answer routes
routes.post('/answer',answerController.create)

module.exports = routes