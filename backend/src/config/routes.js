const express = require('express')

module.exports = function(server){
    //API ROUTES
    const router = express.Router()
    server.use('api', router)

    //TODO ROUTES
    const todoService = require('../api/todo/todo-service')
    todoService.register(router, './todos')
}