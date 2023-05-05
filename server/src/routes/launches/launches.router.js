const express = require('express')
const launchController = require('./launches.controller')

const launchRouter = express.Router()

launchRouter.get('/launches',launchController.getAllLaunches)
launchRouter.post('/launches',launchController.postNewLaunch)
launchRouter.delete('/launches/:id',launchController.deleteLaunch)

module.exports = launchRouter
