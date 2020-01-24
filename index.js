const express = require('express')
const colorRouter = require('./color/color-router')
const colorModel = require('./color/color-model')

const server = express()
const port = process.env.PORT || 5000

server.use(express.json())



server.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Node Testing with JEST!',
    })
})

// server.use('/api/color', colorRouter)

server.get("/color", async (req, res, next) => {
    try {
      const color = await colorModel.list()
      res.status(200).json(color)
    } catch (err) {
      next(err)
    }
  })
  
  server.post("/color", async (req, res, next) => {
    try {
      const hobbit = await colorModel.insert(req.body)
      res.status(201).json(color)
    } catch (err) {
      next(err)
    }
  })

server.use((err, req, res, next) => {
    console.log("Error:", err)
    res.status(500).json({
      message: "Something went wrong",
    })
  })

if (!module.parent){
    server.listen(port, () =>{ 
        console.log(`server is now listening at port: ${port}`)
    })
}
module.exports = server
