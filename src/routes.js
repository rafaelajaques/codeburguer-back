const { Router } = require('express')
const routes = new Router()

routes.get('/', (request, response) => {
    return response.json({ message: "Helo World" })
})

module.exports = routes