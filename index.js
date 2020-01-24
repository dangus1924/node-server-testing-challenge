const express = require('express')
const helmet = require('helmet')
const server = express()

const port = process.env.PORT || 5000

server.use(express.json())
server.use(helmet())

server.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Node Testing with JEST!',
    })
})

if (!module.parent){
    server.listen(port, () =>{ 
        console.log(`server is now listening at port: ${port}`)
    })
}
module.exports = server
