const express = require('express')
const planetsController = require('./planets.controller')
const planetsRouter = express.Router()

planetsRouter.get('/planets',planetsController.getAllPlantes)

module.exports = planetsRouter

