const express = require('express')
const colorModel = require('./color-model')
const db = require('../database/db-config')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await colorModel.list())
    } catch(err) {
        next(err)
    }
})